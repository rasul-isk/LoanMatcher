# LoanMatcher
LoanMatcher is a web application designed to help users find suitable loans based on their personal code, loan amount, and loan period. The application features a decision engine that determines the maximum loan amount that can be approved, based on a primitive scoring algorithm. <br>
 <br>
## Technologies
The application is built using the following technologies: <br>
Spring Boot as the backend framework <br>
React as the frontend framework <br>
 <br>
## Features
With LoanMatcher, users can input their personal code, loan amount, and loan period, and the decision engine will provide a positive or negative decision, as well as the maximum loan amount that can be approved. The decision engine will also attempt to find a new suitable period if a suitable loan amount is not found within the selected period. The application supports the following constraints: <br>
 <br>
Minimum input and output sum can be 2000 € <br>
Maximum input and output sum can be 10000 € <br>
Minimum loan period can be 12 months <br>
Maximum loan period can be 60 months <br>

# Notes to developers
Client folder is frontend folder which contains React project. `npm install` has to executed. Then, you can run app by `npm start`.<br> 
Server is an IntelliJ IDEA project which contains Spring Boot application. Nothing to install, just run backend before running frontend :)
