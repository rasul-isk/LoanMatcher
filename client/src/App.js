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

function App() {
  const [form, dispatchForm] = useReducer(formReducer, formDefaultValues);
  const [decision, setDecision] = useState({});

  // Textfields with common css
  //Clear button
  // display flex Loan and app component from left to right

  return (
    <div className="App">
      <CssBaseline />
      <LoanForm form={form} dispatchForm={dispatchForm} decision={decision} setDecision={setDecision} />
      {decision.info && <Decision decision={decision} />}
    </div>
  );
}

export default App;
