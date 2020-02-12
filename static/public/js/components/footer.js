import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <footer className="cp-footer">
                <div className="cp-footer-background-img">
                    <div className="cp-footer-content">
                        <div className="cp-footer-more-about">
                            <h3>More about creative person</h3>
                            <hr></hr>
                            <p>The site unites creative people. Create with us!</p>
                        </div>
                        <div className="cp-footer-keep-connected">
                            <h3>Keep connected</h3>
                            <hr></hr>
                            <div className="cp-footer-social-links">
                                <div className="cp-footer-social-link">
                                    <a href="#" className="fa fa-twitter cp-fa-icon" aria-hidden="true"></a>
                                </div>
                                <div className="cp-footer-social-link">
                                    <a href="#" className="fa fa-google-plus cp-fa-icon" aria-hidden="true"></a>
                                </div>
                                <div className="cp-footer-social-link">
                                    <a href="#" className="fa fa-vk cp-fa-icon" aria-hidden="true"></a>
                                </div>
                            </div>
                        </div>
                        <div className="cp-footer-contact-information">
                            <h3>Contact information</h3>
                            <hr></hr>
                            <p>Contact</p>
                        </div>
                    </div>
                    <div className="cp-copyright">
                        <p className="cp-copyright-content">&copy; 2020 All Rights Reserved.</p>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;
