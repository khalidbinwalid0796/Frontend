import React, {Component,Fragment} from 'react';
import TopNav from "../components/common/TopNav";
import MenuNav from "../components/common/MenuNav";
import CategoryNav from "../components/common/CategoryNav";
import HomeSlider from "../components/home/HomeSlider";
import FeaturedProducts from "../components/home/FeaturedProducts";
import NewArrival from "../components/home/NewArrival";
import Collection from "../components/home/Collection";
import Footer from "../components/common/Footer";

class HomePage extends Component {

    render() {
        return (
          <Fragment>

            <TopNav/>

            <div id="navigation">
              <div className="container">
                <div id="responsive-nav">
                  <CategoryNav/>
                  <MenuNav/>
                </div>
              </div>
            </div>

            <div id="home">
        {/* container */}
        <div className="container">
          {/* home wrap */}
          <div className="home-wrap">
            {/* home slick */}
            <div id="home-slick">
            <HomeSlider/>
          </div>
            </div>
            </div>
            </div>
            
            <div className="section">
              <div className="container">
                  <FeaturedProducts/>
              </div>
            </div>

          <div className="section">
            <div className="container">
                <NewArrival/>
                <Collection/>
            </div>
          </div>
          <Footer/>
        </Fragment>
        );
    }
}
export default HomePage;