// Import necessary dependencies and styles
import { useEffect, useState } from "react";
import CookieConsent from "./cookieconsent"; // Import the CookieConsent component
import "../styles/components/darkmode.css";

// Define the DarkMode component
export const DarkMode = () => {
    // State to manage the current theme and the visibility of the consent box
    const [currentTheme, setCurrentTheme] = useState<string>(''); 
    const [showCookieConsent, setShowCookieConsent] = useState<boolean>(false);

    // Effect to check for user consent and set the theme accordingly
    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent');
        setShowCookieConsent(consent === null);
        
        if (consent === 'true') {
            const theme = document.cookie.split('; ').find(row => row.startsWith('theme='));
            setCurrentTheme(theme ? theme.split('=')[1] : 'dark');
        }
    }, []);

    // Function to set the theme to dark mode
    const setDarkMode = () => {
        document.querySelector("body")?.setAttribute('data-theme', 'dark');
        document.cookie = "theme=dark; expires=Fri, 31 Dec 9999 23:59:59 GMT";
        setCurrentTheme('dark');
    };
    
    // Function to set the theme to light mode
    const setLightMode = () => {
        document.querySelector("body")?.setAttribute('data-theme', 'light');
        document.cookie = "theme=light; expires=Fri, 31 Dec 9999 23:59:59 GMT";
        setCurrentTheme('light');
    };

    // Function to toggle between dark and light mode
    const toggleTheme = () => {
        if (currentTheme === 'dark') {
            setLightMode();
        } else {
            setDarkMode();
        }
    };

    // Function to handle user consent
    const handleConsent = (consent: boolean) => {
        if (consent) {
            localStorage.setItem('cookieConsent', 'true');
            const theme = document.cookie.split('; ').find(row => row.startsWith('theme='));
            setCurrentTheme(theme ? theme.split('=')[1] : 'dark');
        } else {
            localStorage.setItem('cookieConsent', 'false');
        }
        setShowCookieConsent(false);
    };

    // Render the DarkMode component with the CookieConsent component
    return (
        <div>
            {showCookieConsent && <CookieConsent onConsent={handleConsent} />}
            <input 
                className="darkmode-toggle"
                type="checkbox" 
                id="darkmode-toggle" 
                onChange={toggleTheme} 
                checked={currentTheme === 'dark'} 
            />
            <label htmlFor="darkmode-toggle" className="toggle-label"></label>
        </div>
    );
};
