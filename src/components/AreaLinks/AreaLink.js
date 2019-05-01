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
            <div className="col-xs-6 col-sm-3">
                <Link href={{
                    pathname: './detail',
                    query: { name: this.props.path }
                }}>
                    <a className="area-link">
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
    .area-link {
        color: #d9d9d9;
        background: rgba(0,0,0,0.75);
        display:block;
        padding: 24px;
        text-align:center;
        border-radius: 4px;
        margin-bottom:24px;
    }

    .area-link:hover {
        color: #262626;
        background:rgba(255,255,255,0.75);
    }
`;

export default AreaLink;