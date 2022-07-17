import ExpCard from "./ExpCard";
import {Component} from 'react';
import './ExpPage.css';
import VectorSolvLogo from '../images/VectorSolv.PNG';
import RCMP from '../images/RCMP.jpg';
import JSILogo from '../images/JSITelecom.PNG';
import CarletonLogo from '../images/CarletonUni.png';
import {FadeInSection} from '../fadeInFunc';
class ExpPage extends Component {
    render() {
        return(
            <div>
                <FadeInSection key={'VectorSolv'}>
                    <ExpCard title='Full Stack' company='VectorSolv' duration='May 2022-August 2022' logo={VectorSolvLogo} accomplishments={["•	Integrated Dwolla, a payments API to allow the transfer of reimbursements in a new insurance product.",
                        "•	Coded the logging solution for the backend, logging the calls and responses of the API, CQRS handlers, and CQRS sagas.",
                        "•	Programmed in TypeScript the display of an html text as a pdf maintaining its format, to allow users to see their previous purchase agreements"]
                    } technologies={["HTML", "CSS","TypeORM","CQRS","Rxjs","Nestjs","Angular"]}/>
                </FadeInSection>
                <FadeInSection key={'RCMP'}>
                    <ExpCard title='Junior Programmer Analyst' company='RCMP' duration='August 2021–December 2021' logo={RCMP} accomplishments={["•	Worked on Azure arm templates, notifications, policies and KQL queries for Log analytics to provide monitoring of future RCMP applications being moved to the cloud.",
                        "•	Wrote PowerShell scripts to save time in setting permissions, allowing multiple users permission to specified projects."
                        ]} technologies={["PowerShell","KQL","Azure"]}/>
                </FadeInSection>
                <FadeInSection key={'JSITelecom'}>
                    <ExpCard title='Software Developer' company='JSITelecom' duration='January 2021-August 2021' logo={JSILogo} accomplishments={["•	Upgraded a tool that gathered information about the internal calls of the Cassandra database, allowing for long-term data collection and short-term data collection.",
                        "•	Changed the GUI and code for a tool that simulated requests to the database, to customize the number of users, activity, and output format. Which allowed more fine grain stress testing.",
                        "•	Coded the beginning of a project that would be a suite of all team tooling at JSI, to allow ease of debugging and coordinate tooling between teams.",
                        "•	Fixed bugs on the database’s production repos, and on upgrading software to help the database team to make the code completion due date."
                    ]} technologies={["Angular","C#","Ruby","Cassandra" ,"SpringBoot","Java"]}/>
                </FadeInSection>
                <FadeInSection key={'Carleton'}>
                    <ExpCard title='Software Developer' company='Carleton University' duration='May 2020-August 2020' logo={CarletonLogo} accomplishments={["•	I Created a course outline creator for professors in the Mechanical, Aerospace department to create new outlines faster, by being able to load previous outlines.",
                        "•	I Allowed Administrators to add administrative course information, check finished and unfinished outlines, and send course outlines templates to a new professor."
                        ]} technologies={["CSS","HTML","JQuery","MySQL","PHP","JavaScript"]}/>
                </FadeInSection>
            </div>);
    }

}

export default ExpPage