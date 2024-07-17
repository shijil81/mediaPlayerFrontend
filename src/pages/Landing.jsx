import React from 'react'
import { Col, Row, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <>
      <Row className='w-100 mt-5 d-flex justify-content-center align-items-center ps-4'>
        <Col md={1}></Col>
        <Col md={5} className='p-3'>
          <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
          <p style={{ textAlign: 'justify' }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel aperiam, consequuntur laboriosam id laborum, maxime veniam provident placeat sed atque necessitatibus totam voluptatibus, pariatur excepturi. Dolores distinctio sint veniam quisquam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias molestiae magnam consequatur error. Dignissimos perferendis magni enim, deserunt, perspiciatis excepturi eveniet culpa dolorum dolor, dolorem harum! Blanditiis quidem veritatis modi?</p>
         <Link to={'/home'}> <button className='btn btn-warning mt-5'>Get started</button></Link>
        </Col>
        <Col md={1}></Col>
        <Col md={5} className='d-flex justify-content-center align-items-center p-5'>
          {/* <img src="https://i.pinimg.com/originals/33/a4/6f/33a46f727dbe790d436616a1f56fce9c.gif" alt="no image" className='w-75'/> */}
          <img src="https://i.pinimg.com/originals/c6/c1/1d/c6c11d8ba0b9f26caf0a6a8ee3a3e78e.gif" alt="no image" className='w-75' />
        </Col>
      </Row>

      <div className="container">
        <h3 className='text-center my-5'>Features</h3>
        <Row>
          <Col md={1}></Col>
          <Col md={3}>
            <Card style={{ width: '100%' }} className='p-3 mt-3'>
              <Card.Img variant="top" src="https://i.pinimg.com/originals/43/b7/e9/43b7e94dac162ec1543b0a861d012564.gif" style={{height:'350px'}}/>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className='px-md-5'>
            <Card style={{ width: '100%' }} className='p-3 mt-3'>
              <Card.Img variant="top" src="https://i.pinimg.com/originals/64/53/24/645324641a0555cc55cea87787fc0bcb.gif" style={{height:'350px'}}/>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card style={{ width: '100%'}} className='p-3 mt-3'>
              <Card.Img variant="top" src="https://i.pinimg.com/originals/94/42/8e/94428ef744efa45fc55197ad30a5f5a4.gif" style={{height:'350px'}}/>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={1}></Col>
        </Row>
      </div>

      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10 border border-secondary p-3 mt-5 border-2  rounded">
              <div className="row p-4">
                  <div className="col-md-6">
                    <h3 className='text-warning'>Simple fast and PowerFul</h3>
                    <p className='mt-5'><span className='fs-5'>Play Everithing </span>: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, dolores aliquid dolorum quas perferendis distinctio est sapiente nam facere enim voluptates omnis</p>
                    <p><span className='fs-5'>Play Everithing </span>: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, dolores aliquid dolorum quas perferendis distinctio est sapiente nam facere enim voluptates omnis</p>
                    <p><span className='fs-5'>Play Everithing </span>: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, dolores aliquid dolorum quas perferendis distinctio est sapiente nam facere enim voluptates omnis</p>
                  </div>
                  <div className="col-md-6">
                  <iframe width="100%" height="400" src="https://www.youtube.com/embed/RCXzH27eOIA" title="Velai Illa Pattadhaari #D25 #VIP - Udhungada Sangu | Full Video Song" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                  </div>
              </div>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
    </>
  )
}

export default Landing

