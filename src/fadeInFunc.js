
import React from 'react';
import {Chip} from "@mui/material";
export function FadeInSection(props) {
    const [isVisible, setVisible] = React.useState(false);
    const domRef = React.useRef();
    React.useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting));
        });
        observer.observe(domRef.current);
    }, []);
    return (
        <div
            className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
            ref={domRef}
        >
            {props.children}
        </div>
    );
}
export function techChips(arr) {
    if (arr!= null) {
        return arr.map(str => <Chip className="chip" label={str} color="primary"/>);
    }
    return "";
}