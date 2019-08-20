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


// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       selectedEmployee: [],
//       employees: [],
//       filteredEmployees: []
//     }
//   }

//   async componentDidMount() {
//     await this.setEmployees();
//   }

//   setEmployees = async () => {
//     const response = await fetch('/api/employee');
//     const data = await response.json();
//     this.setState({employees: data});
//     this.setState({filteredEmployees: data});
//   }

//   setSelectedEmployee = () => {
//     this.setState({selectedEmployee:this.state.employees});
//   }

//   filterEmployees = (type, searchValue) => {
//     return this.state.employees.filter((employee) => {
//       if (type === 'location') {
//         if (employee.location[type].toLowerCase().includes(searchValue.toLowerCase())) {
//           return true;
//         }
//       } else {
//         if (employee[type].toLowerCase().includes(searchValue.toLowerCase())) {
//           return true;
//         }
//       }
//       return false;
//     });
//   }

//   onSearch = (e) => {
//     this.setState({
//       filteredEmployees: this.filterEmployees('name', e.target.value)
//     })
//   }

//   onClickEmployee = (employee) => {
//     this.setState({
//       selectedEmployee: {name: employee.name.first, email: employee.email}
//     });
//   }

//   render() {
//     return (
//       <Container>
//         <Row>
//           <Col>
//             <Route exact path='/' render={()=><Home data={this.state.filteredEmployees} employees={this.state.employees} onSearch={this.onSearch} /> } />
//           </Col>
//         </Row>
//       </Container>
//     );
//   }
// }

export default App;
