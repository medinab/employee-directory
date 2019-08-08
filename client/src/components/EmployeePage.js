import React, { Component } from 'react';


class EmployeePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employee: []
        }
    }

    async componentDidMount() {
        await this.getEmployee();
    }

    getEmployee = async () => {
        const response = await fetch('/employees');
        const data = await response.json();
        console.log(data.employee);
        this.setState({employee: data['employee']});
    }

    render() {
        const {employee} = this.state;
        return (
            <ul className='employee'>
                { employee.map((item) => {
                    return(
                        <li key={item.id.value}>
                            <div>{item.name.first + ' ' + item.name.last}</div>
                            <div>{item.email}</div>
                            <div>{item.location.street}</div>
                        </li>
                    )
                })}
            </ul>
        )

        // return (
        //     <div className='App'>
        //         <h1>Employee</h1>
        //         {employee.length ? (
        //             <div>
        //                 {employee.map((item, index) => {
        //                     return (
        //                         <div key={index}>
        //                             {item.email}
        //                         </div>
        //                     );

        //                 })}
        //             </div>

        //         ) : (
        //             <div>
        //                 <h2>No employees found.</h2>
        //             </div>
        //         )
        //     }
        //     </div>
        // );
    }
}

export default EmployeePage;
