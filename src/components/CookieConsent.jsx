import { useState, useEffect } from 'react';
import './CookieConsent.css';

const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user has already made a choice
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            // Slight delay to not overwhelm the user immediately
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'accepted');
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem('cookieConsent', 'declined');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="cookie-consent-overlay">
            <div className="cookie-consent-banner">
                <div className="cookie-consent-content">
                    <h3>我們使用 Cookie</h3>
                    <p>
                        本網站使用 Cookie 以提升您的瀏覽體驗、分析網站流量，並提供客製化內容。
                        點擊「同意」即表示您同意我們使用相關 Cookie。您可以隨時更改您的決定。
                    </p>
                </div>
                <div className="cookie-consent-actions">
                    <button className="btn-decline" onClick={handleDecline}>拒絕</button>
                    <button className="btn-accept" onClick={handleAccept}>同意</button>
                </div>
            </div>
        </div>
    );
};

export default CookieConsent;
