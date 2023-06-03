import Authorized from '../../../hoc-middlewares/Authorized';
const Home = () =>{
    return <div>Home</div>
}

export default Authorized(Home)