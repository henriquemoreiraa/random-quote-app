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
      })  
  }, [])
  // console.log(quotes)

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

  // console.log(quotes.quote)

  return (
    <C.Container >
      <C.Box>
        <h2>{quotes.quote}</h2>
        <p>{quotes.author}</p>

        <button onClick={getRandomQuote}>New quote</button>

      </C.Box>
    </C.Container>
  );
}

export default App;
