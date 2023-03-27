import { Box, Slider } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';
import { styleOfSlider } from '../data/sliderData';

const PrettoSlider = styled(Slider)(styleOfSlider);

const MainSlider = ({ marks, dispatch, step, action, value }) => {
  return (
    <Box sx={{ mt: '40px' }}>
      <PrettoSlider
        aria-label="Small steps"
        value={value}
        step={step}
        min={marks[0].value}
        max={marks[marks.length - 1].value}
        onChange={(event) => dispatch({ action: action, value: event.target.value })}
        valueLabelDisplay="auto"
        marks={marks}
      />
    </Box>
  );
};

export default MainSlider;
