import React from 'react';
import './sign-in-and-up.scss';

import SignIn from '../../components/sign-in/sign-in-component';

import SignUP from '../../components/sign-up/sign-up.component'
const SignInAndSignUpPage = () => <div className="sign-in-and-up">
    <SignIn />
    <SignUP />
</div>;

export default SignInAndSignUpPage;
