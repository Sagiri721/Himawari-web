import './App.css';
import "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faMessage, faQuestion, faStar, faWindowRestore } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function App() {
  const nav = useNavigate();
  return (
    <div className="App">
      <div>
        <img src="logo.png" alt="logo" />

        <h2>Himawari2D Home Page</h2>
        <p>Himawari2D is a game engine project developed with Java envisioning a simple and intuitive development experience that compiles the best features from other famous game engines and creates a native Java alternative.</p>

        <button  onClick={() => {

          nav("/Downloads");
          }} className='smallbtn'><FontAwesomeIcon icon={faStar} /> Get Started!</button>
        <button onClick={() => {

          nav("/Forum");
        }} className='smallbtn'><FontAwesomeIcon icon={faInfoCircle} /> Help</button>

        <hr className="styled-rule" />
      </div>

      <h2>The project</h2>
      <a href="https://github.com/Sagiri721/Himawari-2d" class="fa fa-github"></a>
      <a href="#" class="fa fa-youtube"></a>
      <a href="https://twitter.com/Sagiri721_" class="fa fa-twitter"></a>
      
      <hr className="styled-rule" />
      <br />
      <h2>Learning resources</h2>
      <br />

      <div className='cards'>

        <a className='card'>
          <h2>FAQ</h2>
          <p>Frequently Asked Questions</p>
        </a>

        <a href='https://sagiri721.github.io/Himawari-Docs/' className='card'>
          <h2>HimawariDocs</h2>
          <p>Reference on most componentes of the project</p>
        </a>

        <a className='card'>
          <h2>CheatSheet</h2>
          <p>Cheatsheet with the most common functions</p>
        </a>

        <a href='https://github.com/TiagoBarros721/Himawari-Templates' className='card'>
          <h2>Templates</h2>
          <p>Games made with Himawari2D</p>
        </a>
        
      </div>

      <br />
      <br />
      <br />
    </div>

  );
}

export default App;
