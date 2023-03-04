import { fetchFromBody } from "../utils/CommonFunctions";

function Login() {

    const handleLogin = async (event) => {

        event.preventDefault();

        const user = document.getElementById("user").value;
        const pass = document.getElementById("pass").value;

        const response = await fetchFromBody("recordFromName", { name: user });

        if (response.length == 0) { alert("Invalid login credentials"); return }

        if (response[0].password == pass) {

            alert("Log in complete");
            localStorage.setItem("himawari-login", JSON.stringify(response[0]));
        } else {

            alert("Invalid login credentials");
        }
    };

    return (
        <div className="Login">
            <br />
            <h1 className="centered">Login</h1>
            <br />

            <form className="centered style-form" onSubmit={handleLogin}>
                <label for="">Username</label>
                <input type="text" id="user" />
                <label for="">Password</label>
                <input type="password" id="pass" />

                <input type="submit" value="Login" />
            </form>
        </div>
    );
}

export default Login;
