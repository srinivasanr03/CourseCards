import React, { useEffect, useState } from "react";
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import Spinner from './components/Spinner';
import { apiUrl, filterData } from "./data";

import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// we have imported apiUrl because it contains all the json thing required to render the entire thing onto the webpage
// so to render the things from api we must hit the api we imported
// the thing is how we will be doing this 
// with the help of useEffect() hook we will be making the api calls 

const App = () => {

  const [courses, setCourses] = useState(null);
  const [loading,setLoading] = useState(true);

  async function fetchData(){

   setLoading(true);       // until we are fetching the api we should show loading screen to the user

    try{
      let respone = await fetch(apiUrl);
      let output = await respone.json();
      /// output----> will have to be stored inside courses variable created 
      setCourses(output.data);                                                                                    // i had not passed as output.data instead i just passed output , this resulted in an error saying forEach() is not a function because it has been caught at further somewhere in implementation of forEach loop
    }
    catch(error){
      toast.error("Network mai dikkat hai bro !");
    }

    setLoading(false);

  }

  useEffect( ()=>{
    fetchData();
  },[])

  // whtever the code we wrote above is only for fetching the required content and passing onto the other components for making use of it ------> all this is OK but what to show until the api is being fetched and processed [ so we have to make use of screen loaders ]

  return(
    <div>
      <div>
        <Navbar/>
      </div>

      <div>
        <Filter filterData={filterData}/>
      </div>

      {/* In this part of block we will not be always showing cards , we would also be showing loading animation while cards are being loaded [ we will do either of the tasks based on the value inside 'loading' variable ] */}
      {/* <div>                
        <Cards/>
      </div> */}

      <div>
        {
          loading?(<Spinner/>):(<Cards courses={courses}/>)     
        }
      </div>
      
    </div>
  );
  
};
export default App;
