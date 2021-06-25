import React, {Component,Fragment} from 'react';

class MenuNav extends Component {

    render() {
        return (
            <Fragment>
              <div className="menu-nav">
                <span className="menu-header">Menu <i className="fa fa-bars" /></span>
                <ul className="menu-list">
                  <li><a href="index.html">Home</a></li>
                  <li><a href="products.html">About</a></li>
                  <li><a href="product-page.html">Contact</a></li>
                  <li><a href="checkout.html">Policy</a></li>
                  <li><a href="checkout.html">Refund</a></li>                  
                </ul>
              </div>
            </Fragment>
            
            );
        }
    }
export default MenuNav;            