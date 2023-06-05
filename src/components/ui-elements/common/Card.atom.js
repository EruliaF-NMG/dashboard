import PropTypes from 'prop-types';

const Card =({
    className="",
    children=null
})=>{
    return (
        <div className={`bg-white rounded-lg shadow-sm flex ${className}`}>
            {children}
        </div>
    )
}

Card.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
}

export {
    Card
}