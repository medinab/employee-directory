An employee directory app built with React and Node js.

Requirements:

* docker-compose
* node js

To start the app

    1. clone the repo: `git clone https://github.com/medinab/employee-directory`
    2. run `npm install` from employee-directory folder then cd into client folder and run npm insall
    3. run docker-compose up -d (this will create a postgres db in the background)
    4. From the employee-directory root folder run npm run migrate && npm run dev (this will kick off migration and seed scripts for db and start server and client concurrently)