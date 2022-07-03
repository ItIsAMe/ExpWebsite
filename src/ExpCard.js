import {
    CAccordion,
    CAccordionBody,
    CAccordionHeader, CAccordionItem,
    CCard,
    CCardBody,
    CCardText,
    CCardTitle
} from "@coreui/react";
import {Component} from 'react';

import './ExpCard.css';

class ExpCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <CCard style={{width: '60rem'}}>
            <CCardBody>
                <CCardTitle>Position: {this.props.title}</CCardTitle>
                <CCardText>
                    <p className='company'>
                        Company: {this.props.company}
                    </p>
                    <p className='duration'>
                        {this.props.duration}
                    </p>
                </CCardText>
                <CAccordion activeItemKey={2}>
                    <CAccordionItem itemKey={1}>
                        <CAccordionHeader>
                            Achievements
                        </CAccordionHeader>
                        <CAccordionBody>
                        </CAccordionBody>
                    </CAccordionItem>
                </CAccordion>
            </CCardBody>
        </CCard>
        );
    }
}


export default ExpCard;
