import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

class Register extends React.Component {

    renderField(field) {
        <div>
            
        </div>
    }

    render() {
        return (
            <div>
                <form>
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

    return errors;
}

export default reduxForm({
    validate,
    form: "RegisterNewUser"
})(connect(null, { registerUser })(Register));