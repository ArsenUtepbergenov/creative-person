import React from 'react';
import classnames from 'classnames';

export class Picture extends React.Component {
    // обязательный метод для реализации, возвращает, что необходимо отрисовать
    render() {
        return (
            // вместо class применяется className для совместимости
            <div className="cp-picture-item">
                {/* this.props обращение к полученному свойству */}
                <img src={ require('../../img/picture.jpg') } alt="picture" className="cp-picture" width="100%"></img>
                <h3 className="cp-picture-title">{ this.props.title }</h3>
                <p className="cp-picture-author">{ this.props.author }</p>
            </div>
        );
    }
}

// Компонент "форма добавления картины"
class PictureForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputTitle: '',
            inputAuthor: '',
            errors: {}
        };
        this.changeDataPicture = this.changeDataPicture.bind(this);
        this.addPicture = this.addPicture.bind(this);
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
        if (this.state.inputTitle === '') errors.inputTitle = "Cat't be empty";
        if (this.state.inputAuthor === '') errors.inputAuthor = "Cat't be empty";
        this.setState({ errors });

        // axios.post('/api/gallery', {
        //     title: this.state.inputTitle,
        //     author: this.state.inputAuthor
        // });
    }

    render() {
        return (
            <form className="cp-form-add-picture" onSubmit={this.addPicture}>
                <div className="cp-form-add-picture-body">
                    <div className={classnames('cp-form-body-field', { errors: !!this.state.errors.inputTitle }) }>
                        <label className="cp-form-body-label" htmlFor="inputTitle">Title:</label>
                        <input className="cp-form-body-input"
                               name="inputTitle"
                               value={ this.state.inputTitle }
                               onChange={ this.changeDataPicture }
                               id="inputTitle"
                        />
                        <span className="cp-form-body-span">{ this.state.errors.inputTitle }</span>
                    </div>

                    <div className={classnames('cp-form-body-field', { errors: !!this.state.errors.inputAuthor }) }>
                        <label className="cp-form-body-label" htmlFor="inputAuthor">Author:</label>
                        <input className="cp-form-body-input"
                               name="inputAuthor"
                               value={ this.state.inputAuthor }
                               onChange={ this.changeDataPicture }
                               id="inputAuthor"
                        />
                    <span className="cp-form-body-span">{ this.state.errors.inputAuthor }</span>
                    </div>

                    <button className="cp-form-add-picture-button" type="submit">Add picture</button>
                </div>
            </form>
        );
    }
}

export default PictureForm;
