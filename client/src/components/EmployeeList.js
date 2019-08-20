import React, { useState, useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Employee from './Employee';
import {bounceInDown} from 'react-animations';
import styled, {keyframes} from 'styled-components';

const Bounce = styled.div`animation: 1s ${keyframes `${bounceInDown}`}`;

const EmployeeList = (props) => {
  return (
    <Bounce>
      <ListGroup>
      {props.data.map((data, key) => (
        <Employee key={key} employee={data} onEmployeeClick={props.onEmployeeClick}/>
      ))}
      </ListGroup>
    </Bounce>
  )
}

export default EmployeeList
