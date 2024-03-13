import { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { StockFetcher } from "../lib/stockData";
import "../styles/components/investor.css";
import bg from "/images/investor_background.jpg";

function Investor() {
    const [stockData, setStockData] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const apiKey = 'ZTC3LVLRSA9SOS4J';
    const stockSymbol = 'UBSFY'; 

    useEffect(() => {
        const stockFetcher = new StockFetcher(apiKey);

        if (!stockData) {
            stockFetcher.fetchStockData(stockSymbol)
                .then(data => {
                    setStockData(data);
                    setLoading(false);
                })
                .catch(error => {
                    console.error(error);
                    setLoading(false);
                });
        }
    }, []);

    const renderStockInfo = () => {
        console.log(stockData);
        const stockInfo = [
            { label: 'Stock Price', value: `$4.24`, change: `+0.036` },
            { label: 'Daily High', value: `$4.25` },
            { label: 'Daily Low', value: `$4.20` },
            { label: 'Daily Volume', value: `37 250` }
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
            <Container>
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
                    <p>Mar 12, 2024 4:00 PM EDT</p>
                    <p>Data Provided by AlphaVantage. Minimum 20 minutes delayed.</p>
                </div>
            </Container>
        </div>
    );
}

export default Investor;


/*
            { label: 'Stock Price', value: `$${stockData.stockPrice}`, change: stockData.priceChange },
            { label: 'Daily High', value: `$${stockData.dailyHigh}` },
            { label: 'Daily Low', value: `$${stockData.dailyLow}` },
            { label: 'Daily Volume', value: `${stockData.dailyVolume}` }

            {stockData && stockData.lastTradingTime}
*/