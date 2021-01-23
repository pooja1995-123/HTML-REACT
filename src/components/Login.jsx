import React from "react";
import {Link} from "react-router-dom";

class Login extends React.Component{
    render(){
        return(<div>
            <div className="container ">
                <div className="row mt-5">
                    <div className="col-md-6">
                    <div class="wrapper">
                        <form class="form-signin">       
                        <h2 class="form-signin-heading">Please login</h2>
                        <input type="text" class="form-control" name="username" placeholder="Email Address" required="" autofocus="" />
                        <input type="password" class="form-control" name="password" placeholder="Password" required=""/>      
                        <label class="checkbox">
                            <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe"/> Remember me
                        </label>
                       
                        <div class="btn btn-lg text-white bg-dark btn-block " type="submit"> <Link to="/">Login</Link> </div> 
                        </form>
                    </div>
                    </div>

                </div>

            </div>

         
        </div>)
    }
}
export default Login;