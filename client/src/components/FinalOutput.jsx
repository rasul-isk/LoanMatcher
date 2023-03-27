import { Box, FormControl, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import React from 'react';

const FinalOutput = ({ amount, period }) => {
  return (
    <Box display="inline-flex" mt="10px">
      <FormControl fullWidth={false} sx={{ m: 1, fill: 0.5 }}>
        <InputLabel htmlFor="outlined-adornment-amount">Loan Amount</InputLabel>
        <OutlinedInput
          startAdornment={
            <InputAdornment position="start" sx={{ mt: '2px' }}>
              <strong>€</strong>
            </InputAdornment>
          }
          inputProps={{ readOnly: true }}
          label="Loan Amount"
          value={amount.toLocaleString('en-UK')}
        />
      </FormControl>

      <TextField inputProps={{ readOnly: true }} sx={{ m: 1, fill: 0.5 }} label="Period (monthes)" variant="outlined" value={period} />
    </Box>
  );
};

export default FinalOutput;
