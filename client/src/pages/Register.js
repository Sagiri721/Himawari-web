import React from "react";
import { ReCAPTCHA } from "react-google-recaptcha";

function Register() {

    const handleLogin = async (event) => {

        event.preventDefault();

        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const name = document.getElementById("firstName").value;
        const surname = document.getElementById("lastName").value;

        const pass = document.getElementById("password1").value;
        const pass2 = document.getElementById("password2").value;

        const info = document.getElementById("info").checked;

        if (pass !== pass2) {

            alert("Passwords do not match");
            return;
        }

        const data = {
            username: username,
            password: pass,
            role: 0,
            email: email,
            firstName: name,
            lastName: surname,
            inNewsLetter: info
        }

        //Add login
        const response = await fetch("http://localhost:5000/record/addLogin", {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });

        if (response.ok) {

            alert("Registered successfully");
        }
    };

    return (
        <div className="Login">
            <br />
            <h1 className="centered">Register</h1>
            <br />

            <form className="centered style-form" onSubmit={handleLogin}>
                <label for="">Username</label>
                <input type="text" id="username" required />

                <label for="">E-mail</label>
                <input type="text" id="email" required />

                <div className="flexed">
                    <label for="">First Name</label>
                    <label for="">Last Name</label>
                </div>

                <div className="flexed">
                    <input type="text" id="firstName" required />
                    <input type="text" id="lastName" required />
                </div>

                <hr className="styled-rule" />
                <label for="">Password</label>
                <input type="password" id="password1" required />

                <label for="">Confirm Password</label>
                <input type="password" id="password2" required />

                <hr className="styled-rule" />
                <input type="checkbox" name="terms" id="terms" value="" required />
                <label for="terms"> I accept the terms and conditions</label>
                <br /><br />
                <input type="checkbox" name="terms" id="info" value="" />
                <label for="terms"> I want to receive information and news through e-mail</label>
                <br /><br />

                <ReCAPTCHA sitekey="6Lfpi10jAAAAAHDggXbWX0QDhAtHhNV8_SD7lj0A" render="explicit" />

                <input type="submit" value="Register" />
            </form>
        </div>
    );
}

export default Register;
