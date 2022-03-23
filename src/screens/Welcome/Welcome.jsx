import React from "react";  
import { Container, Box, Link, Grid, Divider, Button } from "@material-ui/core";

export default function Welcome(props) {
  return (
    <section class="banner-section bg_img bg_img4" style={{backgroundimage:"url('/bg.png')"}}>
      <div class="container">
         <div class="banner-wrapper d-flex flex-wrap alter">
            <div class="col-md-8">
            <div class="banner-content">
                <h1 class="banner-content__title">TRY&nbsp;
                <span class="text--base"> YOUR LUCK</span>  WITH <br/>  CARDS </h1>
                <p class="banner-content__subtitle">PLAY CARD AND EARN CRYPTO ONLINE. THE <br/> ULTIMATE ONLINE PLAYING CARD PLATFORM.</p>
              
                <img src="/cashino.png" alt="" class="shape1"/>
            </div>
         </div>
         <div class="col-md-4">
           <div class="banner-thumb">
            <center class="banner_top">
                <img src="/cashino.png" alt="banner"style={{width: "100%"}}/>
            </center>
            </div> 
        </div>
       </div>
      </div>
    </section>
  );
}
