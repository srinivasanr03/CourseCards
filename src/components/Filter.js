import React from 'react'

/*

const Filter = ({filterData}) => {
  return (
    <div>Filter</div>
  )
}

export default Filter     



// or we can make use of the below   */


const Filter = (props) => {

    let filterData = props.filterData;                               // i did not make use of let for declaring the filterData variable , so i got the error --------->error in react.js :"Cannot set property filterData of #<Object> which has only a getter    (i got this error because , i had imported filterData from './data' and tried to overwrite it with the respone i got from props)
                                                                                                                                                                       //TypeError: Cannot set property filterData of #<Object> which has only a getter"
                                                                                                                                                                        //he error message you're seeing in React.js, "Cannot set property filterData of #<Object> which has only a getter," typically occurs when you try to modify a property on an object that has only a getter defined, meaning it's a read-only property. In JavaScript, getters and setters are used to control access to an object's properties.
    return (
      <div>
        {
            filterData.map( (data)=>{
                return <button key={data.id}>{data.title}</button>
            })
        }
      </div>
    )
  }
  
  export default Filter
