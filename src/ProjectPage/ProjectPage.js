
import {Component} from 'react';
import {CCol, CRow} from "@coreui/react";
import ProjectCard from "./ProjectCard";

class ProjectPage extends Component {
    render() {
        return(
            <>
                <CRow>
                    <CCol sm={6}>
                        <ProjectCard/>
                    </CCol>
                    <CCol sm={6}>
                        <ProjectCard/>
                    </CCol>
                </CRow>
                <CRow>
                    <CCol sm={6}>
                        <ProjectCard/>
                    </CCol>
                    <CCol sm={6}>
                        <ProjectCard/>
                    </CCol>
                </CRow>
            </>);
    }
}

export default ProjectPage