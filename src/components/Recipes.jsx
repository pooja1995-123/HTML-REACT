import React from "react";
import Footer from "../constant/Footer";
import Header from "../constant/Header";

class Recipes extends React.Component{
    render(){
        return(
    
           <div>
               <Header/>
               <div class="yellow_bg">
   <div class="container">
            <div class="row">
               <div class="col-md-12">
                  <div class="title">
                     <h2>Our Recipes</h2>
                    
                  </div>
               </div>
            </div>
          </div>
</div>
               {/* <!-- section --> */}
    <section class="resip_section">
        <div class="container">
            <div class="row">
               
                <div class="col-md-12">
            <div class="owl-carousel owl-theme">

                <div class="item">
                    <div class="product_blog_img">
                        <img src="assets/images/rs1.png" alt="#" />
                    </div>
                    <div class="product_blog_cont">
                        <h3>Homemade</h3>
                        <h4><span class="theme_color">$</span>10</h4>
                    </div>
                </div>
                <div class="item">
                    <div class="product_blog_img">
                        <img src="assets/images/rs2.png" alt="#" />
                    </div>
                    <div class="product_blog_cont">
                        <h3>Noodles</h3>
                        <h4><span class="theme_color">$</span>20</h4>
                    </div>
                </div>
                <div class="item">
                    <div class="product_blog_img">
                        <img src="assets/images/rs3.png" alt="#" />
                    </div>
                    <div class="product_blog_cont">
                        <h3>Egg</h3>
                        <h4><span class="theme_color">$</span>30</h4>
                    </div>
                </div>
                <div class="item">
                    <div class="product_blog_img">
                        <img src="assets/images/rs4.png" alt="#" />
                    </div>
                    <div class="product_blog_cont">
                        <h3>Sushi Dizzy</h3>
                        <h4><span class="theme_color">$</span>40</h4>
                    </div>
                </div>
                <div class="item">
                    <div class="product_blog_img">
                        <img src="assets/images/rs5.png" alt="#" />
                    </div>
                    <div class="product_blog_cont">
                        <h3>The Coffee Break</h3>
                        <h4><span class="theme_color">$</span>50</h4>
                    </div>
                </div>
                <div class="item">
                    <div class="product_blog_img">
                        <img src="assets/images/rs1.png" alt="#" />
                    </div>
                    <div class="product_blog_cont">
                        <h3>Homemade</h3>
                        <h4><span class="theme_color">$</span>10</h4>
                    </div>
                </div>
                <div class="item">
                    <div class="product_blog_img">
                        <img src="assets/images/rs2.png" alt="#" />
                    </div>
                    <div class="product_blog_cont">
                        <h3>Noodles</h3>
                        <h4><span class="theme_color">$</span>20</h4>
                    </div>
                </div>
                <div class="item">
                    <div class="product_blog_img">
                        <img src="assets/images/rs3.png" alt="#" />
                    </div>
                    <div class="product_blog_cont">
                        <h3>Egg</h3>
                        <h4><span class="theme_color">$</span>30</h4>
                    </div>
                </div>
                <div class="item">
                    <div class="product_blog_img">
                        <img src="assets/images/rs4.png" alt="#" />
                    </div>
                    <div class="product_blog_cont">
                        <h3>Sushi Dizzy</h3>
                        <h4><span class="theme_color">$</span>40</h4>
                    </div>
                </div>
                <div class="item">
                    <div class="product_blog_img">
                        <img src="assets/images/rs5.png" alt="#" />
                    </div>
                    <div class="product_blog_cont">
                        <h3>The Coffee Break</h3>
                        <h4><span class="theme_color">$</span>50</h4>
                    </div>
                </div>

            </div>
        </div>
            </div>
        </div>
    </section>
    <Footer />
           </div>
        )
    }
};
export default Recipes;