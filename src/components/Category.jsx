import React, { useEffect } from 'react'
import VideoCard from './VideoCard'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addCategoryApi, getAllCategoryApi, removeCategoryApi, updateCategoryApi } from '../services/allApi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Category({dragOut,setDragOut}) {
  const [show, setShow] = useState(false);
  const [categoryName,setCategoryName]=useState("")
  const [allcategory,setAllCategory]=useState("")
  const [addStatus,setAddStatus]=useState(false)
  const [updateStatus,setupdateStatus]=useState(false)

  const handleClose = () =>{
    setShow(false)
    setCategoryName("")
  } 
  const handleShow = () => setShow(true);

  // console.log(categoryName);

  const handleCategoryAdd=async()=>{
    if(categoryName){
      const reqBody ={
        categoryName,
        allVideos:[]
      }
  
      const result=await addCategoryApi(reqBody)
      console.log(result);
      if(result.status>=200 && result.status<300){
        setCategoryName("")
        handleClose()
        toast.info('Category added successfully')
        setAddStatus(true)
      }

    }else{
      toast.error('please add a category Name')
    }
  
    
  }

  const getcategory=async()=>{
    const result=await getAllCategoryApi()
    setAllCategory(result.data)
  }
// console.log(allcategory);

const handledelete=async(id)=>{
  await removeCategoryApi(id)
  setAddStatus(true)
}

const dragOver=(e)=>{
  e.preventDefault()
}

const VideoDrop=async(e,selectedCategory)=>{
  //selected category
  console.log('category Id is: ',selectedCategory);
  //dragged video details
  const vDetails=JSON.parse(e.dataTransfer.getData("videoDetails"))
  // console.log(vDetails);
  //add video details in selected category

  if(selectedCategory.allVideos.find(item=>item.id==vDetails.id)){
    alert('Video already in category')
  }else{
    selectedCategory.allVideos.push(vDetails)

    const result= await updateCategoryApi(selectedCategory.id,selectedCategory)

    alert('Video added successfully')

    console.log(result);
  
    setupdateStatus(true)
  }
  // console.log(selectedCategory);

 

}

const ondrag=(e,videoId,categoryDetails)=>{
  console.log(videoId,categoryDetails);
  const dataShare={videoId,categoryDetails}
  e.dataTransfer.setData("dataShare",JSON.stringify(dataShare))
}




  useEffect(()=>{
    setAddStatus(false)
    setupdateStatus(false)
    setDragOut(false)
    getcategory()
  },[addStatus,updateStatus,dragOut])


  return (
    <>
    <h5 className='mt-5 mt-md-0'>Category</h5>

    <button className='btn btn-warning w-100 mt-4'  onClick={handleShow}>Add Category</button>

      {allcategory?.length>0? allcategory?.map((item)=>(
       <div className='p-3 border rounded mt-4' droppable onDragOver={(e)=>dragOver(e)} onDrop={(e)=>VideoDrop(e,item)}>  
        <div className='d-flex justify-content-between'>
          <p className='mb-4'>{item.categoryName}</p>
         <button className='btn btn-danger' onClick={()=>handledelete(item.id)}><FontAwesomeIcon icon={faTrashCan} /></button>
        </div>
        {item?.allVideos?.length>0?
        item?.allVideos?.map((video)=>(
        <div draggable onDragStart={(e)=>ondrag(e,video.id,item)}><VideoCard video={video} isPresent={true}/></div>
        )):null}
       </div>
        
      ))
    :
    <p className='text-danger mt-5'>No category add yet</p>
    }
    

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className='p-3 border rounded'>
            <input type="text" className='form-control' placeholder='Category Name' onChange={(e)=>setCategoryName(e.target.value)}/>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleCategoryAdd}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer position="top-center" theme="light" autoClose={2000} />
    </>
  )
}

export default Category
