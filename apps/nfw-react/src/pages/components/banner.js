import React from "react";
import pizza from "../assets/pizza_zoom_in4.jpg"

function Banner() {

    return (
        <div>
            <section className="banner">
                <div className="container">
                    <img id="pizza_img0" className="pizza-img" src={pizza} alt="pizza photo"></img>
                </div>
            </section>
        </div>
    )
}

export default Banner;