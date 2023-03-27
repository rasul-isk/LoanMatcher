package com.loanmatcher.loan;

public class Loan {
    final private String personalCode;
    private int loanAmount;
    private int loanPeriod;
    private int creditModifier;
    private double creditScore;
    private String decision;
    private double maxLoanAmount;

    public Loan(String personalCode, int loanAmount, int loanPeriod, int creditModifier, double creditScore, String decision, double maxLoanAmount) {
        this.personalCode = personalCode;
        this.loanAmount = loanAmount;
        this.loanPeriod = loanPeriod;
        this.creditModifier = creditModifier;
        this.creditScore = creditScore;
        this.decision = decision;
        this.maxLoanAmount = maxLoanAmount;
    }

    public String getPersonalCode() {
        return personalCode;
    }

    public int getLoanAmount() {
        return loanAmount;
    }

    public int getLoanPeriod() {
        return loanPeriod;
    }

    public void setLoanPeriod(int loanPeriod) {
        this.loanPeriod = loanPeriod;
    }

    public int getCreditModifier() {
        return creditModifier;
    }

    public void setCreditModifier(int creditModifier) {
        this.creditModifier = creditModifier;
    }

    public double getCreditScore() {
        return creditScore;
    }

    public void setCreditScore(double creditScore) {
        this.creditScore = creditScore;
    }

    public String getDecision() {
        return decision;
    }

    public void setDecision(String decision) {
        this.decision = decision;
    }

    public double getMaxLoanAmount() {
        return maxLoanAmount;
    }

    public void setMaxLoanAmount(double maxLoanAmount) {
        this.maxLoanAmount = maxLoanAmount;
    }

    public boolean isRequestValid() {
        boolean correctModifier = this.creditModifier != -1;
        boolean correctAmount = this.loanAmount <= 10000 && this.loanAmount >= 2000;
        boolean correctPeriod = this.loanPeriod >= 12 && this.loanPeriod <= 60;

        return correctModifier && correctAmount && correctPeriod;
    }
}