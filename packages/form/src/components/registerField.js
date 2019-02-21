import React from 'react';
import PropTypes from 'prop-types';
import { filter, pluck, propertyOf } from 'underscore';

import { FormContext } from './Form';

export default function registerField(Component: any) {
  return (() => {
    class Field extends React.PureComponent {
      static contextType = FormContext;

      componentDidMount() {
        const { name, rules } = this.props;
        this.context.registerField(name, rules);
      }

      /**
       * @description Get value of a specific property.
       * @param  {string} property - property 'name' is the key name.
       */

      getValue() {
        const { name, value } = this.props;

        if (value !== '') return value;

        return propertyOf(propertyOf(this.context)('values'))(name);
      }

      /**
       * @description Get yours errors.
       */

      getErrors() {
        const { errors } = this.context;
        const { name } = this.props;
        return pluck(filter(errors, err => err.field === name), 'message');
      }

      render() {
        const { formExist, onChange, showErrors } = this.context;

        if (formExist === false) return <Component {...this.props} />;

        return (
          <Component
            {...this.props}
            errors={this.getErrors()}
            showErrors={showErrors}
            onChange={onChange}
            value={this.getValue()}
          />
        );
      }
    }

    Field.defaultProps = {
      rules: [],
      value: '',
    };

    Field.propTypes = {
      name: PropTypes.string.isRequired,
      rules: PropTypes.arrayOf(PropTypes.objectOf()),
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    };

    return Field;
  })();
}
