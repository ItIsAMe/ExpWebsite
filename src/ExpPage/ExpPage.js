import ExpCard from "./ExpCard";
import {Component} from 'react';
import './ExpPage.css';
import VectorSolvLogo from '../images/VectorSolv.PNG';
import RCMP from '../images/RCMP.jpg';
import JSILogo from '../images/JSITelecom.PNG';
import CarletonLogo from '../images/CarletonUni.png';
import React from 'react';

function FadeInSection(props) {
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

class ExpPage extends Component {
    render() {
        return(
            <div>
                <FadeInSection key={'VectorSolv'}>
                    <ExpCard title='Full Stack' company='VectorSolv' duration='May 2022-August 2022' logo={VectorSolvLogo} accomplishments={["•	Integrated Dwolla, a payments API to allow the transfer of reimbursements in a new insurance product.",
                        "•	Coded the logging solution for the backend, logging the calls and responses of the API, CQRS handlers, and CQRS sagas.",
                        "•	Programmed the display of agreements, to take an html rich text and display the agreement as a pdf without losing the formatting, to allow users to see agreements of products they have bought."]
                    }/>
                </FadeInSection>
                <FadeInSection key={'RCMP'}>
                    <ExpCard title='Junior Programmer Analyst' company='RCMP' duration='August 2021–December 2021' logo={RCMP}/>
                </FadeInSection>
                <FadeInSection key={'JSITelecom'}>
                    <ExpCard title='Software Developer' company='JSITelecom' duration='January 2021-August 2021' logo={JSILogo}/>
                </FadeInSection>
                <FadeInSection key={'Carleton'}>
                    <ExpCard title='Software Developer' company='Carleton University' duration='May 2020-August 2020' logo={CarletonLogo}/>
                </FadeInSection>
            </div>);
    }

}

export default ExpPage