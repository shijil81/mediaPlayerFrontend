import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { addVideoHistoryApi, deleteVideoApi } from '../services/allApi';



function VideoCard({video,setVideoStatus,isPresent}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() =>{
    setShow(true);

    const caption=video?.caption
    const url=video?.embedLink

    const time=new Date()

    const timeStamp=new Intl.DateTimeFormat("en-GB",{year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(time)
    console.log(timeStamp); 

    const reqBody={
      caption,url,timeStamp
    }

   const result= await addVideoHistoryApi(reqBody)
   console.log(reqBody);
  }
  

  const handledelete=async(id)=>{
    const result=await deleteVideoApi(id)
    setVideoStatus(result.data)
  }

  const videoDrag=(e,video)=>{
    // console.log('drag video details is',video);
    e.dataTransfer.setData("videoDetails",JSON.stringify(video))
  }
 
 
  return (
    <>
       <Card style={{ width: '100' }} draggable onDragStart={(e)=>videoDrag(e,video)} className='mt-4'>
      {!isPresent &&<Card.Img variant="top" onClick={handleShow} src={video?.imageUrl} height={'300px'}/>}
      
      <Card.Body>
        <div className='d-flex justify-content-between'>
          <Card.Text>{video?.caption}</Card.Text>
          {!isPresent &&<Button variant="primary" onClick={()=>handledelete(video?.id)}><FontAwesomeIcon icon={faTrashCan} /></Button>}
        </div>
      </Card.Body>
    </Card>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{video?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="480" src={`${video?.embedLink}?autoplay=1`} title="Ranam Title Track Video Song | Prithviraj Sukumaran | Rahman | Jakes Bejoy | Nirmal Sahadev" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default VideoCard
