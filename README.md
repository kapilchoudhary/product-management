# Product Management Tool (Rails/JS)

- Mentioned below are the requirements and steps to setup the project - 

* The Ruby version on the system needs to be at least 3.0.1.

* The Rails version on the system needs to be at least version 6.

* After cloning the project, 'bundle install' command must be run in the project directory to install all the dependencies(gems) required.

### Set up Postgres

* Postgresql needs to be configured on the system, with username and password.

* Run the following commands (inside the root directory of the project) in order to setup database for project in Postgres.

1. To create the database on your local system run command - 

```
rails db:create
```

2. After that, to run migrations use the following command -

```
rails db:migrate
```

### Set up app and start rails server

1. Run yarn

```
yarn install
```

2. To run the server use the following command.

```
rails server
```

3. To run the rspecs run rspec/test cases.

```
bundle exec rspec
```

4. To run the 'rails console

```
rails c
```

### DEPLOYMENT - 

* Heroku url - https://infinite-chamber-08260.herokuapp.com/
