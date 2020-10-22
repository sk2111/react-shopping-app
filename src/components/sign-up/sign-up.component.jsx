import React, { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './sign-up.styles.scss';
import { signUpStart } from '../../redux/user/user.actions';
import { connect } from 'react-redux';

const SignUp = ({ signUpStart }) => {
    const [signUpInfo, setSignUpInfo] = useState({ displayName: '', email: '', password: '', confirmPassword: '' });

    const { displayName, email, password, confirmPassword } = signUpInfo;

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords dont match");
            return;
        }
        signUpStart({ displayName, email, password });
    }
    const handleChange = event => {
        const { name, value } = event.target;
        setSignUpInfo({ ...signUpInfo, [name]: value });
    }
    return (
        <div className="sign-up">
            <h2 className="title">I do not have a account</h2>
            <span className="title">Sign up with your email and password</span>
            <form className="sign-up-form" onSubmit={handleSubmit}>
                <FormInput type="text" name="displayName" value={displayName} onChange={handleChange} label="Name" required />
                <FormInput type="email" name="email" value={email} onChange={handleChange} label="Email" required />
                <FormInput type="password" name="password" value={password} onChange={handleChange} label="Password" required />
                <FormInput type="password" name="confirmPassword" value={confirmPassword} onChange={handleChange} label="confirm Password" required />
                <CustomButton type="submit">Sign Up</CustomButton>
            </form>
        </div>
    )
};
const mapDispatchToProps = (dispatch) => ({
    signUpStart: (signUpData) => dispatch(signUpStart(signUpData))
})
export default connect(null, mapDispatchToProps)(SignUp);