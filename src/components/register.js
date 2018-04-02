import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import registerUser from '../actions/index';

class Register extends React.Component {

    renderField(field) {
        const { meta: { touched, error } } = field
        const className = `form-group ${touched && error ? 'has-danger' : ''}`
        return (
            <div className={className}>
                <label>{field.label}</label>
                <input
                    className="form-control"
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

    render() {

        const { handleSubmit } = this.props

        return (
            <div>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
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
    }
    if (!values.password) {
        errors.password = "Pole jest wymagane!!!";
    } else {
        if (values.password.length < 5) {
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

function mapStateToProps({ registerResult }) {
    return { registerResult };
}

export default reduxForm({
    validate: validate,
    form: "RegisterNewUser"
})(connect(mapStateToProps, { registerUser })(Register));