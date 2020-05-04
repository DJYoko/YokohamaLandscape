import React from "react";
import _JSXStyle from "styled-jsx/style";
import css from "styled-jsx/css";
import CommonHead from "../src/components/CommonHead";
import AreaLinks from "../src/components/AreaLinks";
import Link from "next/link";
import CONFIG from "../next.config";
const ROOT = CONFIG.assetPrefix === "" ? "/" : CONFIG.assetPrefix;

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
          <div className="area-links-wrap">
            <AreaLinks></AreaLinks>
          </div>
          <div className="about-link-wrap">
            <Link
              href={{
                pathname: "./about/",
              }}
            >
              <a className="about-link">
                ABOUT
                <span
                  className="glyphicon glyphicon-chevron-right"
                  aria-hidden="true"
                ></span>
              </a>
            </Link>
          </div>
          <div className="auth-link-wrap text-right">
            <a
              className="auth-link"
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
    return ROOT + "static/img/background/index.jpg";
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

  .area-links-wrap {
    max-width: 1024px;
    margin: 100px auto 100px;
  }
  .about-link-wrap {
    position: absolute;
    top: 0;
    right: 0;
  }
  .about-link-wrap a {
    padding: 12px;
    display: block;
    background: #262626;
  }

  .about-link-wrap span {
    margin-left: 4px;
  }

  .auth-link {
    background-color: rgba(0, 0, 0, 0.75);
    display: inline-block;
    padding: 4px;
  }
`;

export default Index;
