import {
    CAccordion,
    CAccordionBody,
    CAccordionHeader, CAccordionItem,
    CCard,
    CCardBody, CCardImage,
    CCardText,
    CCardTitle
} from "@coreui/react";
import {Component} from 'react';

import './ExpCard.css';

class ExpCard extends Component {
    render() {
        return (
            <CCard style={{width: '60rem'}}>
            <CCardBody>
                <CCardImage className={"card-images"} src={this.props.logo} />
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
