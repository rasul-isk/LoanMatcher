import { makeStyles } from '@material-ui/core/styles';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Button, IconButton, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import { marksAmount, marksPeriod } from '../data/sliderData';
import { colors } from '../theme';
import FinalOutput from './FinalOutput';
import MainSlider from './MainSlider';
// const useStyles = makeStyles((theme) => ({
//   root: {
//     "& .MuiFilledInput-root": {
//       background: "rgb(232, 241, 250)"
//     }
//   }
// }));

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiFilledInput-root': {
      backgroundColor: 'rgb(232, 241, 250)',
    },
    '& .MuiFilledInput-root:hover': {
      backgroundColor: 'rgb(250, 232, 241)',
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'rgb(232, 241, 250)',
      },
    },
    '& .MuiFilledInput-root.Mui-focused': {
      backgroundColor: 'rgb(250, 241, 232)',
    },
  },
}));
function LoanForm({ form, dispatchForm, setDecision }) {
  const classes = useStyles();
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('http://localhost:8080/loan', {
        personalCode: form.personalCode,
        loanAmount: form.loanAmount,
        loanPeriod: form.loanPeriod,
      })
      .then((response) => {
        console.log(response.data);
        setDecision(response.data);
      })
      .catch(() => {
        setDecision({ info: 'Bad request or wrong personal code. Please, try again.' });
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
          sx={{ mt: '30px', mb: '20px', background: colors.white, backgroundColor: colors.white }}
          label="Personal Code"
          variant="outlined"
          value={form.personalCode}
          onChange={(event) => dispatchForm({ action: 'personalCode', value: event.target.value })}
          InputProps={{
            endAdornment: (
              <IconButton sx={{ visibility: form.personalCode ? 'visible' : 'hidden' }} onClick={() => dispatchForm({ action: 'personalCode', value: '' })}>
                <HighlightOffIcon />
              </IconButton>
            ),
          }}
        />

        <MainSlider step={1} dispatch={dispatchForm} marks={marksPeriod} action="loanPeriod" value={form.loanPeriod} />

        <MainSlider step={100} dispatch={dispatchForm} marks={marksAmount} action="loanAmount" value={form.loanAmount} />

        <FinalOutput amount={form.loanAmount} period={form.loanPeriod} />

        <Box sx={{ m: '20px 0', textAlign: 'center' }}>
          <Button sx={{ width: '50%', height: '50%', background: colors.blue }} size="large" variant="contained" type="submit">
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default LoanForm;
