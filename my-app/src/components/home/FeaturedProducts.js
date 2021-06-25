import React, {Component,Fragment} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class FeaturedProducts extends Component {

    render() {


const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplaySpeed:3000,
      autoplay:true,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0

    };
    return (
        <Fragment>
        
            <div className="section-title">
                <h2 className="title">Featured Products</h2>
            </div>
        <Slider {...settings}>
          <div>
                        {/* Product Single */}
                        <div className="product product-single">
               <div className="product-thumb">
                  <div className="product-label">
                     <span className="sale">-20%</span>
                  </div>
                  <ul className="product-countdown">
                     <li><span>00 H</span></li>
                     <li><span>00 M</span></li>
                     <li><span>00 S</span></li>
                  </ul>
                  <button className="main-btn quick-view"><i className="fa fa-search-plus" /> Quick view</button>
                  <img src="assets/img/product07.jpg" alt="" />
               </div>
               <div className="product-body">
                  <h3 className="product-price">$32.50 <del className="product-old-price">$45.00</del></h3>
                  <div className="product-rating">
                     <i className="fa fa-star" />
                     <i className="fa fa-star" />
                     <i className="fa fa-star" />
                     <i className="fa fa-star" />
                     <i className="fa fa-star-o empty" />
                  </div>
                  <h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
                  <div className="product-btns">
                     <button className="main-btn icon-btn"><i className="fa fa-heart" /></button>
                     <button className="main-btn icon-btn"><i className="fa fa-exchange" /></button>
                     <button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart" /> Add to Cart</button>
                  </div>
               </div>
            </div>
            {/* /Product Single */}
          </div>
          <div>
                        {/* Product Single */}
                        <div className="product product-single">
               <div className="product-thumb">
                  <div className="product-label">
                     <span className="sale">-20%</span>
                  </div>
                  <ul className="product-countdown">
                     <li><span>00 H</span></li>
                     <li><span>00 M</span></li>
                     <li><span>00 S</span></li>
                  </ul>
                  <button className="main-btn quick-view"><i className="fa fa-search-plus" /> Quick view</button>
                  <img src="assets/img/product07.jpg" alt="" />
               </div>
               <div className="product-body">
                  <h3 className="product-price">$32.50 <del className="product-old-price">$45.00</del></h3>
                  <div className="product-rating">
                     <i className="fa fa-star" />
                     <i className="fa fa-star" />
                     <i className="fa fa-star" />
                     <i className="fa fa-star" />
                     <i className="fa fa-star-o empty" />
                  </div>
                  <h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
                  <div className="product-btns">
                     <button className="main-btn icon-btn"><i className="fa fa-heart" /></button>
                     <button className="main-btn icon-btn"><i className="fa fa-exchange" /></button>
                     <button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart" /> Add to Cart</button>
                  </div>
               </div>
            </div>
            {/* /Product Single */}
          </div>
          <div>
                        {/* Product Single */}
            <div className="product product-single">
               <div className="product-thumb">
                  <div className="product-label">
                     <span className="sale">-20%</span>
                  </div>
                  <ul className="product-countdown">
                     <li><span>00 H</span></li>
                     <li><span>00 M</span></li>
                     <li><span>00 S</span></li>
                  </ul>
                  <button className="main-btn quick-view"><i className="fa fa-search-plus" /> Quick view</button>
                  <img src="assets/img/product07.jpg" alt="" />
               </div>
               <div className="product-body">
                  <h3 className="product-price">$32.50 <del className="product-old-price">$45.00</del></h3>
                  <div className="product-rating">
                     <i className="fa fa-star" />
                     <i className="fa fa-star" />
                     <i className="fa fa-star" />
                     <i className="fa fa-star" />
                     <i className="fa fa-star-o empty" />
                  </div>
                  <h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
                  <div className="product-btns">
                     <button className="main-btn icon-btn"><i className="fa fa-heart" /></button>
                     <button className="main-btn icon-btn"><i className="fa fa-exchange" /></button>
                     <button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart" /> Add to Cart</button>
                  </div>
               </div>
            </div>
            {/* /Product Single */}
          </div>
          <div>
                        {/* Product Single */}
            <div className="product product-single">
               <div className="product-thumb">
                  <div className="product-label">
                     <span className="sale">-20%</span>
                  </div>
                  <ul className="product-countdown">
                     <li><span>00 H</span></li>
                     <li><span>00 M</span></li>
                     <li><span>00 S</span></li>
                  </ul>
                  <button className="main-btn quick-view"><i className="fa fa-search-plus" /> Quick view</button>
                  <img src="assets/img/product07.jpg" alt="" />
               </div>
               <div className="product-body">
                  <h3 className="product-price">$32.50 <del className="product-old-price">$45.00</del></h3>
                  <div className="product-rating">
                     <i className="fa fa-star" />
                     <i className="fa fa-star" />
                     <i className="fa fa-star" />
                     <i className="fa fa-star" />
                     <i className="fa fa-star-o empty" />
                  </div>
                  <h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
                  <div className="product-btns">
                     <button className="main-btn icon-btn"><i className="fa fa-heart" /></button>
                     <button className="main-btn icon-btn"><i className="fa fa-exchange" /></button>
                     <button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart" /> Add to Cart</button>
                  </div>
               </div>
            </div>
            {/* /Product Single */}
          </div>
          <div>
                        {/* Product Single */}
                        <div className="product product-single">
               <div className="product-thumb">
                  <div className="product-label">
                     <span className="sale">-20%</span>
                  </div>
                  <ul className="product-countdown">
                     <li><span>00 H</span></li>
                     <li><span>00 M</span></li>
                     <li><span>00 S</span></li>
                  </ul>
                  <button className="main-btn quick-view"><i className="fa fa-search-plus" /> Quick view</button>
                  <img src="assets/img/product07.jpg" alt="" />
               </div>
               <div className="product-body">
                  <h3 className="product-price">$32.50 <del className="product-old-price">$45.00</del></h3>
                  <div className="product-rating">
                     <i className="fa fa-star" />
                     <i className="fa fa-star" />
                     <i className="fa fa-star" />
                     <i className="fa fa-star" />
                     <i className="fa fa-star-o empty" />
                  </div>
                  <h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
                  <div className="product-btns">
                     <button className="main-btn icon-btn"><i className="fa fa-heart" /></button>
                     <button className="main-btn icon-btn"><i className="fa fa-exchange" /></button>
                     <button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart" /> Add to Cart</button>
                  </div>
               </div>
            </div>
            {/* /Product Single */}
          </div>
          <div>
                        {/* Product Single */}
                        <div className="product product-single">
               <div className="product-thumb">
                  <div className="product-label">
                     <span className="sale">-20%</span>
                  </div>
                  <ul className="product-countdown">
                     <li><span>00 H</span></li>
                     <li><span>00 M</span></li>
                     <li><span>00 S</span></li>
                  </ul>
                  <button className="main-btn quick-view"><i className="fa fa-search-plus" /> Quick view</button>
                  <img src="assets/img/product07.jpg" alt="" />
               </div>
               <div className="product-body">
                  <h3 className="product-price">$32.50 <del className="product-old-price">$45.00</del></h3>
                  <div className="product-rating">
                     <i className="fa fa-star" />
                     <i className="fa fa-star" />
                     <i className="fa fa-star" />
                     <i className="fa fa-star" />
                     <i className="fa fa-star-o empty" />
                  </div>
                  <h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
                  <div className="product-btns">
                     <button className="main-btn icon-btn"><i className="fa fa-heart" /></button>
                     <button className="main-btn icon-btn"><i className="fa fa-exchange" /></button>
                     <button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart" /> Add to Cart</button>
                  </div>
               </div>
            </div>
            {/* /Product Single */}
          </div>
          <div>
                        {/* Product Single */}
            <div className="product product-single">
               <div className="product-thumb">
                  <div className="product-label">
                     <span className="sale">-20%</span>
                  </div>
                  <ul className="product-countdown">
                     <li><span>00 H</span></li>
                     <li><span>00 M</span></li>
                     <li><span>00 S</span></li>
                  </ul>
                  <button className="main-btn quick-view"><i className="fa fa-search-plus" /> Quick view</button>
                  <img src="assets/img/product07.jpg" alt="" />
               </div>
               <div className="product-body">
                  <h3 className="product-price">$32.50 <del className="product-old-price">$45.00</del></h3>
                  <div className="product-rating">
                     <i className="fa fa-star" />
                     <i className="fa fa-star" />
                     <i className="fa fa-star" />
                     <i className="fa fa-star" />
                     <i className="fa fa-star-o empty" />
                  </div>
                  <h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
                  <div className="product-btns">
                     <button className="main-btn icon-btn"><i className="fa fa-heart" /></button>
                     <button className="main-btn icon-btn"><i className="fa fa-exchange" /></button>
                     <button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart" /> Add to Cart</button>
                  </div>
               </div>
            </div>
            {/* /Product Single */}
          </div>
          <div>
                        {/* Product Single */}
            <div className="product product-single">
               <div className="product-thumb">
                  <div className="product-label">
                     <span className="sale">-20%</span>
                  </div>
                  <ul className="product-countdown">
                     <li><span>00 H</span></li>
                     <li><span>00 M</span></li>
                     <li><span>00 S</span></li>
                  </ul>
                  <button className="main-btn quick-view"><i className="fa fa-search-plus" /> Quick view</button>
                  <img src="assets/img/product07.jpg" alt="" />
               </div>
               <div className="product-body">
                  <h3 className="product-price">$32.50 <del className="product-old-price">$45.00</del></h3>
                  <div className="product-rating">
                     <i className="fa fa-star" />
                     <i className="fa fa-star" />
                     <i className="fa fa-star" />
                     <i className="fa fa-star" />
                     <i className="fa fa-star-o empty" />
                  </div>
                  <h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
                  <div className="product-btns">
                     <button className="main-btn icon-btn"><i className="fa fa-heart" /></button>
                     <button className="main-btn icon-btn"><i className="fa fa-exchange" /></button>
                     <button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart" /> Add to Cart</button>
                  </div>
               </div>
            </div>
            {/* /Product Single */}
          </div> 
        </Slider>

        </Fragment>
        );
    }
}
export default FeaturedProducts;  