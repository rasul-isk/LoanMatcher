import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { colors } from '../theme';
import FinalOutput from './FinalOutput';

const Decision = ({ decision, setDecision, dispatchForm }) => {
  let validOutput = decision.maxAmount !== 0 && decision.maxAmount && decision.minPeriod && decision.minPeriod !== 0;

  const fixNumbers = () => {
    dispatchForm({ action: 'loanAmount', value: decision.maxAmount });
    dispatchForm({ action: 'loanPeriod', value: decision.minPeriod });
    setDecision({});
  };
  return (
    <Box sx={{ bgcolor: colors.white, p: '45px 60px', borderRadius: '15px', display: 'block', ml: '50px', width: '500px' }}>
      <Typography variant="h3" textAlign="center">
        Decision
      </Typography>

      <Typography variant="h6" textAlign="left" sx={{ pt: '20px' }}>
        {decision.info}
      </Typography>

      {validOutput && <FinalOutput amount={decision.maxAmount} period={decision.minPeriod} />}

      <Box sx={{ m: '20px 0', textAlign: 'center' }}>
        {validOutput && (
          <Button sx={{ width: '40%', height: '50%', mr: '20px', background: colors.orange }} size="large" variant="contained" onClick={() => fixNumbers()}>
            Fix it!
          </Button>
        )}
        <Button sx={{ width: '40%', height: '50%', background: colors.blue_light }} size="large" variant="contained" onClick={() => setDecision({})}>
          Okay
        </Button>
      </Box>
    </Box>
  );
};

export default Decision;
