import React from 'react';
import classnames from 'classnames';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { savePicture, getPicture, updatePicture } from '../actions/galleryActions';
import { _getId } from '../utilities/utilities';

class PictureForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.picture ? this.props.picture.id : null,
            inputTitle: this.props.picture ? this.props.picture.title : '',
            inputAuthor: this.props.picture ? this.props.picture.author : '',
            errors: {}
        };
        this.changeDataPicture = this.changeDataPicture.bind(this);
        this.addPicture = this.addPicture.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            id: nextProps.picture.id,
            inputTitle: nextProps.picture.title,
            inputAuthor: nextProps.picture.author
        });
    }

    componentDidMount() {
        if (this.props.match.params.id) {
            this.props.getPicture(this.props.match.params.id);
        }
    }

    changeDataPicture(event) {
        if (!!this.state.errors[event.target.name]) {
            let errors = Object.assign({}, this.state.errors);
            delete errors[event.target.name];
            this.setState({
                [event.target.name]: event.target.value,
                errors
            });
        } else {
            this.setState({ [event.target.name]: event.target.value });
        }
    }

    addPicture(event) {
        event.preventDefault();

        let errors = {};

        if (this.state.inputTitle === '')
            errors.inputTitle = "Cat't be empty";
        if (this.state.inputAuthor === '')
            errors.inputAuthor = "Cat't be empty";

        this.setState({ errors });

        const isValid = Object.keys(errors).length === 0;

        if (isValid) {
            const stateId = this.state.id;
            let id = _getId(1, 1000);
            const rating = this.props.defaultRating;
            const image = this.props.defaultImage;
            const title = this.state.inputTitle;
            const author = this.state.inputAuthor;

            if (stateId) {
                id = stateId;
                this.props.updatePicture({ id, title, author, image, rating });
            }
            else {
                this.props.savePicture({ id, title, author, image, rating });
            }
        }
    }

    render() {
        return (
            <div>
                <div className="cp-modal-form">
                    <form className="cp-form-add-picture" onSubmit={this.addPicture}>
                        <div className="cp-form-add-picture-body">
                            <div className={ classnames("cp-form-body-field", { "errors": !!this.state.errors.inputTitle }) }>
                                <label className="cp-form-body-label" htmlFor="inputTitle">Title:</label>
                                <input className="cp-form-body-input"
                                       name="inputTitle"
                                       value={ this.state.inputTitle }
                                       onChange={ this.changeDataPicture }
                                       id="inputTitle"
                                />
                                <span className="cp-form-span">{ this.state.errors.inputTitle }</span>
                            </div>

                            <div className={ classnames("cp-form-body-field", { "errors": !!this.state.errors.inputAuthor }) }>
                                <label className="cp-form-body-label" htmlFor="inputAuthor">Author:</label>
                                <input className="cp-form-body-input"
                                       name="inputAuthor"
                                       value={ this.state.inputAuthor }
                                       onChange={ this.changeDataPicture }
                                       id="inputAuthor"
                                />
                                <span className="cp-form-span">{ this.state.errors.inputAuthor }</span>
                            </div>

                            <div className="cp-form-body-field">
                                <label className="cp-form-body-label" htmlFor="inputRating">Default rating:</label>
                                <input className="cp-form-body-input" type="number" value={ this.props.defaultRating } id="inputRating" disabled />
                            </div>

                            <div className="cp-form-body-field">
                                <label className="cp-form-body-label" htmlFor="inputImage">Default image:</label>
                                <input className="cp-form-body-input" type="text" value={ this.props.defaultImage } id="inputImage" disabled />
                            </div>
                            <button className="cp-form-add-picture-button" type="submit">Add picture</button>
                        </div>
                    </form>
                </div>
                <NavLink to="/gallery" className="cp-modal-form-close-button">&times;</NavLink>
            </div>
        );
    }
}

PictureForm.propTypes = {
    savePicture: React.PropTypes.func.isRequired,
    getPicture: React.PropTypes.func.isRequired,
    updatePicture: React.PropTypes.func.isRequired
}

PictureForm.defaultProps = {
    defaultRating: 1,
    defaultImage: 'picture.jpg'
}

function mapStateToProps(state, props) {
    if (props.match.params.id) {
        return {
            picture: state.pictures.find(item => item.id == props.match.params.id)
        }
    }
    return { picture: null };
}

export default connect(mapStateToProps, { savePicture, getPicture, updatePicture })(PictureForm);
