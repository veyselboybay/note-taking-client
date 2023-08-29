import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import { BsFillCalendar2DateFill } from 'react-icons/bs'
import { FaRegTrashAlt } from 'react-icons/fa'
import { toast } from 'react-toastify'
import DeleteAlert from './DeleteAlert'
import axios from 'axios';

const SingleNote = ({ id, title, content, created_at, isComplete }) => {

    const date = new Date(created_at)
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const authToken = localStorage.getItem("auth-token");

    const changeStatus = async () => {
        const newStatus = {
            "isComplete": !isComplete
        }
        const res = await axios.put(baseUrl + "/notes/" + id + "/update", newStatus, {
            headers: {
                "Authorization": "Bearer " + authToken
            }
        }).catch(err => toast.error(err.response.data.detail))

        if (res.status === 200) {
            window.location.reload()
        }
    }

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
                    <Row className='delete-col'><DeleteAlert id={id} /></Row>
                    <Row className='change-status-col' onClick={() => changeStatus()}>change status</Row>
                </Col>
            </Row>
        </Card>
    )
}

export default SingleNote