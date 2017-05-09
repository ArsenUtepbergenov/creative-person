import React from 'react';

export default function MusicList({ music }) {
    const emptyMessage = (
        <p>There are not music yet in your list</p>
    );

    const musicList = (
        <ul>
            {
                music.map(track => {
                    return <li key={ track.id }>
                        {
                            <audio controls>
                                <source src={ require(`../../mp3/${track.name}.mp3`) } type="audio/mpeg"></source>
                                Your browser does not support the audio element.
                            </audio>
                        }
                    </li>;
                })
            }
        </ul>
    );

    return (
        <div>
            { music.length === 0 ? emptyMessage : musicList }
        </div>
    );
}

MusicList.propTypes = {
    music: React.PropTypes.array.isRequired
}
