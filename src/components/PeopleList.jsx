import React from 'react';
import PeopleCards from './PeopleCards';


class PeopleList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            peopleArr: [],
        }
    }

    componentDidMount() {
        fetch('https://ghibliapi.herokuapp.com/people')
            .then(response => response.json())
            .then( object => { this.setState({peopleArr: object})} );
            this.props.logTitle(this.peopleArr);
        }

    render() {
        console.log(this.state.peopleArr);
        return (

            <div>
                <PeopleCards peopleList={this.state.peopleArr}/> 
            </div>  
    
    )
    }

}

export default PeopleList;