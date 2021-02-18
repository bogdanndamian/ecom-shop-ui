import React from 'react'
import './menu-item.styles.scss'

// functional comp. because we don't need to to use a state
// destructuring  title from props
const MenuItem = ({title, imageUrl, size}) => (
    <div style={{
        backgroundImage: `url(${imageUrl})`
    }}
         className={`${size} menu-item`}>
        <div className='content'>
            <h1 className='title'>{title}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
)
export default MenuItem;
