import React from 'react';
import _JSXStyle from 'styled-jsx/style';
import css from 'styled-jsx/css';
import PropTypes from 'prop-types';

export class AreaLink extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="col-xs-6 col-sm-3">
                <a className="area-link" href={'detail?area=' + this.props.route}>
                    {this.props.title}
                    <style jsx>{styles}</style>
                </a>
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
        color: #262626;
        background: rgba(255,255,255,0.65);
        display:block;
        padding: 24px;
        text-align:center;
        border-radius: 4px;
        border:1px solid #fff;
    }

    .area-link:hover {
        text-decoration:none;
        background:#fff;
    }
`;

export default AreaLink;