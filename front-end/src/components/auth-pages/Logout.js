import React,{useEffect,useState} from "react";
import { Link } from "react-router-dom";



function Logout () {
    
        localStorage.removeItem("token");
        localStorage.removeItem("user");
      


   
        return (
            <div className='container user-select-none'>
                <div className='my-5 logged-out d-flex justify-content-center user-select-none'>
                    <div className='d-flex flex-column align-items-center'>
                        <div className='log-page-title'>
                            {/* <TitleSVG /> */}
                        </div>
                        <h5 className='mt-3 mb-4 grey'>
                            You've been logged out!
                        </h5>
                        <Link to='/' className='btn start-btn'>
                            Go to Login Page
                        </Link>
                    </div>
                </div>
                <div className='logout-bg'></div>
            </div>
        );
    
}

export default Logout;
