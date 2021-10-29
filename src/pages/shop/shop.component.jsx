import React,{useState} from 'react'

import PreviewCollection from "../../components/preview-collection/preview-collection.component"
import SHOP_DATA from './shop.data'

const ShopPage = () => {
    const [collections, setCollections] = useState(SHOP_DATA)

    return (
        <div className="shop-page">
          {collections.map( ({id, ...otherCollectionProps})=> (
              <PreviewCollection key={id} {...otherCollectionProps}/>
          ) )}
        </div>
    )
}

export default ShopPage
