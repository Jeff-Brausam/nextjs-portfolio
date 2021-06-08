import { keyframes } from '@stitches/react';

const scaleUp = keyframes({
  '0%': { transform: 'scale(1)' },
  '100%': { transform: 'scale(1.5)' }
});

const spin = keyframes({
  from: {
    transform: 'rotate(0deg)'
  },
  to: {
    transform: 'rotate(360deg)'
  }
});

const ping = keyframes({
  '75%': {
    transform: 'scale(2)',
    opacity: 0
  },
  '100%': {
    transform: 'scale(2)',
    opacity: 0
  }
});

const pulse = keyframes({
  '0%': {
    opacity: 1
  },
  '100%': {
    opacity: 1
  },
  '50%': {
    opacity: 0.5
  }
});

const bounce = keyframes({
  '0%': {
    transform: 'translateY(-25%)',
    animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'
  },
  '100%': {
    transform: 'translateY(-25%)',
    animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'
  },
  '50%': {
    transform: 'translateY(0)',
    animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
  }
});

export default {
  scaleUp,
  spin,
  ping,
  pulse,
  bounce
};
