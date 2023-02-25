import React from 'react'


const Error404 = () => {
    return (
    <section className='content__error flex justify-center items-center'>
        <div className='content flex flex-col items-center'>
            <h2 className='content__h2'>Error 404 not found</h2>
            <p className='content__p'>The resource requested could not be found on this server!</p>
        </div>
    </section>
    )
}

export default Error404