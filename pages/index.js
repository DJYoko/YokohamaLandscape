import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import _JSXStyle from 'styled-jsx/style';
import css from 'styled-jsx/css';
import CommonHead from '../src/components/CommonHead';
import AreaLinks from '../src/components/AreaLinks';
import Link from 'next/link';

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
          <div className="area-links-wrap">
            <AreaLinks></AreaLinks>
          </div>
          <div className="about-link-wrap">
            <Link href={{
              pathname: '/about'
            }}>
              <a className="about-link">
                ABOUT
                <span className="glyphicon glyphicon-arrow-right" aria-hidden="true"></span>
              </a>
            </Link>
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
    font-weight:bold;
  }
  @media screen and (max-width: 480px){
    h1{
    font-size: 48px;
}
  }


  .area-links-wrap {
    max-width: 1024px;
    margin:0 auto;
  }
.about-link-wrap {
  position:absolute;
  top:0;
  right:0;
}
.about-link-wrap a{
  padding:12px;
  display:block;
  background:#262626;
}

`;

export default Index