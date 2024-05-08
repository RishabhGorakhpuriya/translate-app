// import './App.css';
// import { useEffect, useState } from 'react';
// import axios from 'axios';

// function App() {
//   const [options, setOptions] = useState([]);
//   const [from, setFrom] = useState('en');
//   const [input, setInput] = useState('');
//   const [to, setTo] = useState('en');
//   const [output, setOutput] = useState('');

//   const translate = () => {
//     const params = new URLSearchParams();
//     params.append('q', input);
//     params.append('target', to);
//     params.append('source', from);
//     params.append('api_key', 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx');

//     axios.post('https://libretranslate.com/translate', params, {
//       headers: {
//         'accept': 'application/json',
//         'Content-Type': 'application/x-www-form-urlencoded',
//       },
//     }).then(res => {
//       console.log(res.data)
//       setOutput(res.data.translatedText)
//     }).catch(error => {
//       console.error('Error translating:', error);
//       // Display an informative message to the user based on the error code (e.g., "API key invalid" or "Rate limit exceeded")
//     });

//   };

//   useEffect(() => {
//     axios
//       .get('https://libretranslate.com/languages', {
//         headers: { 'accept': 'application/json' },
//       })
//       .then((res) => {
//         console.log(res.data);
//         setOptions(res.data);
//       }).catch(error => {
//         console.error('Error translating:', error);
//         // Display an informative message to the user based on the error code (e.g., "API key invalid" or "Rate limit exceeded")
//       });
//   }, []);

//   return (
//     <div className="App">
//       <div>
//         From ({from}) :
//         <select onChange={(e) => setFrom(e.target.value)}>
//           {options.map((opt) => (
//             <option key={opt.code} value={opt.code}>
//               {opt.name}
//             </option>
//           ))}
//         </select>
//         To ({to}) :
//         <select onChange={(e) => setTo(e.target.value)}>
//           {options.map((opt) => (
//             <option key={opt.code} value={opt.code}>
//               {opt.name}
//             </option>
//           ))}
//         </select>
//       </div>
//       <div>
//         <textarea
//           cols="50"
//           rows="8"
//           value={input}
//           onInput={(e) => setInput(e.target.value)}
//         ></textarea>
//       </div>
//       <div>
//         <textarea cols="50" rows="8" value={output}></textarea>
//       </div>
//       <div>
//         <button onClick={e => translate()}>Translate</button>
//       </div>
//     </div>
//   );
// }

// export default App;
// import './App.css';
// import { useEffect, useState } from 'react';

// function App() {
//   const [option, setOption] = useState([]);
//   const [from, setFrom] = useState('en');
//   const [input, setInput] = useState('');
//   const [to, setTo] = useState('en');
//   const [output, setOutput] = useState('');

//   const [languages, setLanguages] = useState([]);
//   const [translation, setTranslation] = useState('');

//   const url1 = 'https://google-translate1.p.rapidapi.com/language/translate/v2';
//   const option1 = {
//     method: 'POST',
//     headers: {
//       'x-rapidapi-key': '0bb92c99f5msh64e13e95e905d4ep1ebe05jsn5c857c85c624',
//       'x-rapidapi-host': 'google-translate1.p.rapidapi.com',
//       'Content-Type': 'application/json',
//       'Accept-Encoding': 'application/gzip'
//     },
//     body: JSON.stringify({
//       q: 'Hello, world!',
//       format: '',
//       target: 'es',
//       source: 'en',
//       model: ''
//     })
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(url, options);
//         const result = await response.json();
//         setTranslation(result.data.translations[0].translatedText);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchData();
//   }, []);

//   const url = 'https://google-translate1.p.rapidapi.com/language/translate/v2/languages';
//   const options = {
//     method: 'GET',
//     headers: {
//       'x-rapidapi-key': '0bb92c99f5msh64e13e95e905d4ep1ebe05jsn5c857c85c624',
//       'x-rapidapi-host': 'google-translate1.p.rapidapi.com',
//       'Content-Type': 'application/json',
//       'Accept-Encoding': 'application/gzip'
//     }
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(url, options);
//         const result = await response.json();
//         console.log(result.data)
//         setLanguages(result.data.languages);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchData();
//   }, []);

//   const translate = () => {
//     const params = new URLSearchParams();
//     params.append('q', input);
//     params.append('target', to);
//     params.append('source', from);
//     params.append('api_key', 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx');

//     fetch('https://libretranslate.com/translate', {
//       method: 'POST',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/x-www-form-urlencoded',
//       },
//       body: params
//     })
//       .then(response => response.json())
//       .then(data => {
//         console.log(data);
//         setOutput(data.translatedText);
//       })
//       .catch(error => {
//         console.error('Error translating:', error);
//         // Display an informative message to the user based on the error code (e.g., "API key invalid" or "Rate limit exceeded")
//       });
//   };

//   useEffect(() => {
//     fetch('https://libretranslate.com/languages', {
//       headers: {
//         'Accept': 'application/json'
//       }
//     })
//       .then(response => response.json())
//       .then(data => {
//         console.log(data);
//         setOption(data);
//       })
//       .catch(error => {
//         console.error('Error fetching languages:', error);
//         // Display an informative message to the user based on the error code (e.g., "API key invalid" or "Rate limit exceeded")
//       });
//   }, []);

//   return (
//     <div className="App">
//       <div>
//         From ({from}) :
//         <select onChange={(e) => setFrom(e.target.value)}>
//           {languages.map((languages) => (
//             <option key={languages.language} value={languages.language}>
//               {languages.language}
//             </option>
//           ))}
//         </select>
//         To ({to}) :
//         <select onChange={(e) => setTo(e.target.value)}>
//           {languages.map((languages) => (
//             <option key={languages.language} value={languages.language}>
//               {languages.language}
//             </option>
//           ))}
//         </select>
//       </div>
//       <div>
//         <textarea
//           cols="50"
//           rows="8"
//           value={input}
//           onInput={(e) => setInput(e.target.value)}
//         ></textarea>
//       </div>
//       <div>
//         <textarea cols="50" rows="8" value={output}></textarea>
//       </div>
//       <div>
//         <button onClick={e => translate()}>Translate</button>
//       </div>
//     </div>
//   );
// }

// export default App;