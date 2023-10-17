import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const Shimmer = () => {
  return (
    <div className='shimmer'>
        <Skeleton count={5} height={200} width={300} />
        <Skeleton count={5} height={200} width={300}/>
        <Skeleton count={5} height={200} width={300}/>
        <Skeleton count={5} height={200} width={300}/>
        <Skeleton count={5} height={200} width={300}/>
        <Skeleton count={5} height={200} width={300}/>
        <Skeleton count={5} height={200} width={300}/>
        <Skeleton count={5} height={200} width={300}/>
        <Skeleton count={5} height={200} width={300}/>
    </div>
  )
}

export default Shimmer