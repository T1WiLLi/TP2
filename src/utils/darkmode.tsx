import { useEffect, useState } from "react";
import "../styles/components/darkmode.css";

export const DarkMode = () => {
    const [currentTheme, setCurrentTheme] = useState<string>(() => {
        const theme = document.cookie.split('; ').find(row => row.startsWith('theme='));
        return theme ? theme.split('=')[1] : 'dark'; // Default to 'light' if no theme cookie is found
    });

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

    useEffect(() => {
        if (currentTheme === 'dark') {
            setDarkMode();
        } else {
            setLightMode();
        }
    }, [currentTheme]); // Run whenever the currentTheme state changes

    return (
        <div>
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
