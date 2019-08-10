import React from 'react';

const imageNames = ['sanchez', 'smith', 'meeseeks'];

class Employee extends React.Component {
    render() {
        const {name, email, location, department, title, last_name} = this.props.employee;
        const image = (imageNames.includes(last_name.toLowerCase())) ? "img/" + last_name.toLowerCase() + ".jpg" : "img/default.jpg";
        return (
            <div className="employee-item" onClick={this.onClick}>
                <img src={image}/>
                <div className="employee-item-text">
                    <h2>{name}</h2>
                    <p>{department}/{title}</p>
                    <p>{email}</p>
                    {(location) ? <p>{location.street}, {location.city}, {location.state}</p> : ''}
                </div>
            </div>
        );
    }
}


export default Employee;