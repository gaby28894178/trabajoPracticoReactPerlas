import { useState } from 'react';
import './App.css';
import quotes from './data/prases.json';
import photos from './data/photos.json';
import getRandomNumber from './utils/getRandomNumber';
import Phrase from './components/Phrase';
import BtnPhrase from './components/BtnPhrase';

function App() {
  const indexRandom = getRandomNumber(quotes.length);
  const [phraseSelected, setPhraseSelected] = useState(quotes[indexRandom]);
  const [bgPhoto, setBgPhoto] = useState(photos[getRandomNumber(photos.length)]);

  const objstyle = { backgroundImage: `url(/imagenes/fondo${bgPhoto}.png)` };

  console.log(phraseSelected);

  return (
    <div style={objstyle}>
     <div className='cont'> 
     <h1>Tu Versiculos Del Dia</h1>
      <Phrase phraseSelected={phraseSelected} />
      <BtnPhrase setPhraseSelected={setPhraseSelected} setBgPhoto={setBgPhoto} />
     </div>
    </div>
  );
}

export default App;
