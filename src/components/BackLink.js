import React from 'react';
import _JSXStyle from 'styled-jsx/style';
import css from 'styled-jsx/css';
import Link from 'next/link';
import CONFIG from '../../next.config';
const ROOT = (CONFIG.assetPrefix === '') ? '/' : CONFIG.assetPrefix;

export class BackLink extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="back-link-area">
                <Link href={{
                    pathname: ROOT
                }}>
                    <a className="back-link">
                        <span className="glyphicon glyphicon-arrow-left" aria-hidden="true"></span>
                        Back
                </a>
                </Link>
                <style jsx>{styles}</style>
            </div>
        );
    }
}

const styles = css`

    .back-link-area{
        display:inline-block;
    }
    .back-link {
        color: #d9d9d9;
        background: rgba(0,0,0,0.25);
        display:block;
        padding: 8px;
        text-align:center;
        border-radius: 4px;
    }

    .back-link:hover {
        text-decoration:none;
        color: #262626;
        background:rgba(255,255,255,0.75);
    }

    .glyphicon {
        margin-right: 4px;
    }
`;


export default BackLink;