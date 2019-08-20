import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import {Col, Row, Container} from 'react-bootstrap'
import './App.css';
import Home from './components/Home';

const App = (props) => {
  const [selectedEmployee, setSelectedEmployee] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        await fetchEmployees();
      } catch(error) {
        console.log(error);
      }
    })();
  }, []);

  const fetchEmployees = async () => {
    const response = await fetch('/api/employee');
    const data = await response.json();
    setEmployees(data);
    setFilteredEmployees(data);
    setSelectedEmployee(employees);
  }

  const filterEmployees = (type, searchValue) => {
    return employees.filter((employee) => {
      if (type === 'location') {
        if (employee.location[type].toLowerCase().includes(searchValue.toLowerCase())) {
          return true;
        }
      } else {
        if (employee[type].toLowerCase().includes(searchValue.toLowerCase())) {
          return true;
        }
      }
      return false;
    });
  }

  const onSearch = (e) => {
    setFilteredEmployees(filterEmployees('name', e.target.value));
  }

  // const onClickEmployee = (employee) => {
  //   selectedEmployee({name: employee.name.first, email: employee.email});
  // }

  return (
    <Container>
      <Row>
        <Col>
          <Route exact path='/' render={()=><Home data={filteredEmployees} employees={employees} onSearch={onSearch} /> } />
        </Col>
      </Row>
    </Container> 
  )
}

export default App;
