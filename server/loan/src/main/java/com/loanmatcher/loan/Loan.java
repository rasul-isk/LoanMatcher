package com.loanmatcher.loan;

public class Loan {
    private final String personalCode;
    private final int loanAmount;
    private final int loanPeriod;

    public Loan(String personalCode, int loanAmount, int loanPeriod) {
        this.personalCode = personalCode;
        this.loanAmount = loanAmount;
        this.loanPeriod = loanPeriod;
    }

    public int getLoanAmount() {
        return loanAmount;
    }

    public int getLoanPeriod() {
        return loanPeriod;
    }

    public boolean isRequestValid() {
        boolean correctModifier = this.getCreditModifier() != -1;
        boolean correctAmount = this.loanAmount <= 10000 && this.loanAmount >= 2000;
        boolean correctPeriod = this.loanPeriod >= 12 && this.loanPeriod <= 60;

        return correctModifier && correctAmount && correctPeriod;
    }

    public int getCreditModifier() {
        return switch (this.personalCode) {
            case "49002010965" -> 0; // person has debt
            case "49002010976" -> 100; // segment 1
            case "49002010987" -> 300; // segment 2
            case "49002010998" -> 1000; // segment 3
            default -> -1; // invalid personal code
        };
    }
}