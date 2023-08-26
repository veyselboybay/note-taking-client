import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import { BsFillCalendar2DateFill } from 'react-icons/bs'
import { FaRegTrashAlt } from 'react-icons/fa'

const SingleNote = ({ id, title, content, created_at, isComplete }) => {

    const date = new Date(created_at)

    return (
        <Card className='note-card'>
            <Row className='single-note-row'>
                <Col className='title-col'>{title}</Col>
                <Col md={3} className='date-col' style={{ textAlign: 'center' }}><BsFillCalendar2DateFill /> {date.toLocaleDateString()}</Col>
                <Col md={2} className='active-col' style={{ textAlign: 'center', backgroundColor: isComplete ? 'orange' : 'lightgreen' }}>{isComplete ? 'Completed' : 'Active'}</Col>
            </Row>
            <Row className='single-note-row'>
                <Col>
                    <p className='note-content'>{content}</p>
                </Col>
                <Col md={2}>
                    <Row className='delete-col'><FaRegTrashAlt /></Row>
                    <Row className='change-status-col'>change status</Row>
                </Col>
            </Row>
        </Card>
    )
}

export default SingleNote