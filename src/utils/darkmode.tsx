import { useEffect, useState } from "react";
import CookieConsent from "./cookieconsent"; // Import the CookieConsent component
import "../styles/components/darkmode.css";

export const DarkMode = () => {
    const [currentTheme, setCurrentTheme] = useState<string>(''); // Initially, don't set any theme
    const [showCookieConsent, setShowCookieConsent] = useState<boolean>(false);

    useEffect(() => {
        // Check if the user has given consent for cookies
        const consent = localStorage.getItem('cookieConsent');
        setShowCookieConsent(consent === null);
        
        // Set theme based on cookie only if consent is given
        if (consent === 'true') {
            const theme = document.cookie.split('; ').find(row => row.startsWith('theme='));
            setCurrentTheme(theme ? theme.split('=')[1] : 'dark');
        }
    }, []);

    const setDarkMode = () => {
        document.querySelector("body")?.setAttribute('data-theme', 'dark');
        document.cookie = "theme=dark; expires=Fri, 31 Dec 9999 23:59:59 GMT";
        setCurrentTheme('dark');
    };
    
    const setLightMode = () => {
        document.querySelector("body")?.setAttribute('data-theme', 'light');
        document.cookie = "theme=light; expires=Fri, 31 Dec 9999 23:59:59 GMT";
        setCurrentTheme('light');
    };

    const toggleTheme = () => {
        if (currentTheme === 'dark') {
            setLightMode();
        } else {
            setDarkMode();
        }
    };

    const handleConsent = (consent: boolean) => {
        if (consent) {
            localStorage.setItem('cookieConsent', 'true');
            // Set theme after consent is given
            const theme = document.cookie.split('; ').find(row => row.startsWith('theme='));
            setCurrentTheme(theme ? theme.split('=')[1] : 'dark');
        } else {
            localStorage.setItem('cookieConsent', 'false');
        }
        setShowCookieConsent(false);
    };

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
