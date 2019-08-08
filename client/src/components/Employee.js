import React from 'react';


class Employee extends React.Component {
    render() {
        const {name, email} = this.props.employee
        // const image = "images/" + name + ".jpg"
        return (
            <div className="employee-item">
                {/* <img src={image}/> */}
                <div className="employee-item-text">
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
            </div>
        );
    }
}


export default Employee;