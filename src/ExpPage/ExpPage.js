import ExpCard from "./ExpCard";
import {Component} from 'react';

class ExpPage extends Component {
    render() {
        return(
            <>
                <ExpCard title='Full Stack' company='VectorSolv' duration='May 2022-August 2022'/>
                <br/>
                <ExpCard/>
                <br/>
                <ExpCard/>
                <br/>
                <ExpCard/>
                <br/>
            </>);
    }
}

export default ExpPage