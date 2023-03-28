# LoanMatcher

LoanMatcher is a web application designed to help users find suitable loans based on their personal code, loan amount, and loan period. The application features a decision engine that determines the maximum loan amount that can be approved, based on a primitive scoring algorithm. <br>

### Features

With LoanMatcher, users can input their personal code, loan amount, and loan period, and the decision engine will provide a positive or negative decision, as well as the maximum loan amount that can be approved. The decision engine will also attempt to find a new suitable period if a suitable loan amount is not found within the selected period.

### Used Technologies

Spring Boot as the backend framework <br>
React as the frontend framework <br>

## Personal Code examples

Following personal codes are given to demonstrate possible cases within the app: <br>
49002010965 - debt<br>
49002010976 - segment 1 (credit_modifier = 100)<br>
49002010987 - segment 2 (credit_modifier = 300)<br>
49002010998 - segment 3 (credit_modifier = 1000)<br>

## Limitations of loans

The application supports the following constraints: <br>
Minimum input and output sum can be 2000 € <br>
Maximum input and output sum can be 10000 € <br>
Minimum loan period can be 12 months <br>
Maximum loan period can be 60 months <br>

# Notes to developers

_Server_ folder has **_loan_** folder which contains Spring Boot application. You can right click on **_loan_** folder and open it through your IDE. Nothing to install, just run it before running frontend🙂<br>
**_Client_** folder is frontend folder which contains React project. You can open this folder straight in your IDE. `npm install` has to be executed. Then, you can run app by `npm start`.<br>
