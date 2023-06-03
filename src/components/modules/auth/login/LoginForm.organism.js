import { Icon,faUser,faLock } from '../../../ui-elements/common/Icon.atom';
import { Card } from '../../../ui-elements/common/Card.atom';
import { Fragment } from 'react';

import { InputBoxWithState } from '../../../ui-elements/form/input-box/InputBoxWithState.molecule';
import { CheckBoxWithState } from '../../../ui-elements/form/checkbox/CheckBoxWithState.molecule';
import { htmlInputTypes } from '../../../../config/defaultProps.config';
import { FormWrapper } from '../../../ui-elements/form/form-wrapper/FormWrapper.atom';
import { ButtonWithState } from '../../../ui-elements/form/button/ButtonWithState.molecule';
import { loginUser } from '../../../../helpers/core-actions/auth.action';
import { useSelector } from 'react-redux';

const formKey='loginFromData';

const LoginForm = () =>{
    const auth = useSelector(state => state.authState);
    console.log(auth,"======");
    return(
    <Card className='w-[45%] flex-col lg:flex-row'>
        <FormWrapper 
            className="lg:w-2/4 w-full p-9"
            setGroupName={formKey}
            setFormObject={{
                'userName':'',
                'password':''
            }}
        >
            <InputBoxWithState 
                placeholder='UserName' 
                iconElement={<Icon icon={faUser}/>} 
                name='userName'
                setGroupName={formKey}
            />
            <InputBoxWithState 
                type={htmlInputTypes.PASSWORD} 
                placeholder='Password' 
                iconElement={<Icon icon={faLock}/>} 
                name='password'
                setGroupName={formKey}
            />
            <CheckBoxWithState
                setGroupName={formKey}
                labelElement={<Fragment>Remember me <span className="text-purple-700">Forgot Password</span></Fragment>}
            />
            <div className="mb-3.5">
                <ButtonWithState 
                    btnText='Login' 
                    className='bg-purple-700 w-full' 
                    setGroupName={formKey}
                    validateObject={{
                        fields:{
                            'userName':'UserName',
                            'password':'Password',
                        },
                        rules:{
                            'userName':'required|min:3',
                            'password':'required|min:3'
                        }
                    }}
                    onSubmitAction={(formObject)=>loginUser(formObject)}
                />
                Or <span className="text-purple-700">register now!</span>
            </div>
        </FormWrapper>
        <div className="lg:w-2/4 w-full flex justify-center p-9 items-center">
            <img className="h-[172px]" src="/assets/keyIllustration.png" alt="logo"/>
        </div>
    </Card>
    )
}

export {
    LoginForm
}