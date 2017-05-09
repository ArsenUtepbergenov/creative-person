import React from 'react';

// photos
import photo1 from '../img/photo1.jpg';
import photo2 from '../img/photo2.jpg';
import photo3 from '../img/photo3.jpg';

class Photo extends React.Component {
    render() {
        return (
            <div>
                <div className="cp-photos">
                    <div className="cp-photos-part">
                        <img src={ photo1 } alt="photo" className="cp-photo" width="100%"></img>
                        <img src={ photo2 } alt="photo" className="cp-photo" width="100%"></img>
                    </div>
                    <div className="cp-photos-part">
                        <img src={ photo2 } alt="photo" className="cp-photo" width="100%"></img>
                        <img src={ photo3 } alt="photo" className="cp-photo" width="100%"></img>
                    </div>
                    <div className="cp-photos-part">
                        <img src={ photo3 } alt="photo" className="cp-photo" width="100%"></img>
                        <img src={ photo1 } alt="photo" className="cp-photo" width="100%"></img>
                    </div>
                </div>
            </div>
        );
    }
}

export default Photo;
