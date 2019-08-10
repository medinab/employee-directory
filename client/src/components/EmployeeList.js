import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Employee from './Employee';
import {bounceInDown} from 'react-animations';
import styled, {keyframes} from 'styled-components';

const Bounce = styled.div`animation: 1s ${keyframes `${bounceInDown}`}`;

class EmployeeList extends Component {
    render() {
        return (
            <Bounce>
                <ListGroup>
                {this.props.data.map((data, key) => (
                  <Employee key={key} employee={data} onEmployeeClick={this.props.onEmployeeClick}/>
                ))}
                </ListGroup>
          </Bounce>
        );
    }

}
export default EmployeeList
