package com.loanmatcher.loan;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoanController {
    private final LoanService loanService;

    public LoanController(LoanService loanService) {
        this.loanService = loanService;
    }

    @PostMapping("/loan")
    public ResponseEntity<Loan> calculateLoan(@RequestBody Loan loan) {
        loan.setCreditModifier(loanService.getCreditModifier(loan.getPersonalCode()));
        if (loan.isRequestValid()) {
            loanService.calculateLoanDecision(loan);
            return ResponseEntity.ok(loan);
        }
        else {
            return ResponseEntity.badRequest().build();
        }

    }
}