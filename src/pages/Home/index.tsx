import './styles.css';
import { ReactComponent as MainImage } from '../../assets/images/main-image.svg';
import Login from './Login';
const Home = () => {
  return (
    <div className="base-card home-card">
      <div className="home-container">
        <div className="home-content-container">
          <div>
            <h1>Avalie Filmes</h1>
            <p>Diga o que você achou do seu filme favorito</p>
          </div>
          <div className="home-image-container">
            <MainImage />
          </div>
        </div>
      </div>
      <div className="login"><Login /></div>
    </div>
  );
};

export default Home;
