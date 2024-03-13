import { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { StockFetcher } from "../lib/stockData";
import "../styles/components/investor.css";
import bg from "/images/investor_background.jpg";
import { news } from "../config/newsinvestorconfig";
import new1 from "../assets/images/news/new1.jpg";
import new2 from "../assets/images/news/new2.jpg";
import new3 from "../assets/images/news/new3.jpg";


interface Stock {
    stockPrice:string;
    priceChange:string;
    dailyHigh:string;
    dailyLow:string;
    dailyVolume:string;
    lastTradingTime:string;
}

const renderLastTradingTime = (lastTradingTime: string) => {
    const date = new Date(lastTradingTime);
    const options: Intl.DateTimeFormatOptions = {
        hour: 'numeric',
        minute: 'numeric',
        timeZoneName: 'short'
    };
    const formattedTime = date.toLocaleString('en-US', options);
    return formattedTime;
};

function Investor() {
    const [stockData, setStockData] = useState<Stock | null>(null);
    const [loading, setLoading] = useState(true);
    const apiKey = 'ZTC3LVLRSA9SOS4J';
    const stockSymbol = 'UBSFY'; 
    const fetchStockDataEnabled = false; // Set to true to fetch data from the API! 
    const newsImages: string[] = [new1, new2, new3];

    useEffect(() => {
        if (fetchStockDataEnabled) {
            const stockFetcher = new StockFetcher(apiKey);

            if (!stockData) {
                stockFetcher.fetchRealTimeStockData(stockSymbol)
                    .then(data => {
                        setStockData(data);
                        setLoading(false);
                    })
                    .catch(error => {
                        console.error(error);
                        setLoading(false);
                    });
            }
        }
    }, [fetchStockDataEnabled]);

    const renderStockInfo = () => {
        console.log(stockData);
        const stockInfo = [
            { label: 'Stock Price', value: `$${stockData?.stockPrice}`, change: `${stockData?.priceChange}` },
            { label: 'Daily High', value: `$${stockData?.dailyHigh}` },
            { label: 'Daily Low', value: `$${stockData?.dailyLow}` },
            { label: 'Daily Volume', value: `${stockData?.dailyVolume}` }
        ];

        return stockInfo.map((info, index) => (
            <div className="info d-flex flex-column" key={index}>
                <h4 className="mb-0 fw-light">{info.label}</h4>
                <h1>{info.value} {info.change && <span>{info.change}</span>}</h1>
            </div>
        ));
    };

    return (
        <div id="investor" className="investor__content-wrapper mt-5">
            <div className="investor__header position-relative">
                <img src={bg} alt="" />
                <h1 className="position-absolute fw-bolder">Investors Center</h1>
            </div>
            <Container className="mb-5">
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <Row className="investor__info-row mb-0 mt-5">
                        <Col md={9}>
                            <div className="investor__info d-flex justify-content-between">
                                {renderStockInfo()}
                            </div>
                        </Col>
                        <Col md={3} className="position-relative d-flex flex-column align-items-center justify-content-end">
                            <Button className="mb-3" variant="primary">More Stock Information</Button>
                        </Col>
                    </Row>
                )}
                <div className="investor__info-date mt-2 mb-0">
                    <p>{stockData && stockData.lastTradingTime + ' ' + renderLastTradingTime(stockData.lastTradingTime)}</p>
                    <p>Data Provided by AlphaVantage. Minimum 20 minutes delayed.</p>
                </div>
                <h1 className="investor__newsroom-header mt-5 mb-4">Newsroom</h1>
                <Row className="g-4">
                    {news.map((newsItem, index) => (
                        <Col className="g-4" key={index} md={6}>
                            <div className="news-card overflow-hidden">
                                <img className="img-fluid mb-4" src={newsImages[index]} alt="image"/>
                                <h3 className="px-4 mb-1 fw-bold">{newsItem.title}</h3>
                                <p className="date px-4 mb-1">{newsItem.date.toLocaleDateString()}</p>
                                <p className="px-4 mb-3 fw-normal">{newsItem.desc}</p>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default Investor;