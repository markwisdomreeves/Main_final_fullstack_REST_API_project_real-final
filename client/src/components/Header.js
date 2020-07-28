import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "../styles/global.css";

export default class Header extends React.PureComponent {
    render() {
        const { context } = this.props;
        const authUser = context.authenticatedUser;

        return (
            <div className="header">
                <div className="bounds">
                    <h1 className="header--logo responsive-header-text"><Link to={"/"}>REST API</Link></h1>
                    <nav id="signin_and_signup">
                         {/* If the the authenticatedUser from context is not null, the Header is changed to welcome the user and display the sign out button.
                          If the authenticatedUser is null, the sign up and sign in buttons are rendered. */}
                        {authUser ?
                            <Fragment>
                                <span>Welcome, {authUser.firstName}!</span>
                                <Link className="signout" to="/signout">Sign Out</Link>
                            </Fragment>
                        :
                            <Fragment>
                                <Link className="signup" to="/signup">
                                    Sign Up
                                </Link>
                                <Link className="signin" to="/signin">
                                    Sign In
                                </Link>
                           </Fragment>
                        }
                    </nav>
                </div>
            </div>
        );
    };
};
