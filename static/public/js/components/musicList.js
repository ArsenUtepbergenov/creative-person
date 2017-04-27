import React from 'react';

export default function MusicList({ music }) {
    const emptyMessage = (
        <p>There are not music yet in your list</p>
    );

    const musicList = (
        <ul>
            {
                music.map(track => {
                    return <li key={ track.id }>{ track.name }</li>;
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
