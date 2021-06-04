import React from 'react';
import './VolunteerData.css';
import { useHistory } from 'react-router-dom';

const VolunteerData = (props) => {
    //const showdata = props.data;
    //console.log(showdata);
    const{image,name, Id} = props.data;
    const history = useHistory();
    const addWork = (id) => {
        const url = `/add/${id}`
        history.push(url);

    }

  
    return (
            <div className="col-lg-3 col-md-6">
                <img src={image}  className="rounded" alt="" />
                <button onClick={() => addWork(Id)}type="button" className="btn btn-info click-button">{name}</button> 
                
            </div>
            
    
    );
};

export default VolunteerData;