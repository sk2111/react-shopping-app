import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './sign-up.styles.scss';
import { signUpStart } from '../../redux/user/user.actions';
import {connect} from 'react-redux';
class SignUp extends React.Component{
    constructor(){
        super();
        this.state={
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }
    handleSubmit= async(event)=>{
        event.preventDefault();
        const {displayName,email,password,confirmPassword} = this.state;
        const {signUpStart} = this.props;
        if(password !== confirmPassword)
        {
            alert("Passwords dont match");
            return;
        }
        signUpStart({displayName,email,password});
    }
    handleChange = event=>{
        const {name,value} = event.target;
        this.setState({[name]:value});
    }
    render(){
        const {displayName,email,password,confirmPassword} = this.state;
        return(
            <div className="sign-up">
                <h2 className="title">I do not have a account</h2>
                <span className="title">Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput type="text" name="displayName" value={displayName} onChange={this.handleChange} label="Name" required />
                    <FormInput type="email" name="email" value={email} onChange={this.handleChange} label="Email" required />
                    <FormInput type="password" name="password" value={password} onChange={this.handleChange} label="Password" required />
                    <FormInput type="password" name="confirmPassword" value={confirmPassword} onChange={this.handleChange} label="confirm Password" required />         
                    <CustomButton type="submit">Sign Up</CustomButton>
                </form>
            </div>
        )
    }
};
const mapDispatchToProps = (dispatch)=>({
    signUpStart:(signUpData)=>dispatch(signUpStart(signUpData))
})
export default connect(null,mapDispatchToProps)(SignUp);