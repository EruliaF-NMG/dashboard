import { NavLink } from 'react-router-dom';
import { Icon, faChartColumn,faGear,faUser,faCartShopping,faRightFromBracket } from './Icon.atom';
import { AutocompleteWrapper } from '../../ui-elements/form/input-box/AutocompleteWrapper.molecule';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../../helpers/core-actions/auth.action';


const SideMenu=({
    toggleState=false
})=>{

    const dispatch = useDispatch();

    return (
        <aside className={`fixed top-0 left-0 z-40 sm:w-[200px] w-full h-screen transition-transform sm:translate-x-0 mt-[72px] sm:mt-0 ${toggleState?'transform-none':'-translate-x-full'} `}>
            <div className="h-full overflow-y-auto bg-gray-50 dark:bg-gray-800">
                <div className="h-[4.5rem] w-full p-2 justify-center items-center shadow-sm hidden sm:flex bg-custom-gray-600">
                    <img className="h-10" src="https://upload.wikimedia.org/wikipedia/commons/2/2c/OneWeb_Logo.png" alt="logo"/>
                </div> 
                <AutocompleteWrapper className="flex sm:hidden w-full p-8" formWrapperStyle="w-full" />
                <ul className="font-medium">
                    <li className="px-8 sm:p-3 p-3 border-b border-gray-300">
                        <NavLink 
                            to="/dashboard" 
                            className={({isActive}) => isActive ? 'flex items-center text-custom-purple-500' : 'flex items-center text-gray-900'}   
                        >
                            <Icon icon={faChartColumn} />
                            <span className="ml-3">Dashboard</span>
                        </NavLink>
                    </li>
                    <li className="px-8 sm:p-3 p-3 border-b border-gray-300">
                        <NavLink to="/order" className="flex items-center text-gray-900">
                            <Icon icon={faCartShopping} />
                            <span className="ml-3">Order</span>
                        </NavLink>
                    </li>
                    <li className="px-8 sm:p-3 p-3 border-b border-gray-300">
                        <NavLink to="/account" className="flex items-center text-gray-900">
                            <Icon icon={faUser} />
                            <span className="ml-3">Account</span>
                        </NavLink>
                    </li>
                    <li className="px-8 sm:p-3 p-3 border-b border-gray-300">
                        <NavLink to="/settings" className="flex items-center text-gray-900">
                            <Icon icon={faGear} />
                            <span className="ml-3">Settings</span>
                        </NavLink>
                    </li>
                    <li className="px-8 sm:p-3 p-3 border-b border-gray-300" onClick={()=>dispatch(logoutUser())}>
                        <div className="flex items-center text-gray-900">
                            <Icon icon={faRightFromBracket} />
                            <span className="ml-3">Logout</span>
                        </div>
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export {
    SideMenu
}