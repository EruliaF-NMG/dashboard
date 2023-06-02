
const BaseTemplate = ({
    children=null,
    className=''
})=>{
    return (
        <div className={`bg-custom-gray-100 w-screen h-screen flex ${className}`}>
            {children}
        </div>
    )
}

export {
    BaseTemplate
}