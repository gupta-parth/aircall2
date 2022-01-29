import React from 'react';

const AcitivityDetail = ({call}) => {
    
    return (
        <div className='activity-detail'>
            <p>Caller : {call.from}</p>
            <p>Time : {call.created_at}</p>
            <p>Device : {call.to}</p>
            <p>is_archived : {call.is_archived} </p>
        </div>
    )
};

export default AcitivityDetail;
