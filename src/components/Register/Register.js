import React, {useContext} from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../App';
import './Register.css';

const Register = () => {
    const[loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);
    return (
        < form className = "ship-form" onSubmit = { handleSubmit(onSubmit) } >
           < input name = "name" defaultValue= {loggedInUser.name} ref = { register({ required: true }) } placeholder="Enter your name"/>                    
           { errors.name && <span className="error">Name is required</span>}
           < input name = "email" defaultValue= {loggedInUser.email} ref = { register({ required: true }) } placeholder="Enter your email"/>                    
           { errors.email&& <span className="error">Email is required</span> }
           < input name = "date" ref = { register({ required: true }) } placeholder="Date"/>
           { errors.date && <span className="error">Date is required</span> }
           < input name = "description" ref = { register({ required: true }) } placeholder="Description"/>                    
           { errors.description && <span className="error">Description number is required</span> }
           < input name = "work_name" ref = { register({ required: true }) }/>                    
           { errors.work_name && <span className="error">Description number is required</span> }
        <input type="submit" />
    </form > 
      
    );
};

export default Register;