import React from "react";
function Home() {
    return (
        <div>
             <div className="add-to-cart">
                  <img src="https://thumb7.shutterstock.com/display_pic_with_logo/1026019/282202889/stock-photo-red-circle-add-to-cart-shopping-cart-with-cross-flat-long-shadow-style-icon-label-sticker-sign-282202889.jpg" alt=""/>
             </div>
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://n4.sdlcdn.com/imgs/f/n/r/Gionee-A1-64GB-Black-SDL352791824-1-ff379.jpeg" alt="" />
                </div>

                <div className="text-wrapper item">
                    <span>
                        I-Phone
                  </span>
                    <span>
                        Price : $1000.00
                  </span>
                </div>

                <div className="btn-wrapper item">
                    <button>Add To Cart</button>
                </div>
            </div>
        </div>
    
    );
};

export default Home;