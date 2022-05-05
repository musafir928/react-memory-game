import { useState } from 'react/cjs/react.production.min'
import './App.css'

const cardImages = [
  {"src": "/img/helmet-1.img"},
  {"src": "/img/potion-1.img"},
  {"src": "/img/ring-1.img"},
  {"src": "/img/scroll-1.img"},
  {"src": "/img/shield-1.img"},
  {"src": "/img/sword-1.img"}
]

function App() {
const [cards, setCards] = useState([])
const [turns, setTurns] = useState(0)
  
  // shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
    .sort(()=>Math.random()-0.5)
    .map((card)=>({...card, id: Math.random()}))

    setCards(shuffledCards)
    setCards(0)
  }

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>
    </div>
  );
}

export default App