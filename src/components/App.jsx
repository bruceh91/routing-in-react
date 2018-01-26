import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Films from './Films';
import People from './People';
import Detail from './Detail';
import Jumbotron from './Jumbotron';

class App extends React.Component{


    render(){
        return (
            <Router>

                <Fragment>
                    <Jumbotron />
                    <div className="mx-auto row col-10 ">
                    <div className="btn-lg large"/>
                    <div className="btn-lg large"/>
                        <Link className="btn btn-lg btn-primary w-25" to="/films"> Films </Link>
                        <div className="w-25"/>
                        <Link className="btn btn-lg btn-info w-25" to="/people">People</Link>
                    
                    </div>
                    <Switch>
                        <React.Fragment>
                            <Route exact path="/films" component={Films} />
                            <Route exact path="/people" component={People} />
                            <Route exact path="/films/:id" component={Detail} />
                        </React.Fragment>
                    </Switch>
                </Fragment>
            </Router>
        )
    }


} 


export default App;