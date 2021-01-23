import React from "react";

class Client extends React.Component{
    render(){
        return(<div>
            {/* <!-- Our Client --> */}
<div class="Client">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="title">
          <i><img src="assets/images/title.png" alt="#"/></i>
          <h2>Our Client</h2>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 offset-md-3">
         <div class="Client_box">
           <img src="assets/images/client.jpg" alt="#"/>
           <h3>Roock Due</h3>
           <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text.</p>
           <i><img src="assets/images/client_icon.png" alt="#"/></i>
         </div>
      </div>
    </div>
  </div>
</div>  
{/* <!-- end Our Client --> */}
        </div>)
    }
}
export default Client;