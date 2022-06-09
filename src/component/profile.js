import { Link } from "react-router-dom";
import Dashbord from "./dashbord";
import MyComponent from './button';
import Car from './classCom'
const Profile = () => {
    return (
        <>
            <Link to="/dashbord" >Dashbord</Link>
            <div>i am profile</div>
            <Dashbord
                name='Adila'
                classa="1"
            />
            <MyComponent/>
            <Car/>
            
        </>
       
    )
    

};
export default Profile 