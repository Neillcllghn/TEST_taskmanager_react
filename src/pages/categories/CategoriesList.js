import React from 'react'
import { Col, Row } from 'react-bootstrap';



function CategoriesList() {
  return (
    <Row className='h-100'>
        <Col className='py-2 p-0 p-lg-2' lg={8}>
            <p>List of Categories mobile</p>
            <p>List of Categories displayed here</p>
        </Col>
        <Col className='d-none d-lg-block p-0 p-lg-2' md={4}>
            <p>List of Categories desktop</p>
        </Col>
    </Row>
  )
}

export default CategoriesList;