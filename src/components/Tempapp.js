import React, { useEffect, useState } from 'react';
import './css/style.css';


const Tempapp = () => {
    const [city, setcity] = useState(null);
    const [search, setsearch] = useState("");//here bydefault i can take mumbai value
    // b6991339751487f1f213ab564c7499a5
    // api.openweathermap.org/data/2.5/weather?q=pune&appid=b6991339751487f1f213ab564c7499a5

    useEffect(() => {
        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=b6991339751487f1f213ab564c7499a5`;
            const response = await fetch(url);
            //   console.log(response);
            const resjson = await response.json();
            console.log(resjson);

            setcity(resjson.main);


        }
        fetchApi();
    }, [search])


    return (
        <>
            <div className="box">
                <div className="inputData">
                    <input
                        placeHolder='Search here'
                        type="search"
                        // value={search}
                        className="inputfield"
                        onChange={(event) => {
                            //  event.target.value 
                            setsearch(event.target.value);
                        }} />
                </div>
                   
                   {/* we used here ternary operator if city name is found then and then below data show */}
                {!city ? (<p className="errorMsg">No data found</p>) :
                    <div>
                        <div className="info">
                            <h2 className="location">
                                <i className="fas fa-street-view"></i>{search}
                            </h2>
                            <h1 className="temp">
                                {/* 5.25°Cel */}
                                {city.temp}°Cel
                            </h1>
                            <h3 className="tempmin_max">
                                {/* Min : 5.25°Cel | Max : Min : 5.25°Cel */}
                              Max : {city.temp_max}°Cel | Max : {city.temp_min}°Cel
                            </h3>
                        </div>

                        <div className="wave-one"></div>
                        <div className="wave-two"></div>
                        <div className="wave-three"></div>

                    </div>

                }


            </div>
        </>
    );
};

export default Tempapp;