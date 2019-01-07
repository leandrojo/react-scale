import React, { Component } from 'react';
import Arrow from 'react-feather/dist/icons/arrow-right';
import Chevron from 'react-feather/dist/icons/chevron-right';
import PropTypes from 'prop-types';
import { omit } from 'underscore';

import theme from '~/common/theme';

import View from './View';

const { css, withStyles } = theme;

const Item = props => {
  const { children, className, href } = props;
  const propagateProps = omit(
    props,
    ...['children', 'className', 'css', 'styles', 'theme', 'type'],
  );

  return (
    <a href={href} className={className} {...propagateProps} aria-current="page">
      {children}
    </a>
  );
};

const Separator = ({ className, type }) => {
  switch (type) {
    case 'arrow':
      return (
        <View className={className}>
          <Arrow color="#9C9C9C" size={16} />
        </View>
      );
    case 'chevron':
    default:
      return (
        <View className={className}>
          <Chevron color="#9C9C9C" size={24} />
        </View>
      );
  }
};

class Breadcrumb extends Component {
  renderSeparator(key) {
    const Components = this.props.components;

    const {
      separator,
      styles,
      theme: { components },
    } = this.props;

    if (key === 0) return null;

    return (
      <Components.Separator
        {...css(styles.separator)}
        color={components.breadcrumb.separator.color}
        type={separator}
      />
    );
  }

  renderItem(child, key) {
    const { children, styles } = this.props;
    const Components = this.props.components;

    const style = [];

    style.push(styles.link);

    if (React.Children.count(children) === key + 1) style.push(styles.link__current);

    return (
      <li {...css(styles.item)} key={key}>
        {this.renderSeparator(key)}
        <Components.Item {...css(style)}>{child}</Components.Item>
      </li>
    );
  }

  renderContent() {
    const { children } = this.props;
    return React.Children.map(children, (child, i) => this.renderItem(child, i));
  }

  render() {
    const { styles } = this.props;

    const propagateProps = omit(
      this.props,
      ...['children', 'className', 'css', 'styles', 'theme', 'type'],
    );

    return (
      <nav aria-label="Breadcrumb" {...css(styles.breadcrumb)} {...propagateProps}>
        <ol {...css(styles.listing)}>{this.renderContent()}</ol>
      </nav>
    );
  }
}

Breadcrumb.defaultProps = {
  children: null,
  className: '',
  components: {
    Item,
    Separator,
  },
  latestIsCurrentPage: true,
  separator: 'chevron',
  styles: {},
  useSpread: 5,
};

Breadcrumb.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  className: PropTypes.string,
  components: PropTypes.objectOf({
    Item: PropTypes.element,
    Separator: PropTypes.element,
  }),
  latestIsCurrentPage: PropTypes.bool,
  separator: PropTypes.oneOf(['arrow', 'chevron']),
  styles: {},
  useSpread: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
};

Breadcrumb.Item = Item;

const styles = ({ components }) => {
  const { link } = components.breadcrumb;
  return {
    breadcrumb: {
      display: 'inline-block',
      padding: '0.35em 0',
    },
    listing: {
      display: 'flex',
      margin: 0,
      listStyle: 'none',
      paddingLeft: 0,
    },
    item: {
      alignItems: 'center',
      display: 'flex',
    },
    separator: {
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center',
      margin: 0,
      width: 20,
    },
    link: (() => {
      const { color } = link;
      return {
        color,
        padding: 5,
      };
    })(),
    link__current: (() => {
      const { color } = link.current;
      return {
        color,
      };
    })(),
    link__disabled: (() => {
      const { color } = link.disabled;
      return {
        color,
      };
    })(),
  };
};

export default withStyles(styles)(Breadcrumb);
