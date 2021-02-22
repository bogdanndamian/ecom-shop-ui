import React from 'react'
import {withRouter} from 'react-router-dom'

import './menu-item.styles.scss'

// functional comp. because we don't need to to use a state
// destructuring  title from props
const MenuItem = ({title, imageUrl, size,history,linkUrl,match}) => (
    <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div
            className='background-image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
)
// withRouter
// --> HOC higher-order component function that modifies a component
// -->  this way we have access to Router history (and more) and avoid properties drilling through
// components that don't actually need them
export default withRouter(MenuItem);
