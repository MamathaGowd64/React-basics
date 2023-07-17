import RestuarentCard from './Restuarent';
import resList from '../utils/mockData';
import { useState, useEffect } from 'react';
import Shimmer from './Shimmer';

//let arr=useState(resList);

const Body =()=>{
    const [listOfRestuarants, setListOfRestuarants]=useState([]);

    const [filteredRestaurant, setFilteredRestaurants] = useState([]);

    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
       // console.log("use effect");
    },[]);

    async function fetchData() {
            const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9209829&lng=77.61029309999999&page_type=DESKTOP_WEB_LISTING");
             const json=await data.json();
            // console.log(json);
             
             //optional chaining
             setListOfRestuarants(json?.data?.cards[2]?.data?.data?.cards);
             setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
             
    }

   console.log("render");
  // console.log(filteredRestaurant);

//Avoid rendering component or (Early return)
if(!listOfRestuarants) return null;

//if(filteredRestaurant.length === 0) return <h1>No Restuarent found!!!</h1>
    return (listOfRestuarants?.length === 0) ? <Shimmer/>:(
        <div className='body'>
            <div className="filter">
        <div className="searchtext">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          </div>
          <button
            onClick={() => {
              // Filter the restraunt cards and update the UI
              // searchText
              console.log(searchText);

              const filteredRestaurant = listOfRestuarants.filter((res) =>
                res.data.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurants(filteredRestaurant);
            }}
          >
            Search
          </button>
            <div className='search'>
            <button
        className='btn-top'
        onClick={() => {
            const data=listOfRestuarants.filter(
                (result)=>result.data.avgRating > 4
            );
               // console.log(data)
            setFilteredRestaurants(data);
        }}>Top Rated</button>                 
            </div>
           {/* console.log(filteredRestaurant); */}
            <div className='restro-container'>
                               {filteredRestaurant.map((res)=>
                (<RestuarentCard key={res.data.id} resData={res}/>))
             }
            
            </div>
        </div>
        </div>
    )
}

export default Body;