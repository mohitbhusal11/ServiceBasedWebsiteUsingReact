import React from "react";
import vg from "../assets/2.webp"
import amazon from "../icons/amazon-fill.png"
import instagram from "../icons/instagram-line.png"
import google from "../icons/google-fill.png"
import youtube from "../icons/youtube-fill.png"


const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>CodeCasm</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </main>
      </div>

      <div className="home2" >
        <img src={vg} alt="Graphics" />

        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, eos, et nostrum accusamus similique perspiciatis vero eligendi aut commodi odit numquam sit error doloribus magni voluptates amet architecto dolorum dolores!
          </p>
        </div>
      </div>


      <div className="home3" id="about">
        <div>
          <h1>Who we are</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis non quo rem ea odio dolorem animi amet aliquid? Eum recusandae repudiandae consectetur harum atque, illum accusamus, voluptatem hic cupiditate corporis incidunt, tempore non earum voluptatibus. Reiciendis similique fugiat pariatur cum consectetur dolorum illo expedita cumque ex perferendis nisi eum magni adipisci enim sequi tempora, praesentium voluptatibus, architecto obcaecati quam? Magnam!</p>
        </div>
      </div>


      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article> 
            <div style={{animationDelay:"0.3s"}}>
              <img src={amazon} alt="amazon"/>
              <p>Amazon</p>
            </div>

            <div style={{animationDelay:"0.5s"}}>
              <img src={instagram} alt="instagram"/>
              <p>Instagram</p>
            </div>

            <div style={{animationDelay:"0.7s"}}>
              <img src={google} alt="google"/>
              <p>Google</p>
            </div>

            <div style={{animationDelay:"0.9s"}}>
              <img src={youtube} alt="youtube"/>
              <p>Youtube</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
