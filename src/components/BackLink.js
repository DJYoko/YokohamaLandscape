import React from "react";
import _JSXStyle from "styled-jsx/style";
import css from "styled-jsx/css";
import Link from "next/link";
import CONFIG from "../../next.config";
const ROOT = CONFIG.assetPrefix === "" ? "/" : CONFIG.assetPrefix;

export class BackLink extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="l-backLink">
        <Link
          href={{
            pathname: ROOT,
          }}
        >
          <a>
            <span
              className="glyphicon glyphicon-chevron-left"
              aria-hidden="true"
            ></span>
            Back
          </a>
        </Link>
        <style jsx>{styles}</style>
      </div>
    );
  }
}

const styles = css`
  .l-backLink {
    display: inline-block;

    a {
      color: #d9d9d9;
      background: rgba(0, 0, 0, 0.9);
      display: block;
      padding: 8px;
      text-align: center;
      border-radius: 4px;
      :hover {
        text-decoration: none;
        color: #262626;
        background: rgba(255, 255, 255, 0.75);
      }

      .glyphicon {
        margin-right: 4px;
      }
    }
  }
`;

export default BackLink;
