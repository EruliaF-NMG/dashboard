import { BaseTemplate } from '../../../ui-elements/templates/Base.template';
import { LoginForm } from './LoginForm.organism';
import Guest from '../../../hoc-middlewares/Guest';

const Login = () =>{
    return (
        <BaseTemplate className='items-center justify-center'>
            <LoginForm/>
        </BaseTemplate>
    )
}

export default Guest(Login);