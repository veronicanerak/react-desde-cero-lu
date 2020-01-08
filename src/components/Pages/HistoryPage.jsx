import React from "react"

const HistoryPage = ({ match, location, history }) => (
    <div>
    { 
        // JSON.stringify(match)
        // JSON.stringify(location)
        JSON.stringify(history)
    }
    </div>
)

export default HistoryPage