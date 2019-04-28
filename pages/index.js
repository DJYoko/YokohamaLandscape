import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import _JSXStyle from 'styled-jsx/style';
import css from 'styled-jsx/css';
import CommonHead from '../src/component/commonHead';

export class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <CommonHead title="Yokohama Landscape"></CommonHead>
        <div id="root">
        <div className="title-wrap">
            <h1>Yokohama Landscape</h1>
        </div>          
         <style jsx>{styles}</style>
        </div>
      </div>
    );
  }
}

const styles = css`
  #root {
    width: 100%;
    height: 100%;    
    background:url(/static/img/background/index.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position:relative;
  }

  .title-wrap {
    position: absolute;
    bottom:50%;
    left:0;
    width: 100%;
    text-align:center;
  }

  h1 {
    color: #fff;
    display:inline-block;
    background-color:rgba(0,0,0,0.75);
    padding: 12px;
  }
`;

export default Index