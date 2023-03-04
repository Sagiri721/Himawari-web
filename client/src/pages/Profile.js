import React from 'react';
import { getLoginData } from '../utils/CommonFunctions';
import { Link } from "react-router-dom"
import { roles } from "../index";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

function Profile() {

    const login = getLoginData();

    if (login == null) {

        return (
            <div>
                <h1>You have to login first</h1>
                <Link to="/Login">Try logging in here</Link>
            </div>
        );
    }

    return (
        <div className='user-page'>

            <div className="container">
                <div className="profile-header">
                    <div className="profile-img">
                        <img src={"user_images/" + login._id + ".webp"} width="200" alt="Profile Image" />
                    </div>
                    <div className='profile'>
                        <h3 className="user-name">{login.username}</h3>
                        <span> <FontAwesomeIcon icon={faLocationDot} /> {login.city == "" ? "From the sunflower land" : login.city}, </span>
                        <span>{login.country == "" ? "To the World" : login.country}.</span>
                        <p className={"style" + login.role}>{roles[login.role]}</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Profile;