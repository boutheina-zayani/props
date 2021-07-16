import Profile from './profile/profile.js';
import './App.css';

function App() {
  const handleName=(fullName)=>{
    alert(`${fullName}`)
  }
  return (
    <div className="App">
        <Profile   fullName="Boutheina Zayani" bio="future full stack js developer"  profession="web developer"  handleName={handleName} >
            <img src= "./hello.jpg" alt="img" />
        </Profile>
    </div>
  );
}

export default App;
