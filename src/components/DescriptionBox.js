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
                <hr></hr>
                <p>text source<br />{this.props.authText}</p>
                <p>Photo source<br />{this.props.authImg}</p>
                <style jsx>{styles}</style>
            </div>
        );
    }
}

const styles = css`
    .descrition-box {
    padding: 24px 24px 14px;
    background:rgba(0,0,0,0.9);
    max-width:480px;
    border-radius:4px;
    word-break:break-all;
    }
    h1 {
    margin-top:0;
    }
`;

export default DescriptionBox;