import React, { useState } from 'react';
import './Home.css';
import Fakedata from '../../Fakedata/FakeData';
import VolunteerData from '../VolunteerData/VolunteerData';
import '../Navbar/Navbar';


const Home = () => {
    const[serviceData, setServiceData] = useState(Fakedata);
    console.log(serviceData);

    return (
        <div>
            <h2 className="headline">I GROW BY PEOPLE HELPING IN NEED</h2>
            <div>
                <form className="form-inline justify-content-center" >
                    <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
            <div className= "container">
                <div className= "row">
                {
                    serviceData.map((data,index) => <VolunteerData data={data} key={index} ></VolunteerData> )
                }
                </div>
                
            </div>
        </div>
    );
};

export default Home;