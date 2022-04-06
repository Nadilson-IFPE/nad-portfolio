import React, { Component } from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

export default class NextJsCarousel extends Component {
  render() {
    return (
      <div className="container mx-auto px-4">
        <div className="item-center flex flex-col-reverse text-center lg:-mx-4 lg:flex lg:flex-row lg:space-x-5 lg:text-left">
          <div className="lg:mt-12 lg:px-4 ">
            <h1>Projetos</h1>
            <Carousel>
              <div>
                <img src="/badge01.png" alt="image1" />
                <p className="legend">Image 1</p>
              </div>
              <div>
                <img src="/badge02.png" alt="image2" />
                <p className="legend">Image 2</p>
              </div>
              <div>
                <img src="/badge03.png" alt="image3" />
                <p className="legend">Image 3</p>
              </div>
              <div>
                <img src="/badge04.png" alt="image4" />
                <p className="legend">Image 4</p>
              </div>
              <div>
                <img src="/badge05.png" alt="image5" />
                <p className="legend">Image 5</p>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    )
  }
}
