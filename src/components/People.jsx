import React from 'react';
import PeopleList from './PeopleList';

class People extends React.Component{

    logTitle(title){
        this.setState({title: title});
    }

render(){
    return (
        <div className="mt-5">
            <PeopleList logTitle={this.logTitle.bind(this)} />
        </div>
    )
}

}

export default People;