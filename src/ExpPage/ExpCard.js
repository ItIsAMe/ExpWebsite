import {
    CAccordion,
    CAccordionBody,
    CAccordionHeader, CAccordionItem,
    CCard,
    CCardBody, CCardImage, CCardImageOverlay,
    CCardText,
    CCardTitle
} from "@coreui/react";
import {Component} from 'react';

import './ExpCard.css';
import {techChips} from "../fadeInFunc";

class ExpCard extends Component {
    render() {
        return (
            <CCard>
            <CCardBody>
                <CCardImage className={"card-images"} src={this.props.logo} />
                <CCardImageOverlay>
                    <div className={'hidden'}>
                        {techChips(this.props.technologies)}
                    </div>
                </CCardImageOverlay>
                <CCardTitle>
                    Company: {this.props.company}</CCardTitle>
                <CCardText>
                    <p className='title'>
                        Position: {this.props.title}
                    </p>
                    <p className='duration'>
                        {this.props.duration}
                    </p>
                </CCardText>
                <CAccordion activeItemKey={2}>
                    <CAccordionItem itemKey={1}>
                        <CAccordionHeader>
                            Accomplishments
                        </CAccordionHeader>
                        <CAccordionBody>
                            {print(this.props.accomplishments)}
                        </CAccordionBody>
                    </CAccordionItem>
                </CAccordion>
            </CCardBody>
        </CCard>
        );
    }
}
function print(sentences) {
    if (sentences!= null) {
        return sentences.map(str => <p>{str}</p>);
    }
    return "";
}
export default ExpCard;
