import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Employee from './Employee';

class EmployeeList extends Component {

    componentDidMount() {
        console.log(this.props.data);
    }

    render() {
        return (
            <div>
               <ListGroup>
                {this.props.data.map((data, key) => (
                  <Employee key={key} employee={{name: data.name.first + ' ' + data.name.last, email:data.email}} onEmployeeClick={this.props.onEmployeeClick}/>
                ))}
                </ListGroup> 
          </div>
        );
    }

}
export default EmployeeList
