import { Button, Slider, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import { useReducer, useState } from 'react';
import { colors } from './theme';

const formDefaultValues = {
  personalCode: '',
  loanAmount: '',
  loanPeriod: '',
};

const formReducer = (prev, cur) => {
  console.log(prev)
  console.log(cur.action)
  console.log(cur.value)
  return {
    personalCode: { ...prev, personalCode: cur.value,  },
    loanAmount: { ...prev, loanAmount: cur.value },
    loanPeriod: { ...prev, loanPeriod: cur.value },
    nullify: { ...formDefaultValues },
  }[cur.action];
};

const marks = [
  {
    value: 12,
    label: '12',
  },
  {
    value: 24,
    label: '24',
  },
  {
    value: 36,
    label: '36',
  },
  {
    value: 48,
    label: '48',
  },
  {
    value: 60,
    label: '60',
  },
];

function LoanForm() {
  const [form, dispatchForm] = useReducer(formReducer, formDefaultValues);
  const periodValue = (value) => value;
  const [decision, setDecision] = useState('');
  const [maxAmount, setMaxAmount] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form.loanPeriod);
    axios
      .post('http://localhost:8080/loan', {
        personalCode: form.personalCode,
        loanAmount: form.loanAmount,
        loanPeriod: form.loanPeriod,
      })
      .then((response) => {
        setDecision(response.data.decision);
        setMaxAmount(response.data.maxAmount);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Box sx={{ bgcolor: colors.white, p: '30px', borderRadius: '15px', display: 'block' }}>
      <Typography variant="h2">Loan Application</Typography>
      <form onSubmit={handleSubmit}>
        <Box>
          <TextField label="Personal Code" variant="outlined" value={form.personalCode} onChange={(event) => dispatchForm({ action: 'personalCode', value: event.target.value })} />
        </Box>
        <Box>
          <TextField label="Custom marks" variant="outlined" value={form.loanAmount} onChange={(event) => dispatchForm({ action: 'loanAmount', value: event.target.value })} />
        </Box>
        <Box>
          <Slider
            aria-label="Small steps"
            defaultValue={12}
            step={1}
            min={12}
            max={60}
            onChange={(event) => dispatchForm({ action: 'loanPeriod', value: `${event.target.value}` })}
            valueLabelDisplay="auto"
            marks={marks}
          />
        </Box>
        <Box>
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </Box>
        {decision && <p>Decision: {decision}</p>}
        {maxAmount && <p>Max Amount: {maxAmount}</p>}
      </form>
    </Box>
  );
}

export default LoanForm;
