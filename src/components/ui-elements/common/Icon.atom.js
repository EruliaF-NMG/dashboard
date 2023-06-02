import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faLock } from '@fortawesome/free-solid-svg-icons'

const Icon=({
    icon={}
})=>{
    return <FontAwesomeIcon icon={icon} size='sm'/>
}

export {
    Icon,
    faUser,
    faLock
}