
import {Component} from 'react';
import ProjectCard from "./ProjectCard";
import logoRisk from '../images/Risk.PNG';
import logoWordle from '../images/Wordle.PNG';
import logoHaven from '../images/FastFoodHaven.PNG';
import logoWeb from '../images/WebExp.PNG';
import {FadeInSection} from '../fadeInFunc';

class ProjectPage extends Component {
    render() {
        return(
            <>

                <FadeInSection key={'wordle'}>
                    <ProjectCard logo={logoWordle} gitLink={'https://github.com/ItIsAMe/wordle-workspace'} secondLink={'https://anthony-wordle-copy.herokuapp.com/'} secondText={'Try Here!'} technologies={["CSS","HTML","TypeORM","Nestjs","Angular"]}
                    body={'I coded a wordle app to become more familiar with Angular and learn Nestjs. It was fun recreating the viral Wordle app, but I changed my app a bit from the original by allowing a ' +
                        'new word to be selected and having different words for each user.'}/>
                </FadeInSection>
                <FadeInSection key={'risk'}>
                    <ProjectCard logo={logoRisk} gitLink={'https://github.com/ItIsAMe/DreamTeam-Risk-SYSC3110'} technologies={["Swing","Java"]} body={'This project recreates the risk game. I enjoyed applying graph theory when validating custom maps, checking nearby ' +
                        'territories, and using minimax as an AI strategy determining the benefits and risk of attacking. The risk project was for a design patterns course, where the main pattern this project used is the MVC pattern.'}/>
                </FadeInSection>
                <FadeInSection key={'haven'}>
                    <ProjectCard logo={logoHaven} secondLink={'https://devpost.com/software/fast-food-haven'} secondText={'Fast Food Haven DevPost'} technologies={["CSS","HTML","UIPath","Python","JavaScript"]} body={'The Fast Food Haven project is' +
                        ' an award winning project, at the 2020 CuHackathon. The project scraped fast food restaurants for discounts and deals, to allow users to quickly find the best prices near them. It was fun quickly coding an app in 24 hours with friends.'}/>
                </FadeInSection>
                <FadeInSection key={'web'}>
                    <ProjectCard logo={logoWeb} gitLink={'https://github.com/ItIsAMe/wordle-workspace'} technologies={["CSS","HTML","React","JavaScript"]} body={'This website that you are currently on, to show my experience and projects. This app was created using ' +
                        'React and is my introduction at learning the language.'}/>
                </FadeInSection>
            </>);
    }
}

export default ProjectPage