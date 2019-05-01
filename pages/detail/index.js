import React from 'react';
import _JSXStyle from 'styled-jsx/style';
import css from 'styled-jsx/css';
import Areas from '../../src/data/Areas';
import CommonHead from '../../src/components/CommonHead';
import BackLink from '../../src/components/BackLink';
import DescriptionBox from '../../src/components/DescriptionBox';
import CONFIG from '../../next.config';
import { get } from 'http';
const ROOT = (CONFIG.assetPrefix === '') ? '/' : CONFIG.assetPrefix;

export class detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static getInitialProps({ query }) {
    return { query };
  }
  render() {
    console.log(this.props.query.name);
    const queryName = (this.props.query.name) ? this.props.query.name : this.getUrlParams()['name'];
    const areaData = this.getAreaData(queryName);
    if (areaData !== null) {
      this.setAreaData(areaData);
      return this.renderDefault();
    } else {
      return this.renderError();
    }
  }
  getAreaData(path) {
    const filteredAreas = Areas.filter((area) => {
      return (area.path === path);
    });
    return (filteredAreas.length > 0) ? filteredAreas[0] : null;
  }
  setAreaData(areaData) {
    this.state.path = areaData.path;
    this.state.description = areaData.description;
    this.state.title = areaData.title;
    this.state.img = areaData.img;
    return this.state;
  }
  renderDefault() {
    return (
      <div className="pageRoot" style={{ backgroundImage: `url( ${this.getBackgroundImagePath()} )` }}>
        <CommonHead></CommonHead>
        <div className="container">
          <div className="back-link-wrap">
            <BackLink></BackLink>
          </div>
          <DescriptionBox title={this.state.title} description={this.state.description}></DescriptionBox>
        </div>
        <style jsx>{styles}</style>
      </div>
    )
  }
  renderError() {
    return (
      <div>
        <CommonHead></CommonHead>
        <div className="container">
          <div className="back-link-wrap">
            <BackLink></BackLink>
          </div>
          <p>Sorry page data is not found.</p>
          <style jsx>{styles}</style>
        </div>
      </div>
    )
  }
  getBackgroundImagePath() {
    return ROOT + 'static/img/background/' + this.state.img;
  }
  getUrlParams() {
    const url = window.location.search;
    const vars = [];
    const hash = url.slice(1).split('&');
    const max = hash.length;
    hash.forEach((element) => {
      array = element.split('=');
      vars.push(array[0]);
      vars[array[0]] = array[1];
    });
    return vars;
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
.back-link-wrap {
  margin-bottom: 12px;
}
`;

export default detail;