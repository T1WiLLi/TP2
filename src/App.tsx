import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
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
Things to do:

Reformating of all TSX Components, 
Reformating of all CSS class Components,
Reformating of all CSS's Code for all Components
*/
