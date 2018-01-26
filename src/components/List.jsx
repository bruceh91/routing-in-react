import React from 'react';
import InfoCards from './InfoCards';


class List extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            filmArr: [],
        }
    }

    componentDidMount() {
        fetch('https://ghibliapi.herokuapp.com/films')
            .then(response => response.json())
            .then( object => { this.setState({filmArr: object})} );
            this.props.logTitle(this.filmArr);
        }

    render() {
        return (

            <div className="container">
                <InfoCards filmList={this.state.filmArr}/> 
            </div>  
    
    )
    }

}

export default List;