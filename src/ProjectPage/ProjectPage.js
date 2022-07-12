
import {Component} from 'react';
import {CCol, CRow} from "@coreui/react";
import ProjectCard from "./ProjectCard";
import logoRisk from '../images/Risk.PNG';
import logoWordle from '../images/Wordle.PNG';
import logoHaven from '../images/FastFoodHaven.PNG';
class ProjectPage extends Component {
    render() {
        return(
            <>
                <CRow>
                    <CCol sm={6}>
                        <ProjectCard logo={logoWordle}/>
                    </CCol>
                    <CCol sm={6}>
                        <ProjectCard logo={logoRisk}/>
                    </CCol>
                </CRow>
                <CRow>
                    <CCol sm={6}>
                        <ProjectCard logo={logoHaven}/>
                    </CCol>
                    <CCol sm={6}>
                        <ProjectCard logo={logoRisk}/>
                    </CCol>
                </CRow>
            </>);
    }
}

export default ProjectPage