import React from 'react';

class Photo extends React.Component {
    render() {
        return (
            <div>
                <div className="cp-photos">
                    <div className="cp-photos-half">
                        <img src={ require('../img/photo1.jpg') } alt="photo" className="cp-photo" width="100%"></img>
                        <img src={ require('../img/photo2.jpg') } alt="photo" className="cp-photo" width="100%"></img>
                    </div>
                    <div className="cp-photos-half">
                        <img src={ require('../img/photo3.jpg') } alt="photo" className="cp-photo" width="100%"></img>
                        <img src={ require('../img/photo1.jpg') } alt="photo" className="cp-photo" width="100%"></img>
                        <img src={ require('../img/photo2.jpg') } alt="photo" className="cp-photo" width="100%"></img>                
                    </div>
                </div>
            </div>
        );
    }
}

export default Photo;
