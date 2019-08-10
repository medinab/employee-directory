const EmployeeService = require('../services/EmployeeService');
const ValidationHelper = require('../helpers/ValidationHelper')


class EmployeeController {

    async getEmployeeList(req, res) {
        try {
			let employees = await EmployeeService.getAllEmployees();
			employees = employees.map((employee) =>  this._addEmployeeFullName(employee));
            this.sendResponse(res, employees, 200);
          } catch(error) {
            this.sendResponseError(res, error)
          }
	}
	
	async getEmployee(req, res) {
		try {
			ValidationHelper.validateStringField(req.params, 'id');
			const employee = await EmployeeService.getEmployeeById(req.params.id)
			if (employee == null) {
				throw new Error('Employee could not be found.');
			}

			this.sendResponse(res, this._addEmployeeFullName(employee), 200);
		} catch (error) {
			this.sendResponseError(res, error);
		}
	}

	async createEmployee(req, res) {
		try {
			this._validateEmployeeData(req.body);
			const newEmployee = await EmployeeService.saveEmployee(req.body);
			this.sendResponse(res, newEmployee, 200);
		} catch (error) {
			this.sendResponseError(res, error);
		}
	}

	async deleteEmployee(req, res) {
		try {
			await EmployeeService.deleteEmployeeById(req.params.id);
			this.sendResponse(res, {}, 200);
		} catch (error) {
			this.sendResponseError(res, error);
		}
	}

    sendResponse(response, body, statusCode) {
		response.status(statusCode || 200).json(body || {});
	}

	sendResponseError(response, error, statusCode) {
		console.log(error);
		const body = {}
		if (error.statusCode) {
			body.message = error.message;
			statusCode = error.statusCode;
		} else {
			body.message = 'Internal error';
		}
		this.sendResponse(response, body, statusCode || 500);
	}

	_validateEmployeeData(employee) {
		console.log(employee)
		ValidationHelper.validateStringField(employee, 'first_name');
		ValidationHelper.validateStringField(employee, 'last_name');
		ValidationHelper.validateStringField(employee, 'department');
		ValidationHelper.validateStringField(employee, 'email');
		ValidationHelper.validateStringField(employee, 'title');
	}

	_addEmployeeFullName(employee) {
		return {...employee, name: `${employee.first_name} ${employee.last_name}` };
	}
}


module.exports = new EmployeeController();