import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

/**
* @author
* @function About
**/

const About = (props) => {

    const [ items, setItems ] = useState([])
    useEffect(() => {
        fetchItems()
    }, [])

    useEffect(() => {
        console.log(items)
    }, [items])

    const fetchItems = async () => {
        const data = await fetch("https://fortnite-api.com/v1/banners")
        // console.log(data)

        const dataitems = await data.json()
        console.log(dataitems.data)

        setItems(dataitems.data)

    }
  return(
      <div>
    <h2>About</h2>
    {items.map(item => (
        <h1 key={item.id}><Link to={`/about/${item.id}`}>{item.devName}</Link></h1>
        ))}
    </div>
)


}
export default About