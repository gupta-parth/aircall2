import React from 'react'
import ActivityDetail from './ActivityDetail.jsx'
import { useState } from 'react'


const getCalls = () => fetch("https://aircall-job.herokuapp.com/activities")
                        .then((response) => response.json())
                        .then((data) => {return data;});



const Display = ({calls}) => {
    return (
        <div>
            {calls.filter(call => !call.is_archived).map(call => 
                    <ActivityDetail key={call.id} call={call}/>
                )
            }
        </div>
    )
}

const ActivityFeed = () => {
    const [ callsList, setCallsList ] = useState([])

    const handleCalls = () => {
        getCalls().then((data) => setCallsList(data));
    }
    
    return (
        <div className='activity-feed'>
            <button onClick={handleCalls}>Activity </button>
            <ul>
                <Display calls={callsList}/>
            </ul>
        </div>
    )
}

export default ActivityFeed;
