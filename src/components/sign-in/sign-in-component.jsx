import React from 'react';
import FormInput from '../form-input/form-input-component'
import CustomButton from '../Custom-Button/custom-button.component'

//import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import {connect} from 'react-redux'

import './sign-in-style.scss'

import {googleSignInStart, emailSignInStart} from '../../redux/user/user.action'

class SignIn extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = async event => {
        event.preventDefault();
        const {emailSignInStart } = this.props;
        const { email, password } = this.state;
        /*try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' })
        } catch (error) {
            console.log(error);
        }*/
        emailSignInStart(email, password)
    }

    handelChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }
    render() {
        const {googleSignInStart}=this.props;
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and passowrd</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email"
                        value={this.state.email}
                        handleChange={this.handelChange}
                        required />

                    <FormInput name="password" type="passowrd" value={this.state.password}
                        handleChange={this.handelChange}
                        required />
                    <div className='buttons'>
                        <CustomButton type="submit" > Sign In</CustomButton>
                        <CustomButton  type='button' onClick={googleSignInStart} isGoogleSignIn> Sign In with google </CustomButton>
                    </div>
                </form>
            </div>
        );

    }

}

const mapDispatchToProps = dispatch => ({

    googleSignInStart:()=> dispatch(googleSignInStart()),
    emailSignInStart :(email, password) =>dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn);



