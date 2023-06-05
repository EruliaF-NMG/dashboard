import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faLock,faChartColumn, faBars, faSearch,faGear,faCartShopping,faXmark,faRightFromBracket } from '@fortawesome/free-solid-svg-icons'

const Icon=({
    icon={},
    id={},
    className=""
})=>{
    return <FontAwesomeIcon icon={icon} size='sm' className={className}/>
}

export {
    Icon,
    faUser,
    faLock,
    faChartColumn,
    faBars,
    faSearch,
    faGear,
    faCartShopping,
    faXmark,
    faRightFromBracket
}