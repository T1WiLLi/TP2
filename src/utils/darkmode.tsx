import { useEffect, useState } from "react";
import "../styles/components/darkmode.css";

export const DarkMode = () => {
    const [currentTheme, setCurrentTheme] = useState<string>('');

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent');
        if (consent === 'true') {
            const themeCookie = document.cookie.split(';').find(row => row.trim().startsWith('theme='));
            const theme = themeCookie ? themeCookie.split('=')[1] : 'light';
            setCurrentTheme(theme);
            document.querySelector("body")?.setAttribute('data-theme', theme);
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

    return (
        <div>
            <input 
                className="darkmode__toggle"
                type="checkbox" 
                id="darkmode-toggle" 
                onChange={toggleTheme} 
                checked={currentTheme === 'dark'} 
            />
            <label htmlFor="darkmode-toggle" className="darkmode__toggle-label"></label>
        </div>
    );
};
