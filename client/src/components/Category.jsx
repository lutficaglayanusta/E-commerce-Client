import React from 'react'
import category from "../assets/images/Category Previews.png"
import category1 from "../assets/images/Category Previews2.png"
import category2 from "../assets/images/Category Previews3.png"
import category3 from "../assets/images/Category Previews1.png"

const Category = () => {
  return (
    <div className='container'>
          <h2 style={{textAlign:'center',margin:10,fontSize:30}}>Shop by category</h2>
          <a style={{textAlign:'center',display:'block'}} href="">Browse all categories</a>
      <ul className="category">
        <li>
          <img src={category} alt="" />
        </li>
        <li>
          <img src={category1} alt="" />
        </li>
        <li>
          <img src={category2} alt="" />
        </li>
        <li>
          <img src={category3} alt="" />
        </li>
          </ul>
    </div>
  )
}

export default Category
