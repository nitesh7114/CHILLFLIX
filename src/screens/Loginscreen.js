import React, { useState } from 'react'
import'./Loginscreen.css'
import SignupScreen from './SignupScreen';
function Loginscreen() {
    const[signIn, setSignIn] = useState(false);



    return <div className="loginScreen">
            <div className="loginScreen__background"> 
             <img 
             className="loginScreen__logo"
             src="https://fontmeme.com/permalink/210302/69205a19acd052a0b38a28ff5d8f4135.png" alt=""/>
             <button 
             onClick={() => setSignIn(true)}
             className="loginScreen__button">
                 Sign In
             </button>

             <div className="loginScreen__gradient"></div>
            
            </div>

            <div className="loginScreen__body">
                {signIn ? (
                    <SignupScreen />
                ): (
                    <>
                <h1>Unlimited films, TV programmes and more.</h1>
                <h2>Watch anywhere, Cancel at any time.</h2>
                <h3> Ready to watch? Enter your email to create or restart your membership</h3>

                <div className="loginScreen__input">
                    <form>
                        <input type='email' placeholder="Email Address" />
                        <button  
                        onClick={() => setSignIn(true)}
                        className="loginScreen__getStarted">
                            GET STARTED
                        </button>
                    </form>
                </div>

                </>
                )}
                
            </div>
        </div>;

}

export default Loginscreen
