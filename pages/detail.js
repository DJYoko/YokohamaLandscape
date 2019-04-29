import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import _JSXStyle from 'styled-jsx/style';
import css from 'styled-jsx/css';


export class detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static async getInitialProps({ query }) {
    console.log('SLUG', query);
    return {};
  }
  render() {
    return (
      <div>
        <p>this is detail</p>
      </div>
    )
  }
}
export default detail;