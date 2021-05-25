import React,{ useEffect} from 'react';
import './dash.css';
import {initData} from './data';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import Axios from "axios";


function Dash(){
    useEffect(() => {
        Axios.get(`http://localhost:8001/question`, {
            headers: {
                "x-access-token": localStorage.getItem("token"),
            },
        }).then((response) => {
            console.log(response);
            // console.log(response.data);
        })
        .catch((err)=>{
            console.log(err);
        });
    }, []);
    

    return (

        <div className="dash-main">
            <h5>Discover new topics</h5>
            
            <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
            >
                <Masonry>
                {initData.map((item) => {
                    return(

                    <div className="qst-card">
                        <div className="qst-card-in">
                            <div className="qst">{item.qst}</div>
                            <div className="qst-name">
                                <div>
                                    <figure className='person-icon'></figure>
                                </div>
                                <div>
                                    <div>{item.name}</div>
                                    <div style={{fontSize:10,color:"gray"}}>from{" "} 
                                        <span style={{color:"#06F2B0"}}>
                                            {item.category}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="qst-ans">{item.desc}</div>
                        </div>
                        <div className="vote-bar">vote bar</div>
                    </div>
                    )

                })}
                </Masonry>
            </ResponsiveMasonry>      
        </div>
    );
}


export default Dash;