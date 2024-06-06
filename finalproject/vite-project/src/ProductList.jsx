import { useState } from 'react'
import './ProductList.css'
import { useDispatch } from 'react-redux';
import { addProduct } from '/src/slices/productsSlice'

function ListItem({list,onClickView}){
  const [listImage,setListImage] = useState(list.img)  
  return(
    <>
      <div className='product-info'>
                  <img src={listImage} onMouseOver={()=>setListImage(list.img1)} onMouseOut={()=>setListImage(list.img)} />
                  <div className='product-text'>
                    <p>{list.title}</p>
                    <p>{list.price}</p>
                  </div>
                <div className="product-after" onClick={onClickView}>Quick view</div>
      </div>
    </>
  )
}

function ProductList(){
  const [showListView,setShowListView] = useState(true)
  const [modalView,setModalView] =useState({ img: '', title: '', price: '' });
  const getModal = (img,title,price,id) =>{
    setModalView({ img, title, price,id });
    setShowListView(!showListView);
  }
  const dispacth = useDispatch();
  const handleAddProduct = (modalView) =>{
    dispacth(addProduct(modalView))
    console.log(addProduct())
  }
    return(
        <>
    <div className='product-list'>
          <div className='list'>
            {
              products.map((list) =>(
                <ListItem key={list.id} list={list}  onClickView={() => 
                    getModal(list.img,list.title,list.price,list.id)
                }/>
              ) ) }
          </div>
      </div>

{
  !showListView &&  <div className="quick-view" key={modalView.id}>
  <div className="view-card">
        <div className="view-img">
          <img src={modalView.img}/>
        </div>
        <div className="view-price">
            <h2>{modalView.title}</h2>
            <p>{modalView.price}</p>
            <p className="quantity">Quantity</p>
            <input type="number" placeholder='1'/>
            <button onClick={() => handleAddProduct(modalView)}>Add to cart</button>
        </div>
        <i className="fa-solid fa-xmark" onClick={()=>setShowListView(true)}></i>
  </div>
</div>
}</>)}


const products = [
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
    price:`$29.99`
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
  {
    id:6,
    img:`/src/img/jwl18.webp`,
    img1:`/src/img/jwl17.webp`,
    title:`Necklaces`,
    price:`$19.99`
  },
  {
    id:7,
    img:`/src/img/jwl19.webp`,
    img1:`/src/img/jwl17.webp`,
    title:`Bracelet`,
    price:`$19.99`
  },

]



export default ProductList

