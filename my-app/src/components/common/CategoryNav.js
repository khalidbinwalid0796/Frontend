import React, {Component,Fragment} from 'react';

class CategoryNav extends Component {

    render() {
        return (
            <Fragment>
              <div className="category-nav ">
                <span className="category-header">Categories <i className="fa fa-list" /></span>
                <ul className="category-list">
                  <li className="dropdown side-dropdown">
                    <a className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">Women’s Clothing <i className="fa fa-angle-right" /></a>
                    <div className="custom-menu">
                      <div className="row ">
                        <div className="col-md-4">
                          <ul className="list-links">
                            <li>
                              <h3 className="list-links-title">Sub Categories</h3></li>
                            <li><a href="#">Women’s Clothing</a></li>
                            <li><a href="#">Men’s Clothing</a></li>
                            <li><a href="#">Phones &amp; Accessories</a></li>
                            <li><a href="#">Jewelry &amp; Watches</a></li>
                            <li><a href="#">Bags &amp; Shoes</a></li>
                          </ul>
                          <hr className="hidden-md hidden-lg" />
                        </div>
                      </div>
                    </div>
                  </li>
                  <li><a href="#">Men’s Clothing</a></li>
                  <li><a href="#">Computer &amp; Office</a></li>
                  <li><a href="#">Consumer Electronics</a></li>
                  <li><a href="#">Bags &amp; Shoes</a></li>
                </ul>
              </div>
            </Fragment>
            
            );
        }
    }
export default CategoryNav;            