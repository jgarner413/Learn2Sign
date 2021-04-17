import React from 'react';
import axios from 'axios';
import { doSocialSignIn } from '../firebase/FirebaseFunctions';

const SocialSignIn = () => {
  const socialSignOn = async (provider) => {
    try {
      const cred = await doSocialSignIn(provider);
      axios.post('http://localhost:9000/create/' + cred.user.email).then(function (response){
        console.log(response);
      });
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div>
      <img
        onClick={() => socialSignOn('google')}
        alt="google signin"
        src="/imgs/btn_google_signin.png"
      />
    </div>
  );
};

export default SocialSignIn;
