import React from 'react';
import Lane from './Lane.jsx';

export default ({lanes,onDelete}) => {
    return (
        <div className="lanes">{lanes.map(lane =>
                <Lane className="lane" key={lane.id} lane={lane}
                      onDelete={onDelete.bind(null,lane.id)} />
        )}</div>
    );
}