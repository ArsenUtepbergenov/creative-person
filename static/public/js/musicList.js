import React from 'react';

export default function MusicList({ music }) {
    const emptyMessage = (
        <p>There are not music yet in your collection</p>
    );

    const musicList = (
        <p>Music list</p>
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
