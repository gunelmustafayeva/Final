import './AdvertiseSection.css'
import video1 from "./videos/jewerrly.mp4";


function AdvertiseSection(){
    return(
        <>
        <div className='advertising'>
        <div className='video'>
        <video autoPlay loop muted src={video1}/>
        </div>
         <div className='content'>
              <h2>Start a new chapter</h2>
              <p>It’s new and fits like it was made for you. With organic forms that are easy to style, our new PANDORA ESSENCE jewelry folds effortlessly into your look this summer.</p>
         </div>
      </div>
        </>
    )
}

export default AdvertiseSection