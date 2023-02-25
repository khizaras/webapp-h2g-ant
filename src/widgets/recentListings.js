import { Col, Row, Typography } from 'antd'
import { set } from 'lodash'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { getRecentListings } from '../api/listings'
import { updateListings } from '../store/reducers/recentListings'
import './recentListings.less'


const H2GRecentListings = () => {
    const recentListings = useSelector(state => state.recentListings)
    const [state, setState] = useState({
        isLoaded: false,
    })
    const dispatch = useDispatch()
    useEffect(() => {
        if (!recentListings.isLoaded) {
            getRecentListings().then((listings) => {
                dispatch(updateListings(
                    [...listings.food,
                    ...listings.clothes]
                ))
                setState({ isLoaded: true })
            })
        } else {
            setState({ isLoaded: true })
        }

    }, [recentListings])

    return (
        <section className='recent-listings'>
            <div className='container'>
                <Row gutter={[16, 16]} justify='center' align='top'>
                    {
                        state.isLoaded && recentListings.data.map((listing, index) => {
                            return (<Listings listing={listing} key={index} />)
                        })
                    }
                </Row>
            </div>
        </section>
    )
}

export default H2GRecentListings




export const Listings = ({ listing, key }) => {
    return (
        <Col xxl={6} xl={6} lg={6} md={4} sm={12} xs={22}  >
            <div className='listing' key={key}>
                <div className='listing-image' style={{ backgroundSize: 'cover', backgroundImage: `url(${listing.images.length && listing.images[0]})` }}>

                </div>
                <div className='listing-content'>
                    <Typography.Title ellipsis={{ rows: 2, suffix: '...' }} level={4}>{listing.title}</Typography.Title>
                    <Typography.Text >{listing.description}</Typography.Text>
                </div>
            </div>
        </Col>
    )
}