import { sizing } from '~/common/theme';

export const threeBounceAnimated = {
  '0%, 80%, 100%': {
    transform: 'scale(0)',
  },
  '40%': {
    transform: 'scale(1)',
  },
};

export const threeBounce = ({ components }) => {
  const { backgroundColor, size } = components.spinner.child;
  return {
    threeBounce: {
      margin: '10px auto',
      textAlign: 'center',
    },
    threeBounceChild: {
      backgroundColor,
      borderRadius: '100%',
      display: 'inline-block',
      animationName: [threeBounceAnimated],
      animationDelay: '0s',
      animationDirection: 'both',
      animationDuration: '1.4s',
      animationIterationCount: 'infinite',
    },
    threeBounceChild__sm: {
      ...sizing(`calc(${size} * 0.7) `),
    },
    threeBounceChild__md: {
      ...sizing(size),
    },
    threeBounceChild__lg: {
      ...sizing(`calc(${size} * 1.25) `),
    },
    threeBounceChild__xs: {
      ...sizing(`calc(${size} * 1.75) `),
    },
    threeBounceChild__0: {
      animationDelay: '-0.32s',
    },
    threeBounceChild__1: {
      animationDelay: '-0.16s',
    },
  };
};
