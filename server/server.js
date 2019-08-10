const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const path = require('path');
const EmployeeController = require('./controllers/EmployeeController');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'client/build')));

app.route('/api/employee')
  .get((req, res) => EmployeeController.getEmployeeList(req, res))
  .post((req, res) => EmployeeController.createEmployee(req, res));

app.route('/api/employee/:id')
  .get((req, res) => EmployeeController.getEmployee(req, res))
  .delete((req, res) => EmployeeController.deleteEmployee(req, res));

app.listen(port, (error) => {
  if (error) { console.log(error); };
  console.log('Listening on port ' + port);
});