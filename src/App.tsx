import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { StockFetcher } from "./lib/stockData";
import Home from "./pages/home"

function App() {
    useEffect(() => {
        AOS.init({once: true});
    }, []);
  return (
    <>
      <Home/>
    </>
  );
}

export default App

/*
API KEY =  ZTC3LVLRSA9SOS4J

        const apiKey = 'ZTC3LVLRSA9SOS4J';
        const stockFetcher = new StockFetcher(apiKey);

        stockFetcher.fetchStockData('UBSFY')
            .then(prices => console.log(prices))
            .catch(error => console.error(error));
*/

/*
Things to do:

Reformating of all TSX Components, 
Reformating of all CSS class Components,
Reformating of all CSS's Code for all Components
*/
