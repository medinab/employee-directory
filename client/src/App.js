import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import EmployeePage from './components/EmployeePage';

class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedEmployee: [],
      employees: []
    }
  }

  async componentDidMount() {
    await this.getEmployees();
    // this.setSelectedEmployee();
  }

  getEmployees = async () => {
    const response = await fetch('/employee');
    const data = await response.json();
    console.log(data);
    this.setState({employees: data.employee});
    const employ = this.state.employees;
    console.log(employ);
  }

  setSelectedEmployee = () => {
    this.setState({selectedEmployee:this.state.employees});
  }

  onSearch = () => {

  }

  onClickEmployee = (employee) => {
    this.setState({
      selectedEmployee: {name: employee.name.first, email: employee.email}
    });
  }

  render() {
    const App = () => (
      <div>
        <Switch>
          <Route exact path='/' render={props=><Home {...props} data={this.state.employees} onSearch={this.onSearch} /> } />
          <Route path='/employeePage' component={EmployeePage}/>
        </Switch>
      </div>
    )
    return (
      <Switch>
        <App/>
      </Switch>
    );
  }
}

export default App;
