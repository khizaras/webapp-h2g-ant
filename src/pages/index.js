import { Input } from 'antd'
import React from 'react'
import banner1 from '../assets/images/banners/banner-1.jpg'

const H2GHomePage = () => {
    return (

        <div className="site-layout-content">
            <div className='homepage-container'>
                <div className='banner'>
                    <div className='items'>
                        <img src={banner1} height={300} />
                    </div>
                </div>
                <div className='filter-section'>
                    <Input.Search type="text" placeholder="Search" />
                    
                </div>
                <div className='categories-container'>

                </div>
            </div>
        </div>

    )
}

export default H2GHomePage