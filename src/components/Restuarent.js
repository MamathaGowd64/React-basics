import { IMG_URL } from "../utils/constants";

const Restuarent=(props)=>{
    const {resData } = props;
    //console.log(resData.data.name);
    return (
        <div className='res-card'>
            <img className='res-logo'
            alt="image"
            src={IMG_URL+resData.data.cloudinaryImageId}>
            </img>
        <h4>{resData.data.name}</h4> 
        <h4>{resData.data.cuisines.join(' ,')}</h4>      
        <h4>{resData.data.avgRating}</h4>    
        </div>
    );
};

export default Restuarent;