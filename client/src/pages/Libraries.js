import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { InsertInto } from "../utils/CommonFunctions";

const login = JSON.parse(localStorage.getItem("himawari-login"));

function Libraries() {

    const [libraries, setLibraries] = useState([]);
    const [add, setAdd] = useState("");

    useEffect(() => {

        async function getLibs() {

            const response = await fetch("http://localhost:5000/recordLibraries");
            const ans = await response.json();

            let temp = [];
            for (let index = 0; index < ans.length; index++) {
                const element = ans[index];

                temp.push(<Library name={element.name} desc={element.desc} uploader={element.uploader} time={element.time} git={element.git} maven={element.maven} gradle={element.gradle} />);
            }

            setLibraries(temp);
        }

        getLibs();

    }, []);

    return (
        <div className="library">

            <h1>Libraries</h1>
            <hr />
            <button onClick={() => {

                if (add == "") {
                    setAdd(<AddLib></AddLib>);
                } else setAdd("");

            }} className='smallbtn' type="button"><FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon></button>
            {add}

            <br />
            {libraries}

        </div>
    );
}

function AddLib() {

    return (
        <div>
            <br />
            <h2>Add Library</h2>
            <form onSubmit={async (event) => {

                event.preventDefault();

                const ans = await InsertInto(JSON.stringify(
                    {
                        collection: "library",
                        data: {
                            "name": document.getElementById("name").value,
                            "desc": document.getElementById("desc").value,
                            "time": new Date().toLocaleDateString(),
                            "uploader": login.username,
                            "gradle": document.getElementById("gradle").value,
                            "maven": document.getElementById("maven").value,
                            "git": document.getElementById("git").value
                        }
                    }))
                alert(ans.ok);
            }}>
                <label for="">Name</label>
                <input type="text" id="name" />

                <label for="">Description</label>
                <input type="text" id="desc" />

                <label for="">GitHub link</label>
                <input type="text" id="git" />

                <label for="">Maven dependency</label>
                <input type="text" id="maven" />

                <label for="">Gradle dependency</label>
                <input type="text" id="gradle" />

                <input type="submit" name="" value="Submit" />
            </form>

            <hr className="styled-rule" />
        </div>
    );
}

function Library(props) {

    const maven = props.maven;
    const gradle = props.gradle;

    return (
        <div className="lib-card">

            <h3 className="lib-name">{props.name}</h3>
            <p><strong>Uploaded by {props.uploader} at {props.time}</strong></p>
            <p>Description: {props.desc}</p>

            <br />
            <hr />
            <h4>Links</h4>
            <p>Github <a href={props.git === undefined ? "" : props.git}>{props.git === undefined ? "none" : props.git}</a></p>
            <hr />

            <div>{maven ? <img className="icon" src="res/maven.svg" alt="" /> : ""}</div>
            <div>{gradle ? <img className="icon" src="res/gradle.png" alt="" /> : ""}</div>
        </div>
    );
}

export default Libraries;