import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ChartTableCell from './ChartTableCell';

export default class ChartTableVisual extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <ChartTableCell { ...rest }>
        { children }
      </ChartTableCell>
    );
  }
}
