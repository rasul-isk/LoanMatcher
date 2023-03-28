package com.loanmatcher.loan.controller;

import com.loanmatcher.loan.service.LoanService;
import com.loanmatcher.loan.model.Decision;
import com.loanmatcher.loan.model.Loan;
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
    public ResponseEntity<Decision> handleLoanRequest(@RequestBody Loan loan) {
        if (loan.isRequestValid()) { //if request is valid, calculate loan and return given Decision
            Decision decision = loanService.calculateLoanDecision(loan);
            return ResponseEntity.ok(decision);
        } else {
            return ResponseEntity.badRequest().build(); //return bad error with code of 400
        }
    }
}