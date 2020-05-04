import React from 'react';
import Areas from '../../data/Areas';
import AreaLink from './AreaLink';
import css from 'styled-jsx/css';

export class AreaLinks extends React.Component {
    render() {
        return (
            <div className="row">
                {Areas.map((area, index) => (
                    <div className="col-xs-12 col-sm-4 col-md-3 l-areaLinks__cell" key={index}>
                        <AreaLink title={area.title} path={area.path} key={index}></AreaLink>
                    </div>
                ))}
                <style jsx>{styles}</style>
            </div>
        );
    }
}


const styles = css`
    .l-areaLinks__cell {
        padding-right: 1px;
        padding-left: 0;
    }
`;

export default AreaLinks;
