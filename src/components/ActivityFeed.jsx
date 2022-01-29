import React from 'react'
import AcitivityDetail from './ActivityDetail.jsx'
import { useState } from 'react'


const getCalls = () => fetch("https://aircall-job.herokuapp.com/activities")
                        .then((response) => response.json())
                        .then((data) => {return data;});



const ActivityFeed = () => {
    const [ callsList, setCallsList ] = useState([])

    // async function handleFeed() {
    //     let response = await fetch("https://aircall-job.herokuapp.com/activities")
    //     const data = await response.json()
    //     setCallsList(data)
    // }

    const handleCalls = () => {
        getCalls().then((data) => setCallsList(data));
    }
    
    return (
        <div className='activity-feed'>
            <button onClick={handleCalls}>Activity </button>
            <ul>
                {callsList.filter(call => !call.is_archived).map(call => 
                    <AcitivityDetail key={call.id} call={call}/>
                )}
            </ul>
        </div>
    )
}

export default ActivityFeed;
