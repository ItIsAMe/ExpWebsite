import {
    CButton,
    CCard, CCardBody,
    CCardImage, CCardImageOverlay, CCardText, CCardTitle,
} from "@coreui/react";

import {Component} from 'react';

import './ProjectCard.css';
import {techChips} from "../fadeInFunc";
import {AiFillGithub} from "react-icons/ai";
class ExpCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let gitButton = null;
        let secondaryButton = null;
        if(this.props.gitLink !== undefined) {
            gitButton = (<CButton href={this.props.gitLink} target="_blank"><AiFillGithub size={30}/></CButton>)
        }
        if(this.props.secondLink !== undefined) {
            secondaryButton = (<CButton href={this.props.secondLink} target="_blank">{this.props.secondText}</CButton>)
        }
        return (
            <CCard style={{width: '45rem'}}>
                <div className={'hidden'}>
                    {techChips(this.props.technologies)}
                </div>
                <CCardImage src={this.props.logo} />
                <CCardBody>
                    <CCardText>{this.props.body}</CCardText>
                    {gitButton}
                    {secondaryButton}
                </CCardBody>
            </CCard>
        );
    }
}


export default ExpCard;
