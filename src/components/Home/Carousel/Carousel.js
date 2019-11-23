import React from 'react'

// Images
import image1 from './assets/Parc des Buttes-Chaumont, Paris.jpg'
import image2 from './assets/central-park-woman.jpg'
import image3 from './assets/950368.jpg'


const Carousel = () => {

   return (
    <> 
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={image1} className="d-block w-100" alt="avatar" />
          </div>
          <div className="carousel-item">
            <img src={image2} className="d-block w-100" alt="avatar" />
          </div>
          <div className="carousel-item">
            <img src={image3} className="d-block w-100" alt="avatar" />
          </div>
        </div>
      <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
      </a>
      </div>

      {/* content */}
      <div className="container marketing">
      {/* <!-- Three columns of text below the carousel --> */}
      <div className="row">
        <div className="col-lg-4">
          <h2>Topic</h2>
          <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
        </div>
          {/* <!-- /.col-lg-4 --> */}
        <div className="col-lg-4">
          <h2>Topic</h2>
          <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
        </div>
          {/* <!-- /.col-lg-4 --> */}
        <div className="col-lg-4">
          <h2>Topic</h2>
          <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
        </div>
        </div>
      </div>
    </>  
   )

}



export default Carousel; 