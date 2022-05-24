import { useState, useEffect } from 'react';
import './styles.css'
import * as C from './styles'
import { TwitterIcon } from './svgs/svgs'

type State = {
  quote: string;
  author: string;
}

function App() {
  const [AllQuotes, setAllQuotes] = useState<State[]>([])
  const [quotes, setQuotes] = useState<State>({quote: '', author: ''})
 
  useEffect(() => { 
    fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
    .then(response => response.json())
    .then(data => {
      setAllQuotes(data.quotes)
      const randomNumber = Math.floor(Math.random() * 100)
      setQuotes(data.quotes[randomNumber])
      })  
  }, [])

  const getRandomQuote = () => {
    const randomNumber = Math.floor(Math.random() * AllQuotes.length)
    const Quoteindex = AllQuotes[randomNumber].quote
    const Authorindex = AllQuotes[randomNumber].author
    setQuotes(prevQuote => ({
      ...prevQuote,
      quote: Quoteindex,
      author: Authorindex,
    }))
  }
  
  const colors: string[] = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857',
  ];

  const color = Math.floor(Math.random() * colors.length);
  const randomColor = colors[color]

  return (
    <C.Container color={randomColor}>
      <C.Box color={randomColor}>
        
        <h1>{quotes.quote}</h1>

        <p>-{quotes.author}</p>

        <div className='buttons'>
          <a  href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="${quotes.quote}" - ${quotes.author}`} target="_blank">
            <button className='tweetButton'> <TwitterIcon /></button>
          </a>

            <button  className='nextButton' onClick={getRandomQuote}>New quote</button>
        </div>

      </C.Box>
    </C.Container>
  );
}

export default App;
