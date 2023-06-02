import { BaseTemplate } from '../../../ui-elements/templates/Base.template';
import { LoginForm } from './LoginForm.organism';

const Login = () =>{
    return (
        <BaseTemplate className='items-center justify-center'>
            <LoginForm/>
        </BaseTemplate>
    )
}

export default Login;