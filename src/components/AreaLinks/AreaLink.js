import React from 'react';
import _JSXStyle from 'styled-jsx/style';
import css from 'styled-jsx/css';
import PropTypes from 'prop-types';
import Link from 'next/link';

export class AreaLink extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Link href={{
                    pathname: './detail/',
                    query: { name: this.props.path }
                }}>
                    <a className="l-areaLinks__link">
                        {this.props.title}
                    </a>
                </Link>
                <style jsx>{styles}</style>
            </div>
        );
    }
}

AreaLink.propTypes = {
    path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

const styles = css`
    .l-areaLinks__link {
        color: #d9d9d9;
        background: rgba(0, 0, 0, 0.75);
        display: block;
        padding: 16px;
        text-align: center;
        margin-bottom: 24px;
        :hover {
            color: #262626;
            background: rgba(255, 255, 255, 0.75);
        }
    }
`;

export default AreaLink;