import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faLock,faChartColumn, faBars, faSearch,faGear,faCartShopping,faXmark } from '@fortawesome/free-solid-svg-icons'

const Icon=({
    icon={},
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
    faXmark
}