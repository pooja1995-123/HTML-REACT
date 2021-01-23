import React from "react";
import {Link} from "react-router-dom";


class Header extends React.Component {
    render() {
        return (
            <div>
                {/* <!-- body --> */}

<body class="main-layout about_page">
    {/* <!-- loader  --> */}
    <div class="loader_bg">
        <div class="loader"><img src="assets/images/loading.gif" alt="" /></div>
    </div>

    <div class="wrapper">
    {/* <!-- end loader --> */}

     <div class="sidebar">
            {/* <!-- Sidebar  --> */}
            <nav id="sidebar">

                <div id="dismiss">
                    <i class="fa fa-arrow-left"></i>
                </div>

                <ul class="list-unstyled components">

                    <li >
                        <Link to="/">Home</Link>
                    </li>
                    <li class="active">
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/recipes">Recipe</Link>
                    </li>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                </ul>

            </nav>
        </div>

    <div id="content">
    {/* <!-- header --> */}
    <header>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-3">
                    <div class="full">
                        <Link class="logo" href="index.html"><img src="assets/images/logo.png" alt="#" /></Link>
                    </div>
                </div>
                <div class="col-md-9">
                    <div class="full">
                        <div class="right_header_info">
                            <ul>
                                <li class="dinone">Contact Us : <img src="assets/images/phone_icon.png" alt="#" style={{marginRight: "15px",marginLeft: "15px"}}/><Link href="#">987-654-3210</Link></li>
                                <li class="dinone"><img style={{marginRight: "15px" }}src="assets/images/mail_icon.png" alt="#" /><Link href="#">demo@gmail.com</Link></li>
                                <li class="dinone"><img style={{marginRight: "15px",height: "21px",position: "relative",top: "-2px"}} src="assets/images/location_icon.png" alt="#" /><Link href="#">104 New york , USA</Link></li>
                                <li class="button_user"><Link class="button" to="/login">Login</Link><Link class="button" to="/register">Register</Link></li>
                                <li><img style={{marginRight:"15px"}} src="assets/images/search_icon.png" alt="#" /></li>
                                <li>
                                    <button type="button" id="sidebarCollapse">
                                        <img src="assets/images/menu_icon.png" alt="#" />
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    </div>
    </div>
    </body>
    {/* <!-- end header --> */}
            </div>
        )
    }
};

export default Header;