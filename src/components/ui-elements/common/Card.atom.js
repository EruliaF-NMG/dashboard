
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

export {
    Card
}