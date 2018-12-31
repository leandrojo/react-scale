import React from 'react';
import PropTypes from 'prop-types';

import { css, withStyles } from '~/common/theme';

const View = props => {
  const { orientation, styles, type } = props;

  const style = [];

  style.push(styles.divider);

  switch (orientation) {
    case 'vertical':
      style.push(styles.divider__vertical);
      break;
    case 'horizontal':
    default: {
      style.push(styles.divider__horizontal);
    }
  }

  switch (type) {
    case 'dashed':
      style.push(styles.divider__dashed);
      break;
    case 'normal':
    default:
  }

  return <div {...css(style)} />;
};

View.defaultProps = {
  alignment: 'left',
  orientation: 'horizontal',
  type: 'normal',
};

View.propTypes = {
  alignment: PropTypes.oneOf(['left', 'center', 'right']),
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  type: PropTypes.oneOf(['normal', 'dashed']),
};

const styles = ({
  components: {
    divider: { color },
  },
}) => ({
  divider: {
    backgroundColor: color,
    display: 'inline-block',
  },
  divider__horizontal: {
    height: 1,
    margin: `${20}px 0`,
    width: '100%',
  },
  divider__vertical: {
    height: '1em',
    margin: `0 ${10}px -3px`,
    width: 1,
  },
  divider__dashed: {
    backgroundColor: 'transparent',
    borderBottom: `1px dashed ${color}`,
  },
});

export default withStyles(styles)(View);
