
import './App.css';
import Profile from './Components/Profile';

function App() {
  return (
    <div className="App">
    <h1>WorkShop Using Props</h1>
    <Profile title="Cs Go" img="https://static1.millenium.org/articles/5/40/01/25/@/1671783-csgo-article_cover_bd-1.jpg" para="Let's make this right as rain."/>
    <Profile title="Valorant" img="https://wallpapers.com/images/featured/305kescxw5dpup7y.jpg" para="Continue to overwhelm them."/>
    </div>
  );
}

export default App;
