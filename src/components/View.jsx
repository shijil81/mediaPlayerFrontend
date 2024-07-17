import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { getAllVideoApi, updateCategoryApi } from '../services/allApi'

function View({addVideoStatus,setDragOut}) {
  const[allVdeo,setAllVideo]=useState([])
  const[deleteVideoStatus,setVideoStatus]=useState([])

  const getAllVideos=async()=>{
    const result=await getAllVideoApi()
    // console.log(result);
    setAllVideo(result.data)
  }
  // console.log(allVdeo);

  const dragOver=(e)=>{
    e.preventDefault()
  }

  const videoDrop=async(e)=>{
    const result=JSON.parse(e.dataTransfer.getData("dataShare"))
    console.log(result);

    const selectedCategory=result.categoryDetails

    const newDetails=selectedCategory.allVideos.filter((item)=>item.id!=result.videoId)
    console.log(newDetails);

    const reqBody={
      categoryName:selectedCategory.categoryName,
      allVideos:newDetails,
      id:selectedCategory.id
    }

    const response=await updateCategoryApi(selectedCategory.id,reqBody)
    console.log(response);
    if(response.status>=200 && response.status<300){
      setDragOut(true)
    }

  }

  useEffect(()=>{
    getAllVideos()
  },[addVideoStatus,deleteVideoStatus])

  return (
    <>
      <div className="row w-100" droppable onDragOver={(e)=>dragOver(e)} onDrop={(e)=>videoDrop(e)}>
        <h4>All Videos</h4>
        {allVdeo?allVdeo?.map((item)=>(<div className="col-md-3 mt-4">
          <VideoCard video={item} setVideoStatus={setVideoStatus}/>
        </div>))
        
          :
          <p className='text-danger fs-5 mt-5'>Nothing to display</p>}
      </div>
     
    </>
  )
}

export default View
