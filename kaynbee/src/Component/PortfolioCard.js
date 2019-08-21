import React, {Component} from 'react';
import { InfoConsumer } from "./context";

class PortfolioCard extends Component {
    render() {
        const {
            img1,
            img2,
            img3,
            img4,
            img5,
            img6,
            img7,
            img8,
            img9,
            img10,
            img11,
            img12,
            img13,
            img14,
            img15,
            img16,
            img17,
            img18,
            img19,
            img20,
        } = this.props.item;
        return (
            <InfoConsumer>
                {value => (
                    <div id="carouselIndicators" className="carousel slide" data-ride="carousel">
                      <div>
  <ol className="carousel-indicators">
    <li data-target="#carouselIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselIndicators" data-slide-to="1"></li>
    <li data-target="#carouselIndicators" data-slide-to="2"></li>
    <li data-target="#carouselIndicators" data-slide-to="3"></li>
    <li data-target="#carouselIndicators" data-slide-to="4"></li>
    <li data-target="#carouselIndicators" data-slide-to="5"></li>
    <li data-target="#carouselIndicators" data-slide-to="6"></li>
    <li data-target="#carouselIndicators" data-slide-to="7"></li>
    <li data-target="#carouselIndicators" data-slide-to="8"></li>
    <li data-target="#carouselIndicators" data-slide-to="9"></li>
    <li data-target="#carouselIndicators" data-slide-to="10"></li>
    <li data-target="#carouselIndicators" data-slide-to="11"></li>
    <li data-target="#carouselIndicators" data-slide-to="12"></li>
    <li data-target="#carouselIndicators" data-slide-to="13"></li>
    <li data-target="#carouselIndicators" data-slide-to="14"></li>
    <li data-target="#carouselIndicators" data-slide-to="15"></li>
    <li data-target="#carouselIndicators" data-slide-to="16"></li>
    <li data-target="#carouselIndicators" data-slide-to="17"></li>
    <li data-target="#carouselIndicators" data-slide-to="18"></li>
    <li data-target="#carouselIndicators" data-slide-to="19"></li>
    <li data-target="#carouselIndicators" data-slide-to="20"></li>

  </ol>
  <div className="carousel-inner w-100 mx-auto">
    <div className="carousel-item active">
      <img className="d-block   " src={img1} alt="First slide"  width="800" height="600"/>
    </div>
    
    <div className="carousel-item">
      <img className="d-block   " src={img2} alt="Second slide"  width="800" height="600"/>
    </div>
    <div className="carousel-item">
      <img className="d-block   " src={img3} alt="Third slide"  width="800" height="600"/>
    </div>
    <div className="carousel-item">
      <img className="d-block   " src={img4} alt="Fourth slide"  width="800" height="600"/>
    </div>
    <div className="carousel-item">
      <img className="d-block   " src={img5} alt="Fifth slide"  width="800" height="600"/>
    </div>
    <div className="carousel-item">
      <img className="d-block   " src={img6} alt="Sixth slide"  width="800" height="600"/>
    </div>
    <div className="carousel-item">
      <img className="d-block   " src={img7} alt="Seventh slide"  width="800" height="600"/>
    </div>
    <div className="carousel-item">
      <img className="d-block   " src={img8} alt="Eight slide"  width="800" height="600"/>
    </div>
    <div className="carousel-item">
      <img className="d-block   " src={img9} alt="Ninth slide"  width="800" height="600"/>
    </div>
    <div className="carousel-item">
      <img className="d-block   " src={img10} alt="Tenth slide"  width="800" height="600"/>
    </div>
    <div className="carousel-item">
      <img className="d-block   " src={img11} alt="Eleventh slide"  width="800" height="600"/>
    </div>
    <div className="carousel-item">
      <img className="d-block   " src={img12} alt="Twelfth slide"  width="800" height="600"/>
    </div>
    <div className="carousel-item">
      <img className="d-block   " src={img13} alt="Thirteenth slide" width="800" height="600"/>
    </div>
    <div className="carousel-item">
      <img className="d-block   " src={img14} alt="Fourteenth slide"  width="800" height="600"/>
    </div>
    <div className="carousel-item">
      <img className="d-block   " src={img15} alt="Fifteenth slide"  width="800" height="600"/>
    </div>
    <div className="carousel-item">
      <img className="d-block   " src={img16} alt="Sixteenth slide"  width="800" height="600"/>
    </div>
    <div className="carousel-item">
      <img className="d-block   " src={img17} alt="Seventeenth slide"  width="800" height="600"/>
    </div>
    <div className="carousel-item">
      <img className="d-block   " src={img18} alt="Eighteenth slide"  width="800" height="600"/>
    </div>
    <div className="carousel-item">
      <img className="d-block   " src={img19} alt="Nineteenth slide"  width="800" height="600"/>
    </div>
    <div className="carousel-item">
      <img className="d-block   " src={img20} alt="Twentieth slide"  width="800" height="600"/>
    </div>
    </div>
  </div>
 
  <a className="carousel-control-prev" href="#carouselIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>             
                )}
            </InfoConsumer>
        );
    }
}

export default PortfolioCard;