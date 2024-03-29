import React from 'react';
import _JSXStyle from 'styled-jsx/style';
import css from 'styled-jsx/css';

export class DescriptionBox extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="u-descriptionBox">
        <h1> {this.props.title} </h1>
        <p>
          {this.props.description} <br /> {this.props.annotation}
        </p>
        <hr />
        <p>
          Text Source <br />
          <a target="_blank" rel="nofollow noopener" href={this.props.authText}>
            {this.props.authText}
          </a>
        </p>
        <p>
          Photo Source <br />
          <a target="_blank" rel="nofollow noopener" href={this.props.authImg}>
            {this.props.authImg}
          </a>
        </p>
        <style jsx> {styles} </style>
      </div>
    );
  }
}

const styles = css`
  .u-descriptionBox {
    padding: 24px 24px 14px;
    background: rgba(0, 0, 0, 0.75);
    max-width: 480px;
    word-break: break-all;
    h1 {
      margin-top: 0;
    }
  }
`;

export default DescriptionBox;
