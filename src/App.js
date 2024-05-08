import React, { useState, useEffect } from 'react';
import './App.css';
function App() {
  const [languages, setLanguages] = useState([]);
  const [from, setFrom] = useState('en'); // Default 'from' language
  const [to, setTo] = useState('es'); // Default 'to' language
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://google-translate1.p.rapidapi.com/language/translate/v2/languages', {
          method: 'GET',
          headers: {
            'x-rapidapi-key': '0bb92c99f5msh64e13e95e905d4ep1ebe05jsn5c857c85c624',
            'x-rapidapi-host': 'google-translate1.p.rapidapi.com',
            'Content-Type': 'application/json',
            'Accept-Encoding': 'application/gzip'
          }
        });
        const result = await response.json();
        setLanguages(result.data.languages);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const translate = async () => {
    try {
      const response = await fetch('https://google-translate1.p.rapidapi.com/language/translate/v2', {
        method: 'POST',
        headers: {
          'x-rapidapi-key': '0bb92c99f5msh64e13e95e905d4ep1ebe05jsn5c857c85c624',
          'x-rapidapi-host': 'google-translate1.p.rapidapi.com',
          'Content-Type': 'application/json',
          'Accept-Encoding': 'application/gzip'
        },
        body: JSON.stringify({
          q: input,
          format: '',
          target: to,
          source: from,
          model: ''
        })
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();
      console.log(result); // Log response for inspection
      if (result.data && result.data.translations && result.data.translations.length > 0) {
        setOutput(result.data.translations[0].translatedText);
      } else {
        setOutput('Translation not available');
      }
    } catch (error) {
      console.error(error);
      setOutput('Error occurred during translation');
    }
  };

  return (
    <div className="App">
      <div>
        From ({from}) :
        <select onChange={(e) => setFrom(e.target.value)}>
          {languages.map((language) => (
            <option key={language.language} value={language.language}>
              {language.language}
            </option>
          ))}
        </select>
        To ({to}) :
        <select onChange={(e) => setTo(e.target.value)}>
          {languages.map((language) => (
            <option key={language.language} value={language.language}>
              {language.language}
            </option>
          ))}
        </select>
      </div>
      <div>
        <textarea
          cols="50"
          rows="8"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></textarea>
      </div>
      <div>
        <textarea cols="50" rows="8" value={output}></textarea>
      </div>
      <div>
        <button onClick={translate}>Translate</button>
      </div>
    </div>
  );
}

export default App;
