import React from "react";
import Footer from "../constant/Footer";
import Header from "../constant/Header";
import { Link } from "react-router-dom";

class Home extends React.Component{
    render(){
        return(<div>
<Header />
<div class="yellow_bg">
   <div class="container">
            <div class="row">
               <div class="col-md-12">
                  <div class="title">
                     <h2>About</h2>
                    
                  </div>
               </div>
            </div>
          </div>
</div>
{/* <!-- about --> */}
<div class="about">
    <div class="container">
      <div class="row">
         <div class="col-md-12">
             <div class="title">
                <i><img src="assets/images/title.png" alt="#"/></i>
                
                <span>It is a long established fact that a reader will be distracted by the readable content of a
                   <br/> page when looking at its layout. The point of using Lorem
                </span>
             </div>
          </div>
       </div>
       <div class="row">
         <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
             <div class="about_box">
                 <h3>Best Food</h3>
                 <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscureContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard </p>
                 <Link to="#">Read More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></Link>
             </div>
         </div>
          <div class="col-xl-5 col-lg-5 col-md-10 col-sm-12 about_img_boxpdnt">
             <div class="about_img">
                 <figure><img src="assets/images/about-img.jpg" alt="#"/></figure>
             </div>
         </div>      
       </div> 
    </div>
</div>
<Footer />
{/* <!-- end about --> */}

        </div>)
    }
}
export default Home;