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
                    <div className="carousel slide" id="carouselIndicators" data-ride="carousel" data-interval="500">
                      <div>
  <ul className="carousel-indicators">
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
  </ul>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="img-responsive center-block" src={img1} alt="First slide"  />
    </div>
    
    <div className="carousel-item">
      <img className="img-responsive center-block" src={img2} alt="Second slide"  />
    </div>
    <div className="carousel-item">
      <img className="img-responsive center-block" src={img3} alt="Third slide"  />
    </div>
    <div className="carousel-item">
      <img className="img-responsive center-block" src={img4} alt="Fourth slide"  />
    </div>
    <div className="carousel-item">
      <img className="img-responsive center-block" src={img5} alt="Fifth slide"  />
    </div>
    <div className="carousel-item">
      <img className="img-responsive center-block" src={img6} alt="Sixth slide"  />
    </div>
    <div className="carousel-item">
      <img className="img-responsive center-block" src={img7} alt="Seventh slide"  />
    </div>
    <div className="carousel-item">
      <img className="img-responsive center-block" src={img8} alt="Eight slide"  />
    </div>
    <div className="carousel-item">
      <img className="img-responsive center-block" src={img9} alt="Ninth slide"  />
    </div>
    <div className="carousel-item">
      <img className="img-responsive center-block" src={img10} alt="Tenth slide"  />
    </div>
    <div className="carousel-item">
      <img className="img-responsive center-block" src={img11} alt="Eleventh slide"  />
    </div>
    <div className="carousel-item">
      <img className="img-responsive center-block" src={img12} alt="Twelfth slide"  />
    </div>
    <div className="carousel-item">
      <img className="img-responsive center-block" src={img13} alt="Thirteenth slide" />
    </div>
    <div className="carousel-item">
      <img className="img-responsive center-block" src={img14} alt="Fourteenth slide"  />
    </div>
    <div className="carousel-item">
      <img className="img-responsive center-block" src={img15} alt="Fifteenth slide"  />
    </div>
    <div className="carousel-item">
      <img className="img-responsive center-block" src={img16} alt="Sixteenth slide"  />
    </div>
    <div className="carousel-item">
      <img className="img-responsive center-block" src={img17} alt="Seventeenth slide"  />
    </div>
    <div className="carousel-item">
      <img className="img-responsive center-block" src={img18} alt="Eighteenth slide"  />
    </div>
    <div className="carousel-item">
      <img className="img-responsive center-block" src={img19} alt="Nineteenth slide"  />
    </div>
    <div className="carousel-item">
      <img className="img-responsive center-block" src={img20} alt="Twentieth slide"  />
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