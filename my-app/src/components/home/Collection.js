import React, {Component,Fragment} from 'react';

class Collection extends Component {

    render() {
        return (
            <Fragment>
            {/* row */}
            <div className="row">
              {/* section title */}
              <div className="col-md-12">
                <div className="section-title">
                  <h2 className="title">SPECIAL COLLECTION</h2>
                </div>
              </div>
              {/* section title */}
              {/* Product Single */}
              <div className="col-md-3 col-sm-6 col-xs-6">
                <div className="product product-single">
                  <div className="product-thumb">
                    <button className="main-btn quick-view"><i className="fa fa-search-plus" /> Quick view</button>
                    <img src="assets/img/product04.jpg" alt="" />
                  </div>
                  <div className="product-body">
                    <h3 className="product-price">$32.50</h3>
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
              </div>
              {/* /Product Single */}
              {/* Product Single */}
              <div className="col-md-3 col-sm-6 col-xs-6">
                <div className="product product-single">
                  <div className="product-thumb">
                    <div className="product-label">
                      <span>New</span>
                    </div>
                    <button className="main-btn quick-view"><i className="fa fa-search-plus" /> Quick view</button>
                    <img src="assets/img/product03.jpg" alt="" />
                  </div>
                  <div className="product-body">
                    <h3 className="product-price">$32.50</h3>
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
              </div>
              {/* /Product Single */}
              {/* Product Single */}
              <div className="col-md-3 col-sm-6 col-xs-6">
                <div className="product product-single">
                  <div className="product-thumb">
                    <div className="product-label">
                      <span className="sale">-20%</span>
                    </div>
                    <button className="main-btn quick-view"><i className="fa fa-search-plus" /> Quick view</button>
                    <img src="assets/img/product02.jpg" alt="" />
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
              </div>
              {/* /Product Single */}
              {/* Product Single */}
              <div className="col-md-3 col-sm-6 col-xs-6">
                <div className="product product-single">
                  <div className="product-thumb">
                    <div className="product-label">
                      <span>New</span>
                      <span className="sale">-20%</span>
                    </div>
                    <button className="main-btn quick-view"><i className="fa fa-search-plus" /> Quick view</button>
                    <img src="assets/img/product01.jpg" alt="" />
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
              </div>
              {/* /Product Single */}
            </div>
            {/* /row */}
            </Fragment>
        );
    }
}
export default Collection;