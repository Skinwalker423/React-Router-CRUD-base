import React from "react";
import { signIn, signOut } from "../actions";
import { connect } from "react-redux";


class GoogleAuth extends React.Component {


    componentDidMount(){
            window.gapi.load('client:auth2', () => {
                window.gapi.client.init({
                    clientId: '995821902783-2f80dr6vvon643uq420d9hsv28n8j9pu.apps.googleusercontent.com',
                    scope: 'email'
                }).then(() => {
                
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onChange)
            })
        })
    }

    onChange = (isSignedIn) => {
        if(isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        }

    } 

    onLogIn = () => {
        this.auth.signIn();
    }

    onLogOut = () => {
        this.auth.signOut();
    }

    renderAuthButton = () => {
         if(this.props.isSignedIn) {
            return (
                <button onClick={this.onLogOut} className="ui red google button">
                    <i className="google icon" />
                    Sign Out
                    {this.props.userId}
                </button>
            )
        } else {
            return (
                <button onClick={this.onLogIn} className="ui blue google button">
                    <i className="google icon" />
                    Sign In with Google
                </button>
            )
        }
    }

    render(){
        return(
            <div>{this.renderAuthButton()}</div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isSignedIn: state.auth.isSignedIn,
        userId: state.auth.userId
    }
}

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);