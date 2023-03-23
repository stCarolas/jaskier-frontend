import { useState, useEffect } from 'react';
import './App.css';

function App() {

	function Song() {
		const [songs, setSongs] = useState([]);

		useEffect(() => {
			fetch('http://localhost:8080/events')
				.then(data => data.json())
				.then((json) => { setSongs( json ); });
		}, []);

		if (songs.length > 0) {
			return (<><div>Song: {songs[0].result.results[0].artist}</div></>);
		}
		return <div>Loading...</div>;
	}

  return (
    <div className="App">
      <header className="App-header">
				<Song />
      </header>
    </div>
  );
}

export default App;
