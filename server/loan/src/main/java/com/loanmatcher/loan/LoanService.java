package com.loanmatcher.loan;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class LoanService {
    public Decision calculateLoanDecision(Loan loan) {
        int creditModifier = loan.getCreditModifier();
        int loanPeriod = loan.getLoanPeriod();
        int maxAmount = creditModifier * loanPeriod;
        double creditScore = (double) creditModifier / loan.getLoanAmount() * loanPeriod;
        List<String> decision = new ArrayList<>();

        if(creditModifier == 0) {
            return new Decision("Loan is declined. You already have a debt.", 0, 0);
        }

        if (creditScore >= 1) {
            decision.add("Positive response."); //cs > 1
            if (loan.getLoanAmount() < maxAmount) {
                decision.add("You can get more than requested.");
            }
            if (maxAmount > 10000) { //cs > 1 and max amount more than 10K€
                decision.add("Maximum available loan amount is €10,000.");
                maxAmount = 10000;
            }
        } else {
            decision.add("Negative response: you have low credit score."); //cs < 1
            if (maxAmount < 2000) { //cs < 1 and max amount to give for specified period < 2000€
                decision.add("Following option(s) modified: loan period, maximum loan amount");
                loanPeriod = (int) Math.ceil(2000.0 / creditModifier); //get min period for min amount (2000€)
                if(loanPeriod > 60) {
                    return new Decision("Minimum loan can't be given even for 60 months.", 0, 0);
                }
                maxAmount = (int) Math.floor(creditModifier * loanPeriod / 100.0) * 100; //get max amount for modified period
            } else {
                decision.add("Following option(s) modified: maximum loan amount");
            }
        }
        return new Decision(listToString(decision), loan.getLoanPeriod(), maxAmount);
    }

    private String listToString(List<String> decision) {
        return decision.stream().reduce((a, b) -> a + " " + b).orElse("");
    }

}