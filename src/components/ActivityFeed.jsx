import React from 'react'
import ActivityDetail from './ActivityDetail.jsx'
import { useState } from 'react'
import Button from '@material-ui/core/Button';


// Connects to the API and fetches all the JSON data 
const getCalls = () => fetch("https://aircall-job.herokuapp.com/activities")
                        .then((response) => response.json())
                        .then((data) => {return data;});



// There's probably a better way to do this but I tried
const ArchiveButton = ({call}) => {
    return (
    <Button variant='outlined' size='' onClick={archiveCall(call.id)}>Archive</Button>
    )

}

// TODO: Make it functional
const archiveCall = (callID) => {
    const handle = () => {

    }
    return handle
}


const Display = ({calls, value}) => {
    if (value === true) {
        return (
            <div>
                {/*
                The filter method filters out all the calls that are unarchived and then the map converts each 
                call into jsx fragment
                */}
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
    const [ callsList, setCallsList ] = useState([])    // Main call list 
    const [toggleFeed, setToggleFeed] = useState(true)  // Used to toggle between archived and unarchived calls



    // Handlers for the buttons 
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
            <Button color='primary' variant='outlined' onClick={handleCalls}>Show Activity </Button>
            <Button color='primary' variant='outlined' onClick={handleArchives}>Show archive</Button>
            <ul>
                <Display calls={callsList} value={toggleFeed}/>
            </ul>
        </div>
    )
}

export default ActivityFeed;
