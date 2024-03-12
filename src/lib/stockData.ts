export class StockFetcher {

    private apiKey: string;
    private apiUrl: string;

    constructor(apiKey: string) {
        this.apiKey = apiKey;
        this.apiUrl = 'https://www.alphavantage.co/query';
    }

    async fetchStockData(symbol: string): Promise<any> {
        const url = `${this.apiUrl}?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${this.apiKey}`;
        try {
            const response = await fetch(url);
            if(!response.ok) {
                throw new Error("Failed to fetch stock data");
            } 

            const data = await response.json();
            return this.extractLast30DaysPrices(data);
        } catch (error: any) {
            console.error("Error fetching stock data: ", error.message);
        }
    }
    private extractLast30DaysPrices(data: any): number[] {
        const last30DaysPrices: number[] = [];
        const timeSeries = data['Time Series (Daily)'];

        if(!timeSeries) {
            throw new Error("Time series data not available");
        }

        let count:number = 0;
        for(const data in timeSeries) {
            if (count >= 30) {
                break;
            }

            last30DaysPrices.push(parseFloat(timeSeries[data]['4. close']));
            count++;
        }
        return last30DaysPrices;
    }
}