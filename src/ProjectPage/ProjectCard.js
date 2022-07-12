import {
    CButton,
    CCard, CCardBody,
    CCardImage, CCardImageOverlay, CCardText, CCardTitle,
} from "@coreui/react";

import {Component} from 'react';

import './ProjectCard.css';

class ExpCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <CCard style={{width: '30rem'}}>
                <CCardImage src={this.props.logo} />
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
