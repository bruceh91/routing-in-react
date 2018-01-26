import React from 'react';
import logo from '../assets/logo.png';

class Jumbotron extends React.Component{

render(){
    return (
        <div className="jumbotron pt-3 bg-warning">
            <div className="container mx-auto">
                <img className="img-fluid" src={logo} alt="logo"/>
            </div>
        </div>
    )
}

}

export default Jumbotron;