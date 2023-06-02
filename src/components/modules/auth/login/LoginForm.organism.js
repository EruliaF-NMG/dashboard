import { Icon,faUser,faLock } from '../../../ui-elements/common/Icon.atom';
import { Card } from '../../../ui-elements/common/Card.atom';
import { Fragment } from 'react';

import { InputBox } from '../../../ui-elements/form/input-box/InputBox.molecule';
import { CheckBox } from '../../../ui-elements/form/checkbox/CheckBox.molecule';
import { htmlInputTypes } from '../../../../config/defaultProps.config';


const LoginForm = () =>{
    return(
    <Card className='w-[45%] flex-col lg:flex-row'>
        <div className="lg:w-2/4 w-full p-9">
            <InputBox placeholder='UserName' iconElement={<Icon icon={faUser}/>} />
            <InputBox type={htmlInputTypes.PASSWORD} placeholder='Password' iconElement={<Icon icon={faLock}/>} />
            <CheckBox
                labelElement={<Fragment>Remember me <span className="text-purple-700">Forgot Password</span></Fragment>}
            />
            <div className="mb-3.5">
                <button className="bg-purple-700 w-full text-white shadow-sm rounded-sm p-1">Login</button>
                Or <span className="text-purple-700">register now!</span>
            </div>
        </div>
        <div className="lg:w-2/4 w-full flex justify-center p-9 items-center">
            <img className="h-[172px]" src="/assets/keyIllustration.png" alt="logo"/>
        </div>
    </Card>
    )
}

export {
    LoginForm
}