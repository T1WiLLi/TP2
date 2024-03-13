export class StockFetcher {
    private apiKey: string;
    private apiUrl: string;

    constructor(apiKey: string) {
        this.apiKey = apiKey;
        this.apiUrl = 'https://www.alphavantage.co/query';
    }

    async fetchStockData(symbol: string): Promise<any> {
        const url = `${this.apiUrl}?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${this.apiKey}`;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Failed to fetch stock data: ${response.statusText}`);
            }

            const data = await response.json();
            if (data['Error Message']) {
                throw new Error(`Failed to fetch stock data: ${data['Error Message']}`);
            }

            return this.formatStockData(data);
        } catch (error: any) {
            console.error("Error fetching stock data: ", error.message);
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
