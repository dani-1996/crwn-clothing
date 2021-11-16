import React, {useState} from 'react'
import {connect} from "react-redux"

import {createStructuredSelector} from "reselect"
import "./directory.styles.scss"
import MenuItem from '../menu-item/menu-item.component'

import { selectDirectorySections } from '../../redux/directory/directory.selector'

export const Directory = ({sections}) => {
  
    return (
        <div>
            <div className="directory-menu">
                {
                    sections.map( ({title, imageUrl, size, id,linkUrl})=>{
                       return (<MenuItem key={id} title={title} size={size} id={id} imageUrl={imageUrl} linkUrl={linkUrl} /> )        
                    } )
                }
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory)