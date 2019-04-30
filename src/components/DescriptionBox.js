import React from 'react';
import _JSXStyle from 'styled-jsx/style';
import css from 'styled-jsx/css';

export class DescriptionBox extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="descrition-box">
                <h1>{this.props.title}</h1>
                <p>{this.props.description}</p>
                <style jsx>{styles}</style>
            </div>
        );
    }
}

const styles = css`
.descrition-box {
  margin-top: 12px;
  padding: 24px;
  background:rgba(0,0,0,0.9);
  max-width:440px;
  border-radius:4px;
}
h1 {
  margin-top:0;
}
p {
  margin-bottom: 0;
}
`;

export default DescriptionBox;