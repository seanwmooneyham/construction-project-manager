# construction-project-manager
This application (developed using Angular 6, Spring-boot, and Postgres) allows the project manager or foreman of a construction project to keep track of material and tool inventory.  Important announcements for workers to view can be created.  This application is currently a work in progress.

There are two available users test-cpm-user and test-cpm-admin, however, currently the roles do not differ (full access to application for both users).

username: test-cpm-admin (or test-cpm-user)

password: password123

Deployed application can be accessed at:

http://construction-manager.herokuapp.com

This may take some time to load since the application resides on Heroku's 'Free' plan.



## Starting the Application in development
* Start REST
  * cd rest
  * ./mvnw spring-boot:run
  
* Start Client and Open Browser
  * cd client
  * npm start
  
  access app in browser at 'localhost:4200'
  
  ## Start deployable JAR file
  cd to project root
  mvn clean install (or './mvnw clean install' if maven is not installed on environment)
  java -jar rest/target/rest-1.0-SNAPSHOT.jar
  
  access app in browser at 'localhost:5000'
  
  
