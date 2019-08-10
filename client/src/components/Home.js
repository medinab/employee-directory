import React,{ Component } from 'react';
import FormControl from 'react-bootstrap/FormControl';
import EmployeeList from './EmployeeList';
import EmployeeFormModal from './EmployeeFormModal';

class Home extends Component {

    onChange = (e) => {
        this.props.onSearch(e);
    }

    render() {
        return (
            <div className='home'>
                <h1>Employee Directory Home</h1>
                <FormControl onChange={this.onChange} />
                <EmployeeFormModal/>
                <br/>
                <EmployeeList data={this.props.data} />
            </div>
        );
    }
}

export default Home;
