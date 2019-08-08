const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const path = require('path');
const indexRouter = require('./routes/index');
const employeeRouter = require('./routes/employee');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'client/build')));
app.use('/', indexRouter);
app.use('/employee', employeeRouter);

app.listen(port, (err) => {
  if (err) { console.log(err); };
  console.log('Listening on port ' + port);
});