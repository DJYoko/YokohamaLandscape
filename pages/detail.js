import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import _JSXStyle from 'styled-jsx/style';
import css from 'styled-jsx/css';
import Areas from '../src/data/Areas';
import CommonHead from '../src/components/CommonHead';
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
    if (areaData !== null) {
      this.setAreaData(areaData);
      return this.renderDefault ();
    } else {
      return this.renderError ();
    }
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
    this.state.img = areaData.img;
    return this.state;
  }
  renderDefault () {
    return (
      <div className="pageRoot" style={{backgroundImage : this.getBackgroundImageStyle()}}>
       <CommonHead></CommonHead>
       <div className="container">
        
        <div className="text">
          <h1>{this.state.title}</h1>
          <p>{this.state.description}</p>
        </div>
        </div>
          <style jsx>{styles}</style>
      </div>
    )
  }
  renderError () {
    return (
      <div>
      <CommonHead></CommonHead>
        <p>Sorry page data is not found.</p>
      </div>
    )
  }
  getBackgroundImageStyle () {
      return 'url(/static/img/background/' + this.state.img + ')';
  }
}

const styles = css`
.pageRoot {
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}
.container {
  padding-top: 24px;
}
.text {
  padding: 24px;
  background:rgba(0,0,0,0.25);
}
`;

export default detail;