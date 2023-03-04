import { faCat, faCloud, faDesktop, faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Docs() {

    return (
        <div>
            <h1>Documentation</h1>
            <hr />

            <br />
            <p>Welcome to the Himawari documentation online repository</p>

            <div className="content-tab">
                <h2><FontAwesomeIcon icon={faDesktop} /> Offline documentation</h2>
                <p>
                    Download the offline compiled HTML documentation help file here.
                    <br />
                    <a href="https://mega.nz/file/is812ThD#ZQoVaw8dF_rf-zl5_ybi8ehOEoHDmQqplY5ezzbr2tM">Mega download</a>
                </p>

            </div>

            <div className="content-tab">
                <h2><FontAwesomeIcon icon={faCloud} /> Online documentation</h2>
                <p>
                    All the documentation is available online in this url.
                    <br />
                    <a href="https://sagiri721.github.io/Himawari-Docs/">Github.io link</a>
                </p>

            </div>

            <div className="content-tab">
                <h2><FontAwesomeIcon icon={faCat} /> Mardown documentation</h2>
                <p>
                    There is a GitHub repository with all the documentation in markdown format. It is set up to be compatible with the Obsidian editor.
                    <br />
                    <a href="https://github.com/Sagiri721/Himawari-Docs">Repository</a><br />
                    <a href="https://obsidian.md/">More about Obsidian</a>
                </p>

            </div>

            <p>Documentation is incomplete? Ideias on how to improve? Write a github issue <a href="https://github.com/Sagiri721/Himawari-Docs/issues/new">here</a></p>
        </div>
    );
}

export default Docs;