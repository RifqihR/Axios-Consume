import React from 'react'
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';

export default function SideContent() {
  return (
    <div className='SideContainer'>
        <div>
        <RestaurantMenuIcon/>
        </div>
        <div>
            <p className='Sidetext'>Our Speciality</p>
            <p lassName='Sidetext'>Jan 8,2023</p>
        </div>
    </div>
  )
}
