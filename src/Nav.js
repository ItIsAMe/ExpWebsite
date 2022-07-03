import { useState} from 'react';
import {CNav, CNavItem, CNavLink, CTabContent, CTabPane} from "@coreui/react";
import ExpCard from "./ExpCard";

import './Nav.css';
export function Nav() {
    const [activeKey, setActiveKey] = useState(1)
    return (
        <div className="bar">
            <CNav variant="tabs" role="tablist">
                <CNavItem>
                    <CNavLink
                        href="javascript:void(0);"
                        active={activeKey === 1}
                        onClick={() => setActiveKey(1)}
                    >
                        Experience
                    </CNavLink>
                </CNavItem>
                <CNavItem>
                    <CNavLink
                        href="javascript:void(0);"
                        active={activeKey === 2}
                        onClick={() => setActiveKey(2)}
                    >
                        Personal Projects
                    </CNavLink>
                </CNavItem>
            </CNav>
            <CTabContent>
                <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={activeKey === 1}>
                    <ExpCard title='Full Stack' company='VectorSolv' duration='May 2022-August 2022'></ExpCard>
                    <br/>
                    <ExpCard></ExpCard>
                    <br/>
                    <ExpCard></ExpCard>
                    <br/>
                    <ExpCard></ExpCard>
                    <br/>
                </CTabPane>
                <CTabPane role="tabpanel" aria-labelledby="profile-tab" visible={activeKey === 2}>
                    <p>hey</p>
                </CTabPane>
            </CTabContent>
        </div>
    )
}