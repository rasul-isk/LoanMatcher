export const marksPeriod = Array.from({ length: 5 }, (_, i) => ({
  value: (i + 1) * 12,
  label: ((i + 1) * 12).toString(),
  color: 'secondary',
}));

export const marksAmount = Array.from({ length: 5 }, (_, i) => ({
  value: (i + 1) * 2000,
  label: ((i + 1) * 2000).toString(),
}));

export const styleOfSlider = {
  color: '#52af77',
  height: 13,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 42,
    height: 42,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#52af77',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
};
