import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <footer className="cp-footer">
                <div className="cp-footer-background-img"></div>
                <div className="cp-footer-content">
                    <div className="cp-footer-more-about">
                        <h3>More about creative person</h3>
                        <p>The best site in the world</p>
                        <span>Anrey Z.</span>
                    </div>
                    <div className="cp-footer-keep-connected">
                        <h3>Keep connected</h3>
                        <div className="cp-footer-social-links">
                            Social links
                        </div>
                    </div>
                    <div className="cp-footer-contact-information">
                        <h3>Contact information</h3>
                        <p>Contact</p>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;
