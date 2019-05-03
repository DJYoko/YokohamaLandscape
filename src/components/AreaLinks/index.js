import React from 'react';
import Areas from '../../data/Areas';
import AreaLink from './AreaLink';

export class AreaLinks extends React.Component {
    render() {
        return (
            <div className="area-links row">
                {Areas.map((area, index) => (
                    <div className="col-xs-6 col-sm-3" key={index}>
                        <AreaLink title={area.title} path={area.path} key={index}></AreaLink>
                    </div>
                ))}
            </div>
        );
    }
}

export default AreaLinks;
