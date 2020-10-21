import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth } from '../../firebase/firebase.utils.js';
import { googleSignInStart } from '../../redux/user/user.actions';
import { connect } from 'react-redux';
class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = async (event) => {
        event.preventDefault();
        const { email, password } = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
        }
        catch (e) {
            console.error(e);
        }
    }
    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }
    render() {
        const {googleSignInStart} = this.props;
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput label="email" name="email" type="email" value={this.state.email} required handleChange={this.handleChange} />
                    <FormInput label="password" name="password" type="password" value={this.state.password} required handleChange={this.handleChange} />
                    <div className="buttons">
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton type="button" isGoogleSignIn onClick={googleSignInStart}>Sign In with google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
};
const mapDispatchToProps = (dispatch) => ({
    googleSignInStart: () => dispatch(googleSignInStart())
})
export default connect(null, mapDispatchToProps)(SignIn);