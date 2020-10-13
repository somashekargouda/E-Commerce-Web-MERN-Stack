import React from 'react'
import { API } from '../../backend'


const ImageHelper = ({product}) => {
    const imageurl = product ? `${API}/product/photo/${product._id}`  : `https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png`
    return (
        
        <div className="rounded border border-success">
        <img
          src= {imageurl}
          alt="photo"
          style={{ maxHeight: "50%", maxWidth: "100%" }}
          className="mb-3 rounded"
        />
      </div>
    )
}

export default ImageHelper
