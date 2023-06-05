import { useState } from 'react';

import { BaseTemplate } from './Base.template';
import { SideMenu } from '../common/SideMenu.molecule';
import { TopNavi } from '../common/TopNavi.molecule';


const LightMoodTemplate = ({
    children=null
}) => {
    const [toggleState,setToggle] = useState(false);
    return (
        <BaseTemplate>
            <div className="flex bg-gray-200 w-screen h-fit">
                <SideMenu 
                    toggleState={toggleState}
                />
                <div className="sm:ml-[200px]">
                    <TopNavi
                        toggleStatus={toggleState}
                        onToggle={()=>setToggle(!toggleState)}
                    />
                    <div className="p-4  rounded-lg mt-[72px]" data-testid="dashboard">
                        {children}
                    </div>
                </div>
            </div>
        </BaseTemplate>
    )
}

export {
    LightMoodTemplate
}