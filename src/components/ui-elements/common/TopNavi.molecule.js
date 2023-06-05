import { HtmlButton } from '../form/button/HtmlButton.atom';
import { Icon,faBars,faXmark } from './Icon.atom';
import { AutocompleteWrapper } from '../form/input-box/AutocompleteWrapper.molecule';
import { emptyFunction } from '../../../config/defaultProps.config';

const TopNavi = ({
    toggleStatus=false,
    onToggle=emptyFunction
}) =>{

    return (
        <nav className="fixed top-0 left-0 sm:left-[200px] w-full sm:w-[calc(100%-200px)] z-30 bg-white border-gray-200 dark:bg-gray-900 h-[4.5rem] md:px-12 px-4 py-4 flex shadow-lg justify-between">
            <HtmlButton 
                className="inline-flex items-center sm:hidden focus:outline-none !text-black"  
                btnText={<Icon icon={toggleStatus?faXmark:faBars} className='w-6 h-6'/>} 
                onClick={()=>onToggle()}
            />
            <AutocompleteWrapper className="hidden sm:flex" />
            <div className="h-full sm:hidden">
                <img className="h-full" src="https://upload.wikimedia.org/wikipedia/commons/2/2c/OneWeb_Logo.png" alt="logo"/>
            </div> 
            <div className="h-full flex row items-center">
                <span className="mr-3 sm:flex hidden">Nisal Madusanka</span>  
                <img className="w-10 h-10 rounded-full" src="https://img.freepik.com/premium-vector/female-user-profile-avatar-is-woman-character-screen-saver-with-emotions_505620-617.jpg" alt="logo"/>
            </div>
        </nav>
    )
}

export {
    TopNavi
}