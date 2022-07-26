# README

Mentioned below are the requirements and steps to setup the project - 


The Ruby version on the system needs to be at least 3.0.1.


Postgresql needs to be configured on the system, with username and password.


The Rails version on the system needs to be at least version 6.


After cloning the project, 'bundle install' command must be run in the project directory to install all the dependencies(gems) required.


Run the following commands (inside the root directory of the project) in order to setup database for project in Postgres.

Step 1: To create the database on your local system run 'rake db:create' command.
Step 2: After that, run migrations using 'rake db:migrate' command.

Run 'yarn install'

To run the server use 'rails s' command. To run server on a specific port use 'rails s -p {port number}', e.g: rails s -p 8080. Default port for use is 8080