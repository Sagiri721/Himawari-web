import { faCertificate, faDriversLicense } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function License() {


    return (
        <div className="library">

            <h1>License</h1>
            <hr />
            <br />

            <h2>Used resources</h2>

            <p>Love Kitchen font by <a href="https://www.1001fonts.com/users/levincreative/">levincreative</a></p>
            <p>FontAwesome icons by <a href="https://fontawesome.com/">Font awesome</a></p>
            <p>Flaticon flags by <a href="https://www.flaticon.com/">Flaticon</a></p>

            <br />

            <div className="content-tab">
                <h2><FontAwesomeIcon icon={faCertificate} /> MIT license</h2>
                <p>
                    MIT License

                    Copyright (c) 2023 Tiago de Barros Simões
                    <br /><br />
                    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
                    <br /><br />
                    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
                    <br /><br />
                    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
                </p>
            </div>

            <br />

            <h2>Setting</h2>
            <p className="centered-icon-text"> <img width={40} src="res/united-kingdom.png" alt="" /> Himawari2D was developed as a PAP (Professional Aptitude Project) under the tutoring of Rui Miguel Loureiro Baptista for the instituition of: Colégio de Gaia</p>
            <p className="centered-icon-text"> <img width={40} src="res/portugal.png" alt="" /> Himawari2D foi desenvolvido como uma PAP (Projecto de Aptidão Profissional) sobre a tutorial de Rui Miguel Loureiro Baptista para a instituição: Colégio de Gaia</p>

            <img className="footer" src="res/colgaia-footer.png" alt="footer" />
        </div>
    );
}

export default License;