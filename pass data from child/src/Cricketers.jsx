import PropTypes from "prop-types"
import { useState } from "react"

function Cricketers({passFn}) {
    
    passFn('heyy')

    return (<h1>Hey</h1>)
}

// Cricketers.propTypes = {
//     name: PropTypes.string,
//     role: PropTypes.string,
//     position: PropTypes.number,
//     isCapped: PropTypes.bool,
// }

// Cricketers.defaultProps ={
//     name: 'Player',
//     role: 'Unknown',
//     position : 'Unknown',
//     isCapped : false
// }

export default Cricketers