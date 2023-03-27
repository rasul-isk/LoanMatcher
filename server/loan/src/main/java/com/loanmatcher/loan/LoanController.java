package com.loanmatcher.loan;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("http://localhost:3000/")
public class LoanController {
    private final LoanService loanService;

    public LoanController(LoanService loanService) {
        this.loanService = loanService;
    }

    @PostMapping("/loan")
    public ResponseEntity<Decision> calculateLoan(@RequestBody Loan loan) {
        if (loan.isRequestValid()) {
            Decision decision = loanService.calculateLoanDecision(loan);
            return ResponseEntity.ok(decision);
        } else {
            return ResponseEntity.badRequest().build();
        }
    }
}