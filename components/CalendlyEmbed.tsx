import React from 'react';

// Declare Calendly global type
declare global {
    interface Window {
        Calendly?: {
            initPopupWidget: (options: { url: string }) => void;
        };
    }
}

const CalendlyEmbed = () => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();

        if (window.Calendly) {
            window.Calendly.initPopupWidget({ url: 'https://calendly.com/amwebss/45min' });
        } else {
            console.error('Calendly script not loaded yet');
        }
    };

    return (
        <span onClick={handleClick}>
            Schedule a meeting with us
        </span>
    );
};

export default CalendlyEmbed;
