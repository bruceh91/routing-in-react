import React from 'react';
import { Link } from 'react-router-dom';


class InfoCards extends React.Component {
    render() {
        let singleFilm = this.props.filmList.map((film) => {
            return (
                
                <div className="card col-md-5 m-2 p-0" key={film.id}>
                        <img className="card-img-top img-fluid w-100" src="http://kon-nichiwa.tokyo/wp-content/uploads/2016/11/studio_ghibli_characters_by_ficklestix-d846q1x.jpg" alt="logo" />
                        <div className="card-body">
                            <h2 className="card-title rounded bg-secondary text-center text-white">{film.title} </h2>
                            <p className="card-text text-center">{film.description.substring(0,140)}...</p>
                                <Link to={"/films/" + film.id}>more info</Link>
                        </div>
                </div>
            
            )
        });
        return (
            <div className="row">
                {singleFilm}
            </div>
        )
        
    }

}

export default InfoCards;