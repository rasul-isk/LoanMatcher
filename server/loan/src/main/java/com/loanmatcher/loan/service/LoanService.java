package com.loanmatcher.loan.service;

import com.loanmatcher.loan.model.Decision;
import com.loanmatcher.loan.model.Loan;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@Service
public class LoanService { //Responsible for processing loan and possible modifications of loan period/amount
    public Decision calculateLoanDecision(Loan loan) {
        int creditModifier = loan.getCreditModifier();
        int loanPeriod = loan.getLoanPeriod();
        int maxAmount = creditModifier * loanPeriod; //checking what is the maximum loan amount can user take for given period with credit score = 1
        double creditScore = (double) creditModifier / loan.getLoanAmount() * loanPeriod; //using given formula to get user's credit score
        List<String> decision = new ArrayList<>(); //used to gather information through if-else statements

        if(creditModifier == 0) {   //user has debt
            return new Decision("Loan is declined. You already have a debt.", 0, 0);
        }

        if (creditScore >= 1) {
            decision.add("Positive response."); //because Credit Score (cs) >= 1
            if (loan.getLoanAmount() < maxAmount) { //can we give loan for more than requested amount?
                decision.add("You can get more than requested.");
            }
            if (maxAmount > 10000) { //max possible amount for loan is more than 10K€
                decision.add("Maximum available loan amount is €10,000.");
                maxAmount = 10000;
            }
        } else {
            decision.add("Negative response: you have low credit score."); //cs < 1
            if (maxAmount < 2000) { //cs < 1 and max amount to give for specified period < 2000€
                decision.add("Following option(s) modified: loan period, maximum loan amount");
                loanPeriod = (int) Math.ceil(2000.0 / creditModifier); //get min period for min amount (which is 2000€)
                if(loanPeriod > 60) {
                    return new Decision("Minimum loan can't be given even for 60 months.", 0, 0);
                }
                maxAmount = (int) Math.floor(creditModifier * loanPeriod / 100.0) * 100; //modifying max amount as period is modified
            } else {
                decision.add("Following option(s) modified: maximum loan amount"); //it is calculated in the beginning of method
            }
        }
        return new Decision(listToString(decision), loanPeriod, maxAmount); //convert and return final decision as string, amount of loan and its period
    }

    private String listToString(List<String> decision) {
        return decision.stream().reduce((a, b) -> a + " " + b).orElse("");
    }

}