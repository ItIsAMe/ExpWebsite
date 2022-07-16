import { useState} from 'react';
import {CNav, CNavItem, CNavLink, CTabContent, CTabPane} from "@coreui/react";
import './Nav.css';
import ExpPage from "./ExpPage/ExpPage";
import ProjectPage from "./ProjectPage/ProjectPage";
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
                    <ExpPage>
                    </ExpPage>
                </CTabPane>
                <CTabPane role="tabpanel" aria-labelledby="profile-tab" visible={activeKey === 2}>
                    <ProjectPage>
                    </ProjectPage>
                </CTabPane>
            </CTabContent>
        </div>
    )
}