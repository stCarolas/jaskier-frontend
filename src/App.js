import { useState, useEffect } from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fas, faTwitter, faFontAwesome )


function Songs() {
	const [songs, setSongs] = useState([]);

	useEffect(() => {
		fetch('http://localhost:8080/events?channelId=11')
			.then(data => data.json())
			.then((json) => { setSongs( json ); });
	}, []);

	if (songs.length > 0) {
		return songs.map(song =>
				<a href={song.result.results[0].song_link} className="song-link">
					<FontAwesomeIcon icon="fa-solid fa-music" className="song-icon" />
					<span>{song.result.results[0].artist}</span> - <span>{song.result.results[0].title}</span>
				</a>
		);
	}
	return <div>Loading...</div>;
}

function App() {

  return (
    <div className="App">
      <header className="App-header">
					<Songs />
      </header>
    </div>
  );
}

export default App;
