import React from 'react'
import ActivityDetail from './ActivityDetail.jsx'
import { useState } from 'react'


const getCalls = () => fetch("https://aircall-job.herokuapp.com/activities")
                        .then((response) => response.json())
                        .then((data) => {return data;});


const ArchiveButton = ({call}) => {
    return (
    <button onClick={archiveCall(call.id)}>Archive</button>
    )

}


const archiveCall = (callID) => {
    const handle = () => {

    }
}


const Display = ({calls}) => {
    return (
        <div>
            {calls.filter(call => !call.is_archived).map(function(call) {
                    return (
                        <React.Fragment key={call.id}>
                        <ActivityDetail call={call}/>
                        <ArchiveButton call={call} />
                        </React.Fragment>
                    )
                    })
            } 
        </div>
    )
}


const ActivityFeed = () => {
    const [ callsList, setCallsList ] = useState([])

    const handleCalls = () => {
        getCalls().then((data) => setCallsList(data));
    }

    const handleArchives = () => {

    }
    
    return (
        <div className='activity-feed'>
            <button onClick={handleCalls}>Show Activity </button>
            <button onClick={handleArchives}>Show archive</button>
            <ul>
                <Display calls={callsList}/>
            </ul>
        </div>
    )
}

export default ActivityFeed;
