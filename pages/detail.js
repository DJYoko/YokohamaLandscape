import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import _JSXStyle from 'styled-jsx/style';
import css from 'styled-jsx/css';
import Areas from '../src/data/Areas';
import Link from 'next/link'

export class detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static getInitialProps({ query }) {
    return {query};
  }
  render() {
    const areaData = this.getAreaData(this.props.query.name);
    this.setAreaData(areaData);
    
    return (
      <div>
        <p>{this.state.title}</p>
        <p>{this.state.description}</p>
      </div>
    )
  }
  getAreaData (path) {
    const filteredAreas = Areas.filter((area) => {
      return (area.path === path);
    });
    return (filteredAreas.length > 0) ? filteredAreas[0] : null;
  }
  setAreaData (areaData) {
    this.state.path = areaData.path;
    this.state.description = areaData.description;
    this.state.title = areaData.title;
    return this.state;
  }
}
export default detail;