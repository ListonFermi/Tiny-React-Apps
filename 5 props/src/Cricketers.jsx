import PropTypes from "prop-types"

function Cricketers(props) {
    return (
        <div className="card">
            <h2 className="cardTitle">{props.name}</h2>
            <p className="cardText">{props.role}</p>
            <p className="cardText">Position : {props.position}</p>
            <p className="cardText">{props.isCapped ? "Capped" : "Uncapped"}</p>
        </div>
    )
}

Cricketers.propTypes = {
    name: PropTypes.string,
    role: PropTypes.string,
    position: PropTypes.number,
    isCapped: PropTypes.bool,
}

Cricketers.defaultProps ={
    name: 'Player',
    role: 'Unknown',
    position : 'Unknown',
    isCapped : false
}

export default Cricketers