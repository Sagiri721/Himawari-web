import { faCode, faDownload, faFolder } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Download(){

    return(
        <div>
            <br />
            <h2>One folder installation</h2>
            <div className="content-tab">

                <h2> <FontAwesomeIcon icon={faCode} /> Get started right away! All you need is one folder</h2>
                <p>To start a himawari project, all you will ever need is one folder! But if you want to create a customizable project with your company's name and that will always have support everytime a new version comes out, it is recommended you create a project via the Project Manager on the HimawariSDK.</p>

            </div>
            <button className="smallbtn center"> <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon> Download now</button>
            <p>Or use git, up and running with one line of code!</p>
            <code>git clone https://github.com/Sagiri721/Himawari-2d.git</code> (Windows)

            <hr className="styled-rule" />
            <h2>Complete installation</h2>
            <p>For a whole installation of all features of the engine including, the framework itself, the SDK, the offline documentation and the web server for networking, use the <strong>Himawari Developer Package</strong> download, this will install the full SDK which is capable of creating new projects with the exact features you need for your game, as well as powerful tools to manager them, like a Room editor, Project editor, Object Wizard and many many more.</p>
        </div>
    );
}

export default Download;