import React from 'react';


class InfoCards extends React.Component {
    render() {
        let singlePerson = this.props.peopleList.map((people) => {
            console.log(people)
            return (
                <div className="mx-auto border rounded col-8 bg-light mb-2 text-center" key={people.id}>
                        <div className="card-body">
                            <h1 className="card-title">{people.name} </h1><br />
                            <h4>{people.age} , {people.gender}</h4>
                        </div>
                </div>
            )
        });
        return (
            <div>
                {singlePerson}
            </div>
        )
        
    }

}

export default InfoCards;

