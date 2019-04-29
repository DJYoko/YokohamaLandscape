import React from 'react';
import Areas from '../../data/Areas';
import AreaLink from './AreaLink';

export class AreaLinks extends React.Component {
    render() {
        return (
            <div className="area-links row">
                {Areas.map((area, index) => (
                    <AreaLink title={area.title} path={area.path} key={index}></AreaLink>
                ))}
            </div>
        );
    }
}

export default AreaLinks;
