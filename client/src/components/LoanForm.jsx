import { Button, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import { marksAmount, marksPeriod } from '../data/sliderInfo';
import { colors } from '../theme';
import FinalOutput from './FinalOutput';
import MainSlider from './MainSlider';

function LoanForm({ form, dispatchForm, setDecision }) {
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
        setDecision(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Box sx={{ bgcolor: colors.white, p: '45px 60px', borderRadius: '15px', display: 'block' }}>
      <Typography variant="h2" textAlign="center">
        Loan Application
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          required={true}
          fullWidth={true}
          sx={{ mt: '40px' }}
          label="Personal Code"
          variant="outlined"
          value={form.personalCode}
          onChange={(event) => dispatchForm({ action: 'personalCode', value: event.target.value })}
        />

        <MainSlider step={1} dispatch={dispatchForm} marks={marksPeriod} action="loanPeriod" value={form.loanPeriod} />

        <MainSlider step={100} dispatch={dispatchForm} marks={marksAmount} action="loanAmount" value={form.loanAmount} />

        <FinalOutput form={form} dispatchForm />

        <Box sx={{ m: '20px 0', textAlign: 'center' }}>
          <Button sx={{ width: '50%', height: '50%', background: colors.blue }} size="large" variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default LoanForm;
