import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import _JSXStyle from 'styled-jsx/style';
import css from 'styled-jsx/css';
import CommonHead from '../src/components/CommonHead';

export class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <CommonHead></CommonHead>
        <div id="root" className="container">
          <div className="title-wrap">
            <h1>Yokohama Landscape</h1>
          </div>
          <style jsx global>{`
            body { 
              background:url(/static/img/background/index.jpg);
              background-size: cover;
              background-position: center;
              background-repeat: no-repeat;
              position:relative;
              background-attachment:fixed;
            }
          `}</style>
          <style jsx>{styles}</style>
        </div>
      </div>
    );
  }
}
const styles = css`
  #root {
    padding-top: 200px;
  }

  .title-wrap {
    text-align:center;
    margin-bottom:24px;
  }

  h1 {
    color: #fff;
    display:inline-block;
    padding: 12px;
    font-size:60px;
  }
`;

export default Index