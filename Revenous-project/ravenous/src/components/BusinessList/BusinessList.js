import React from 'react'
import './BusinessList.css'

import Business from '../Business/Business'

function BusinessList({ businesses }) {
    return (
        <div>
            {businesses.map(business => { return <Business business={business} key={business.id} /> })}

        </div>
    )
}

export default BusinessList