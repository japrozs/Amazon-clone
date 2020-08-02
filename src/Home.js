import React from 'react';
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <img className="home__image" src="https://www.soda.com/wp-content/uploads/2019/12/prime-video.jpg" alt=""></img>
            <div class="home__row">
                <Product rating={5} id="123213141" title="MacBook Air" price={899} image="https://www.amazon.com/images/I/71k3fJh5EwL._AC_UY218_.jpg" />
                <Product rating={5} id="495845984" title="Iphone XR" price={999} image="https://www.amazon.com/images/G/01/appcore/phone/AMZ_FamiyStripe_iPhone_Xr.png" />
            </div>
            <div class="home__row">
                <Product rating={5} id="567723496" title="MacBook Pro" price={1299} image="https://www.amazon.com/images/I/71L2iBSyyOL._AC_UY218_.jpg" />
                <Product rating={3} id="926787746" title="Windows Surface Pro" price={799} image="https://www.amazon.com/images/I/714cHoaDUpL._AC_UY218_.jpg" />
                <Product rating={4} id="346825786" title="Windows Surface Studio" price={899} image="https://www.amazon.com/images/I/71GtU-pCvWL._AC_UY218_.jpg" />
            </div>
            <div className="home__row">
                <Product rating={3} id="457775584" title="Logitech G502 HERO High Performance Gaming Mouse" price={100} image="https://www.amazon.com/images/I/51IOmsWQVAL._AC_UY218_.jpg" />
            </div>
        </div>
    );
}

export default Home
