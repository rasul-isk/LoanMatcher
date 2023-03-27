package com.loanmatcher.loan;

import org.springframework.stereotype.Service;

@Service
public class LoanService {
    public void calculateLoanDecision(Loan loan) {
        double creditScore = (double) (loan.getCreditModifier() / loan.getLoanAmount()) * loan.getLoanPeriod();
        double maxAmount = loan.getCreditModifier() * loan.getLoanPeriod();

        if (creditScore >= 1) {
            loan.setDecision("positive"); //cs > 1

            if (maxAmount > 10000) { //cs > 1 and max amount more than 10K$
                loan.setMaxLoanAmount(10000);
            }
            else {
                loan.setMaxLoanAmount(maxAmount); //cs > 1 and max amount <= 10K$
            }
        }
        else {
            loan.setDecision("negative"); //cs < 1
            if (maxAmount < 2000) { //cs < 1 and max amount to give for specified period < 2000$
                loan.setLoanPeriod((int) Math.ceil(2000.0 / loan.getCreditModifier())); //get min period for min amount (2000$)
                loan.setMaxLoanAmount(loan.getCreditModifier() * loan.getLoanPeriod()); //show max amount for modified period
            } else {
                loan.setMaxLoanAmount(maxAmount);
            }
        }
        loan.setCreditScore(creditScore);
    }

    public int getCreditModifier(String personalCode) {
        switch (personalCode) {
            case "49002010965":
                return 0; // person has debt
            case "49002010976":
                return 100; // segment 1
            case "49002010987":
                return 300; // segment 2
            case "49002010998":
                return 1000; // segment 3
            default:
                return -1; // invalid personal code
        }
    }
}