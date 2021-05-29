import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

/**
* @author
* @function Item
**/

const Item = (props) => {


    const [ item, setItem ] = useState({})
    useEffect(() => {
        fetchItem()
    }, [])

    const fetchItem = async () => {
        console.log("fetching item with id")

    }
  return(
      <div>
        <h2>About Item</h2>
        <p>{JSON.stringify(item)}</p>
    </div>
)


}
export default Item