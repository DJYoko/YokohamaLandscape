import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import _JSXStyle from 'styled-jsx/style';
import css from 'styled-jsx/css';
import CommonHead from '../src/components/CommonHead';
import AreaLinks from '../src/components/AreaLinks';

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
          <div className="index-links-wrap">
            <AreaLinks></AreaLinks>
          </div>
          <style jsx global>{`
            body { 
              background-image:url(/static/img/background/index.jpg);
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
  @media screen and (max-width: 480px){
    #root {
    padding-top: 60px;
}
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
  @media screen and (max-width: 480px){
    h1{
    font-size: 48px;
}
  }


  .index-links-wrap {
    max-width: 1024px;
    margin:0 auto;
  }
`;

export default Index