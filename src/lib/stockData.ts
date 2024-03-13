export class StockFetcher {
    private apiKey: string;
    private apiUrl: string;

    constructor(apiKey: string) {
        this.apiKey = apiKey;
        this.apiUrl = 'https://www.alphavantage.co/query';
    }

    async fetchRealTimeStockData(symbol: string, interval: string = '5min'): Promise<any> {
        const url = `${this.apiUrl}?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=${interval}&apikey=${this.apiKey}`;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Failed to fetch real-time stock data: ${response.statusText}`);
            }
    
            const data = await response.json();
            if (data['Error Message']) {
                throw new Error(`Failed to fetch real-time stock data: ${data['Error Message']}`);
            }
    
            return this.formatStockData(data);
        } catch (error: any) {
            console.error("Error fetching real-time stock data: ", error.message);
            return { error: true, message: error.message };
        }
    }

    private formatStockData(data: any): any {
        console.log(data);
        const stockPrice = data['Global Quote']['05. price'];
        const priceChange = data['Global Quote']['09. change'];
        const dailyHigh = data['Global Quote']['03. high'];
        const dailyLow = data['Global Quote']['04. low'];
        const dailyVolume = data['Global Quote']['06. volume'];
        const lastTradingTime = data['Global Quote']['07. latest trading day'];

        return {
            stockPrice,
            priceChange,
            dailyHigh,
            dailyLow,
            dailyVolume,
            lastTradingTime
        };
    }
}
