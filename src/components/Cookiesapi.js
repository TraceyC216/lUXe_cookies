import React, { useState, useEffect} from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';

function CookieApi({setCookies}) {
    

    useEffect(() => {
        axios.get('http://localhost:8000/')
        .then(response => {
            setCookies(response.data);
            console.log(response)
        })
        .catch(error => {
            console.log(error);
        });
    }, []
    );

    

return (
    <>
       
    </>
);
}

export default CookieApi;