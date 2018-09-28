# construction-project-manager
This application (developed using Angular 6, Spring MVC, and MySQL) allows the project manager or foreman of a construction project to keep track of material and tool inventory.  Important announcements for workers to view can be created.  

##Brainstorming
* SPA
* AngularJS / Java (spring boot) / MySQL
* Project location and contact information
* alerts
* Specific rules/regulations
* Material management
  * View Location (1st floor, 2nd floor)
  * Sign out
  * Material type
* Tool management
  * Storage Location (1st floor, 2nd floor)
  * Sign in/out
  * Tool type
* Task management
  * Name
  * Task
  * Location
  * Time?
* Location table (floor / description)
* Punch list
* Inspection / potential code violations
* Calculations

## Starting the Application
* Start REST
  * cd rest
  * ./mvnw spring-boot:run
  
* Start Client and Open Browser
  * cd client
  * ng serve --open
