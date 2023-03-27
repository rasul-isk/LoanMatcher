import { CssBaseline } from '@mui/material';
import { useReducer, useState } from 'react';
import Decision from './components/Decision';
import LoanForm from './components/LoanForm';

const formDefaultValues = {
  personalCode: '',
  loanAmount: 2000,
  loanPeriod: 12,
};

const formReducer = (prev, cur) => {
  return {
    personalCode: { ...prev, personalCode: cur.value },
    loanAmount: { ...prev, loanAmount: cur.value },
    loanPeriod: { ...prev, loanPeriod: cur.value },
    nullify: { ...formDefaultValues },
  }[cur.action];
};

//TODO 
//Loan Application text & Decision text font?
//edit animations ease in, ease out
//hover on buttons 
//other cool styles from internet
function App() {
  const [form, dispatchForm] = useReducer(formReducer, formDefaultValues);
  const [decision, setDecision] = useState({});

  return (
    <div className="App">
      <CssBaseline />
      <div className="container">
        <LoanForm form={form} dispatchForm={dispatchForm} decision={decision} setDecision={setDecision} />
        {decision.info && <Decision decision={decision} setDecision={setDecision} dispatchForm={dispatchForm} />}
      </div>
    </div>
  );
}

export default App;
