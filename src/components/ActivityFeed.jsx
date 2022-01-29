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


const Display = ({calls, value}) => {
    if (value === true) {
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
    else {
        return (
            <div>
                {calls.filter(call => call.is_archived).map(function(call) {
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
}


const ActivityFeed = () => {
    const [ callsList, setCallsList ] = useState([])
    const [toggleFeed, setToggleFeed] = useState(true)


    const handleCalls = () => {
        getCalls().then((data) => setCallsList(data));
        const toggle = true
        setToggleFeed(toggle)
    }

    const handleArchives = () => {
        getCalls().then((data) => setCallsList(data));
        const toggle = false
        setToggleFeed(toggle)
    }
    
    return (
        <div className='activity-feed'>
            <button onClick={handleCalls}>Show Activity </button>
            <button onClick={handleArchives}>Show archive</button>
            <ul>
                <Display calls={callsList} value={toggleFeed}/>
            </ul>
        </div>
    )
}

export default ActivityFeed;
