import React, {useState} from "react";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Nav from "./components/Navbar/Navbar"
import Game from './components/Game/Game'

function App() {
  const [colors, setColors] = useState(()=>['red', 'blue',  'yellow',
    'green',  'purple',  'black',  'grey',  'orange' ].sort((a,b)=> Math.random()-.5))
  return (
    <div>
      <Nav/>
  <Jumbotron/>
  <Game data={colors} setColors={setColors}/>
  </div>);

}

export default App;