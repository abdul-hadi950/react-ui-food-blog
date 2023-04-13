import React from 'react'


const Cards = ({ id, img, title, description }) => {
    return (
        <>

            <div className='card' key={id}>
                <div className='card-img'><img src={img} alt='' /></div>
                <div className='card-content'>
                    <div className='card-title'>{title}</div>
                    <div className='card-descr'>{description}</div>
                    <div className='card-read-more'>
                        <div className='card-read-more-text'>Read More</div>
                    </div>
                </div>
            </div>

        
        </>
    )
}

export default Cards