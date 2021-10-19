import React from 'react';
import error from "../../Pages/Images/Error-404.png"
import { Link } from 'react-router-dom';
const NotFound = () => {
    return (
        <div>
            <img style={{ width: '100%' }} src={error} alt="" />
            <Link to="/"><button>Go Back</button>
            </Link>
        </div>
    );
};

export default NotFound;