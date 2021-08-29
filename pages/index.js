import React from 'react';
import _JSXStyle from 'styled-jsx/style';
import css from 'styled-jsx/css';
import CommonHead from '../src/components/CommonHead';
import AreaLinks from '../src/components/AreaLinks';
import Link from 'next/link';
import CONFIG from '../next.config';
import generateSiteRoute from '../src/functions/generateSiteRoute';
const ROOT = CONFIG.assetPrefix === '' ? '/' : CONFIG.assetPrefix;

export class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <CommonHead></CommonHead>
        <div className="container l-top">
          <div className="l-top__titleWrap">
            <h1>Yokohama Landscape</h1>
          </div>
          <div className="l-areaLinks">
            <AreaLinks></AreaLinks>
          </div>
          <div className="l-aboutLink">
            <Link
              href={{
                pathname: generateSiteRoute('/about/'),
              }}
            >
              <a>
                ABOUT
                <span
                  className="glyphicon glyphicon-chevron-right"
                  aria-hidden="true"
                ></span>
              </a>
            </Link>
          </div>
          <div className="l-authLink text-right">
            <a
              target="_blank"
              href="https://www.pakutaso.com/20150850219hdr.html"
            >
              background photo author
            </a>
          </div>
          <style jsx global>{`
            body {
              background-image: url(${this.getBackgroundImageStyle()});
            }
          `}</style>
          <style jsx>{styles}</style>
        </div>
      </div>
    );
  }
  getBackgroundImageStyle() {
    return ROOT + 'static/img/background/index.jpg';
  }
}

const styles = css`
  .l-top {
    padding-top: 160px;
    @media screen and (max-width: 480px) {
      padding-top: 40px;
    }
    &__titleWrap {
      text-align: center;
      margin-bottom: 24px;
      h1 {
        color: #fff;
        display: inline-block;
        font-size: 80px;
        @media screen and (max-width: 480px) {
          font-size: 48px;
        }
      }
    }
  }

  .l-areaLinks {
    max-width: 1024px;
    margin: 100px auto 100px;
  }

  .l-aboutLink {
    position: absolute;
    top: 0;
    right: 0;
    a {
      padding: 12px;
      display: block;
      background: #262626;
    }
    span {
      margin-left: 4px;
    }
  }

  .l-authLink {
    a {
      background-color: rgba(0, 0, 0, 0.75);
      display: inline-block;
      padding: 2px 4px;
    }
  }
`;

export default Index;
