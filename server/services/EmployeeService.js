const db = require('../db');
const TABLE = 'employees';

class EmployeeService {

    async getAllEmployees() {
        return await db(TABLE);
    }

    async getEmployeeById(id) {
        const result = await db(TABLE).where('id', id);
        console.log(result);
        return result.length == 1 ? result[0] : null;   
    }

    async saveEmployee(employee) {
        let result;
        if ('id' in employee) {
            result = await db(TABLE).update(employee).where({id: employee.id});
        } else {
            result = await db(TABLE).insert(employee);
            employee.id = result[0];
            return employee;
        }
    }

    async deleteEmployeeById(id) {
        const data = await db(TABLE).where({id}).del();
        return data == 1 ? {id: data} : null;
    }
}

module.exports = new EmployeeService();