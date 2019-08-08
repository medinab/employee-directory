import React,{ Component } from 'react';
import FormControl from 'react-bootstrap/FormControl';
import EmployeeList from './EmployeeList';

class Home extends Component {


    componentDidMount() {
        console.log(this.props.data);
    }

    onChange = (e) => {
        this.props.onSearch(e);
    }

    render() {
        return (
            <div className='home'>
                <h1>Employee Directory Home</h1>
                <FormControl onChange={this.onChange} />
                <EmployeeList data={this.props.data} />
            </div>
        );
    }
}

export default Home;
