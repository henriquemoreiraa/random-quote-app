import { useState, useEffect } from 'react';
import './styles.css'
import * as C from './styles'

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
      author: Authorindex
    }))
  }


    const url = `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="${quotes.quote}" ${quotes.author}`
      
  

  console.log(AllQuotes)

  return (
    <C.Container >
      <C.Box>
        <h2>{quotes.quote}</h2>
        <p>{quotes.author}</p>

        <a href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="${quotes.quote}" - ${quotes.author}`} target="_blank">
          <button>Tweet this quote</button>
        </a>
          <button onClick={getRandomQuote}>New quote</button>

      </C.Box>
    </C.Container>
  );
}

export default App;
