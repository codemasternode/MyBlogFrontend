import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import registerUser from '../actions/index';

class Register extends React.Component {

    constructor() {
        super();
        this.renderResult = this.renderResult.bind(this);
    }

    renderField(field) {
        const { meta: { touched, error } } = field
        const className = `form-group ${touched && error ? 'has-danger' : ''}`
        const danger = `form-control ${touched && error ? 'danger' : ''}`

        return (
            <div className={className}>
                <label>{field.label}</label>
                <input
                    className={danger}
                    type={field.type}
                    {...field.input}
                />
                <div className="text-help">
                    {touched ? error : ''}
                </div>
            </div>
        )
    }

    onSubmit(values) {
        this.props.registerUser(values, () => {
            this.props.history.push("/");
        })
    }

    componentWillUpdate() {
        console.log(this.props.registerResult.message)
    }

    renderResult() {
        return <div>{this.props.registerResult.message}</div>
    }

    render() {

        const { handleSubmit } = this.props




        return (
            <div>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))} noValidate>
                    <Field
                        label="Name"
                        name="name"
                        type="text"
                        component={this.renderField}
                    />
                    <Field
                        label="Username"
                        name="username"
                        type="text"
                        component={this.renderField}
                    />
                    <Field
                        label="Email"
                        name="email"
                        type="email"
                        formnovalidate="formnovalidate"
                        component={this.renderField}
                    />
                    <Field
                        label="Password"
                        name="password"
                        type="password"
                        component={this.renderField}
                    />
                    <Field
                        label="Confirm Password"
                        name="confirmpassword"
                        type="password"
                        component={this.renderField}
                    />
                    <button type="submit" className="btn submit-custom">Dołącz</button>
                    
                </form>
                {this.renderResult()}
            </div>
        )
    }
}

function validate(values) {
    const errors = {}

    if (!values.name) {
        errors.name = "Pole jest wymagane!!!"
    }
    if (!values.username) {
        errors.username = "Pole jest wymagane!!!"
    }

    if (!values.email) {
        errors.email = "Pole jest wymagane!!!";

    } else {
        var monkey = "@";
        if (!values.email.includes(monkey)) {
            errors.email = "Proszę wprowadzić prawidłowy email"
        } else {
            const monkeyPos = values.email.indexOf(monkey);
            if (values.email.split(monkey)[0].length == 0 || values.email.slice(monkeyPos + 1).length == 0) {
                errors.email = "Proszę wprowadzić prawidłowy email"
            }
        }
    }
    if (!values.password) {
        errors.password = "Pole jest wymagane!!!";
    } else {
        if (values.password.length < 6) {
            errors.password = "Hasło musi zawierać przynajmniej 6 znaków"
        }
    }
    if (!values.confirmpassword) {
        errors.confirmpassword = "Pole jest wymagane!!!";
    } else {
        if (values.password != values.confirmpassword) {
            errors.confirmpassword = "Hasła różnią się od siebie"
            errors.password = "Hasła różnią się od siebie"
        }
    }
    return errors;
}

function mapStateToProps({registerResult}) {
    return {
        registerResult
    };
}

export default reduxForm({
    validate: validate,
    form: "RegisterNewUser"
})(connect(mapStateToProps, { registerUser })(Register));