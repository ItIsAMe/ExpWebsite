import {
    CButton,
    CCard, CCardBody,
    CCardImage, CCardImageOverlay, CCardText, CCardTitle,
} from "@coreui/react";

import logo from '../images/Risk.jpeg';
import {Component} from 'react';

import './ProjectCard.css';

class ExpCard extends Component {

    render() {
        return (
            <CCard style={{width: '30rem'}}>
                <CCardImage src={logo} />
                <CCardBody>
                    <CCardTitle>Special title treatment</CCardTitle>
                    <CCardText>With supporting text below as a natural lead-in to additional content.</CCardText>
                    <CButton href="#">Go somewhere</CButton>
                    <CButton href="#">Go somewhere</CButton>
                </CCardBody>
            </CCard>
        );
    }
}


export default ExpCard;
