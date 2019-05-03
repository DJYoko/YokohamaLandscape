import React from 'react';
import _JSXStyle from 'styled-jsx/style';
import css from 'styled-jsx/css';
import Areas from '../../src/data/Areas';
import CommonHead from '../../src/components/CommonHead';
import BackLink from '../../src/components/BackLink';
import DescriptionBox from '../../src/components/DescriptionBox';
import CONFIG from '../../next.config';
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
    if (this.state.path) {
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
    this.setState(areaData);
    return this.state;
  }
  renderDefault() {
    return (
      <div className="pageRoot">
        <CommonHead></CommonHead>
        <div className="container">
          <div className="back-link-wrap">
            <BackLink></BackLink>
          </div>
          <DescriptionBox
            title={this.state.title}
            description={this.state.description}
            authText={this.state.authText}
            authImg={this.state.authImg}
            annotation={this.state.annotation}>
          </DescriptionBox>
        </div>
        <style jsx>{styles}</style>
        <style jsx global>{`
            body {
              background-image:url( ${this.getBackgroundImagePath()} );
              background-size: cover;
              background-position: center;
              background-attachment: fixed;
            }
          `}</style>
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
  componentDidMount() {
    const areaName = (this.props.query.name) ? this.props.query.name : location.search.replace('?name=', '');
    const areaData = this.getAreaData(areaName);
    if (areaData !== null) {
      this.setAreaData(areaData);
    }
  }
}

const styles = css`
.container {
  padding-top: 24px;
  padding-bottom: 24px;
}
.back-link-wrap {
  margin-bottom: 12px;
}
`;

export default detail;