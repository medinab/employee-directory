import React from 'react';
import FormControl from 'react-bootstrap/FormControl';
import EmployeeList from './EmployeeList';
import EmployeeFormModal from './EmployeeFormModal';

const Home = (props) => {
    const onChange = (e) => {
        props.onSearch(e);
    }

    return (
        <div className='home'>
            <h1>Employee Directory Home</h1>
            <FormControl onChange={onChange} />
            <EmployeeFormModal/>
            <br/>
            <EmployeeList data={props.data} />
        </div>
    )
}

export default Home;
