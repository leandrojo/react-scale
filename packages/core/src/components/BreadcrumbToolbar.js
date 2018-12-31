import React from 'react';
import PropTypes from 'prop-types';
import { omit } from 'underscore';

import { css, withStyles } from '~/common/theme';
import View from './View';

const BreadcrumbToolbar = props => {
  const { children, styles } = props;

  const propagateProps = omit(
    props,
    ...['children', 'className', 'css', 'styles', 'theme', 'type'],
  );

  return (
    <View aria-label="Breadcrumb" {...css(styles.breadcrumb)} {...propagateProps}>
      {children}
    </View>
  );
};

BreadcrumbToolbar.defaultProps = {
  children: null,
  styles: {},
};

BreadcrumbToolbar.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  styles: {},
};

const styles = ({ components }) => {
  const { backgroundColor, borderRadius, padding } = components.breadcrumbToolbar;
  return {
    breadcrumb: {
      alignItems: 'center',
      backgroundColor,
      borderRadius,
      boxSizing: 'content-box',
      boxShadow: '0 2px 2px rgba(0, 0, 0, .1), 0 0 1px rgba(0, 0, 0, .1)',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding,
    },
  };
};

export default withStyles(styles)(BreadcrumbToolbar);
