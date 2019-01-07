import React from 'react';
import PropTypes from 'prop-types';
import { omit } from 'underscore';

import theme from '~/common/theme';

const { css, withStyles } = theme;

const View = props => {
  const {
    children, className, style, styles,
  } = props;
  const propagateProps = omit(
    props,
    ...['children', 'className', 'closable', 'css', 'show', 'styles', 'theme', 'type'],
  );

  return (
    <div style={style} className={(css(styles.content).className, className)} {...propagateProps}>
      {children}
    </div>
  );
};

View.defaultProps = {
  children: null,
  className: '',
};

View.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  className: PropTypes.string,
};

const styles = () => ({
  content: {
    boxSizing: 'content-box',
  },
});

export default withStyles(styles)(View);
