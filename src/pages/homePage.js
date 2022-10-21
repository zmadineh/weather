import React, { useState } from 'react';
import axios from 'axios';
import Card from "../component/card/Card";
import Layout from "../component/layout/Layout";
import MainCardItem from "../component/main-card-item/MainCardItem";
import ContentBox from "../component/content-box/ContentBox";

function HomePage() {

    const [data, setData] = useState({})
    const [location, setLocation] = useState('')

    const [theme, setTheme] = useState('dark')

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=a3bbe5a4ed5e2782689eded17de83ad6`

    const searchLocation = () => {

        axios.get(url).then((response) => {
            setData(response.data)
            console.log(response.data)
        })
        setLocation('')
    }


    return (
        <div>
            <Layout theme={theme} setTheme={setTheme}>
                <Card theme={theme}>
                    <MainCardItem theme={theme}>
                        hello
                    </MainCardItem>

                    <div style={{display:"flex", flexDirection:"column", height: '100%', width: '100%', minHeight: '60vh'}}>
                        <ContentBox theme={theme}>
                            <div style={{display:"flex", justifyContent:'space-between'}}>
                                <div>title</div>
                                <div>value</div>
                            </div>
                            <div style={{display:"flex", justifyContent:'space-between'}}>
                                <div>title</div>
                                <div>value</div>
                            </div>
                            <div style={{display:"flex", justifyContent:'space-between'}}>
                                <div>title</div>
                                <div>value</div>
                            </div>
                            <div style={{display:"flex", justifyContent:'space-between'}}>
                                <div>title</div>
                                <div>value</div>
                            </div>
                        </ContentBox>
                        <div>
                            forcast box
                        </div>
                    </div>

                </Card>




                {/*<div className="search">*/}
                {/*    <input*/}
                {/*        defaultValue={location}*/}
                {/*        onChange={event => setLocation(event.target.value)}*/}
                {/*        placeholder='Enter Location'*/}
                {/*        type="text" />*/}
                {/*    <button onClick={searchLocation}> Enter </button>*/}
                {/*</div>*/}
                {/*<div className="container">*/}
                {/*    <div className="top">*/}
                {/*        <div className="location">*/}
                {/*            <p>{data.name}</p>*/}
                {/*        </div>*/}
                {/*        <div className="temp">*/}
                {/*            {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}*/}
                {/*        </div>*/}
                {/*        <div className="description">*/}
                {/*            {data.weather ? <p>{data.weather[0].main}</p> : null}*/}
                {/*        </div>*/}
                {/*    </div>*/}

                {/*    {data.name !== undefined &&*/}
                {/*        <div className="bottom">*/}
                {/*            <div className="feels">*/}
                {/*                {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°F</p> : null}*/}
                {/*                <p>Feels Like</p>*/}
                {/*            </div>*/}
                {/*            <div className="humidity">*/}
                {/*                {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}*/}
                {/*                <p>Humidity</p>*/}
                {/*            </div>*/}
                {/*            <div className="wind">*/}
                {/*                {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}*/}
                {/*                <p>Wind Speed</p>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    }*/}

                {/*</div>*/}
            </Layout>
        </div>
    );
}

export default HomePage;