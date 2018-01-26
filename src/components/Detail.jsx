import React, { Component } from 'react';

export default class Detail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            film: {}
        }
    }

    componentDidMount() {
        fetch('http://ghibliapi.herokuapp.com/films/' + this.props.match.params.id)
        .then(response => {
            return response.json()
        }).then(data => {
            this.setState({film: data})
            console.log(this.state.film);
        })
    }


    render() {
        let film = this.state.film;
        return(
        <div className="col-10 position-relative mx-auto">
            <h1 className="col-10 position-relative mx-auto">{film.title}</h1> <br />
            <h4 className="col-10 position-relative mx-auto">{film.description}</h4> <br />
            <h6 className="col-10 position-relative mx-auto">Director: {film.director}</h6> <br />
            <h6 className="col-10 position-relative mx-auto pb-5">Producer: {film.producer}</h6>
        </div>
        )
    }
}