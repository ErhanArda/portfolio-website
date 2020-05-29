import React from 'react';
import data from '../data'
import TimelineItem from './TimelineItem'

const TimelineComponent = () =>
    data.length > 0 && (
        <div className="timeline-container">
            {data.map((data, idx) => (
                <TimelineItem data={data} key={idx} />
            ))}
        </div>
    );

    export default TimelineComponent
