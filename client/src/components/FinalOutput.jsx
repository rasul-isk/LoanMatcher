import { Box, FormControl, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import React from 'react';

const FinalOutput = ({ form, dispatchForm }) => {
  return (
    <Box>
      <FormControl fullWidth={false} sx={{ m: 1 }}>
        <InputLabel htmlFor="outlined-adornment-amount">Loan Amount</InputLabel>
        <OutlinedInput
          startAdornment={
            <InputAdornment position="start" sx={{ mt: '3px' }}>
              €
            </InputAdornment>
          }
          inputProps={{ readOnly: true }}
          label="Loan Amount"
          value={form.loanAmount.toLocaleString('en-UK')}
          onChange={(event) => dispatchForm({ action: 'loanAmount', value: event.target.value })}
        />
      </FormControl>
      <TextField
        inputProps={{ readOnly: true }}
        sx={{ m: 1 }}
        label="Period (monthes)"
        variant="outlined"
        value={form.loanPeriod}
        onChange={(event) => dispatchForm({ action: 'loanPeriod', value: event.target.value })}
      />
    </Box>
  );
};

export default FinalOutput;
