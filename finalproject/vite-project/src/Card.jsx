import Slider from "react-slick";
import React, { useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Card.css'



function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function CardItem({ data,onClickView }) {
  const [image, setImage] = useState(data.img);
  return (
    <>
    <div className='Card' >
      <img src={image} className='card-img' onMouseOver={() => setImage(data.img1)}
      onMouseOut={() => setImage(data.img)} />
      <div className='card-text'>
        <p>{data.title}</p>
        <p>{data.price}</p>
      </div>
      <div className="after" onClick={onClickView}>Quick view</div>
    </div>
    </>
  );
}

function Card() {
  const [showQuick,setShowQuick] = useState(true)
  const [modalCardView,setCardModalView] =useState({ img: '', title: '', price: '' });
  const getCardModal = (img,title,price) =>{
    setCardModalView({ img, title, price });
    setShowListView(!showListView);
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
    <div className='card-slider'>
      <div className='Cards'>
        <Slider {...settings}>
          {data.map((d) => (
            <CardItem  key={d.id} data={d} onClickView={()=> {setShowQuick(!showQuick)
              getCardModal(d.img,d.title,d.price)}
            }/>
          ))}
        </Slider>
      </div>
    </div>

{
  !showQuick && <div className="quick-view">
  <div className="view-card">
        <div className="view-img">
          <img src={modalCardView.img} />
        </div>
        <div className="view-price">
            <h2>{modalCardView.title}</h2>
            <p>{modalCardView.price}</p>
            <p className="quantity">Quantity</p>
            <input type="number"/>
            <button>Add to cart</button>
        </div>
        <i className="fa-solid fa-xmark" onClick={()=>setShowQuick(!showQuick)}></i>
  </div>
</div>
}
    
    </>
  );
}

const data = [
  {
    id:0,
    img:`/src/img/jwl7.webp`,
    img1:`/src/img/jwl1.webp`,
    title:`Earnings`,
    price:`$19.99`
  },
  {
    id:1,
    img:`/src/img/jwl6.webp`,
    img1:`/src/img/jwl11.webp`,
    title:`Necklaces`,
    price:`$19.99`
  },
  {
    id:2,
    img:`/src/img/jwl8.webp`,
    img1:`/src/img/jwl16.webp`,
    title:`Earnings`,
    price:`$19.99`
  },
  {
    id:3,
    img:`/src/img/jwl5.webp`,
    img1:`/src/img/jwl14.webp`,
    title:`Bracelet`,
    price:`$19.99`
  },
  {
    id:4,
    img:`/src/img/jwl9.webp`,
    img1:`/src/img/jwl15.webp`,
    title:`Necklaces`,
    price:`$19.99`
  },
  {
    id:5,
    img:`/src/img/jwl10.webp`,
    img1:`/src/img/jwl17.webp`,
    title:`Necklaces`,
    price:`$19.99`
  },

]

export default Card


