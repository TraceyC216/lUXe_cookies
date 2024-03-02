import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from "axios";


export default function Info(){
    const {id} = useParams();
    const [info, setInfo] = useState({});
    const navigate = useNavigate();
    useEffect(() => {
        axios
        .get(`${process.env.REACT_APP_RENDER_URL || 'http://localhost:8000'}cookies/${id}/`)
        .then((response) => {
          setInfo(response.data);
          console.log(response.data,'this is the data');
        })
        .catch((error) => {
          console.log(error);
        });
        
    }, []);
    
    if(!info){
        return <h1>loading</h1>
    }
    return (
    <>
       <img className="infoImage" src={info.image} />
       <div className="infoText">
       <h4>{info.name}</h4> 
       <p>{info.description}</p>
       <p>Price: {info.price}</p>
       <button onClick={() => navigate(-1)} className='btn btn-primary'>Return to cookie page</button>
       </div>
    </>
    );
}