import './App.css';
import "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faMessage, faQuestion, faStar } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="App">
      <div>
        <img src="logo.png" alt="logo" />

        <h2>Himawari2D Home Page</h2>
        <p>Himawari2D is a game engine project developed with Java envisioning a simple and intuitive development experience that compiles the best features from other famous game engines and creates a native Java alternative.</p>

        <button className='smallbtn'><FontAwesomeIcon icon={faStar} /> Get Started!</button>
        <button className='smallbtn'><FontAwesomeIcon icon={faInfoCircle} /> Help</button>

        <hr className="styled-rule" />
      </div>

      <h2>The project</h2>
      <a href="https://github.com/Sagiri721/Himawari-2d" class="fa fa-github"></a>
      <a href="#" class="fa fa-youtube"></a>
      <a href="https://twitter.com/Sagiri721_" class="fa fa-twitter"></a>
      <a href="#" class="fa fa-paypal"></a>
    </div>
  );
}

export default App;
