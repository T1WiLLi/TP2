export class StockFetcher {

    private apiKey: string;
    private apiUrl: string;

    constructor(apiKey: string) {
        this.apiKey = apiKey;
        this.apiUrl = 'https://www.alphavantage.co/query';
    }

    async fetchStockData(symbol: string): Promise<number> {
        const url = `${this.apiUrl}?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${this.apiKey}`;
        try {
            const response = await fetch(url);
            if(!response.ok) {
                throw new Error("Failed to fetch stock data");
            } 

            const data = await response.json();
            return this.extractLastPrice(data);
        } catch (error: any) {
            console.error("Error fetching stock data: ", error.message);
            throw error;
        }
    }

    private extractLastPrice(data: any): number {
        const timeSeries = data['Time Series (Daily)'];

        if(!timeSeries) {
            throw new Error("Time series data not available");
        }

        const latestDate = Object.keys(timeSeries)[0]; // Get the latest date
        return parseFloat(timeSeries[latestDate]['4. close']);
    }
}
