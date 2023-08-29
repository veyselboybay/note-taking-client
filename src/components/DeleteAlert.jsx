import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { FaRegTrashAlt } from 'react-icons/fa'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'


const DeleteAlert = ({ id }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const navigate = useNavigate()

    const baseUrl = import.meta.env.VITE_BASE_URL;
    const authToken = localStorage.getItem("auth-token");

    const handleDelete = async () => {
        const res = await axios.delete(baseUrl + "/notes/" + id + "/delete", {
            headers: {
                "Authorization": "Bearer " + authToken
            }
        })

        if (res.status === 204) {
            handleClose()
            window.location.reload()
        } else {
            toast.error(res.response.data.detail)
        }
    }

    return (
        <>
            <Button style={{ width: '10rem' }} variant="outline-primary" onClick={handleShow}>
                <FaRegTrashAlt />
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Do You Want To Delete It?</Modal.Title>
                </Modal.Header>
                <Modal.Footer style={{ justifyContent: 'space-around' }}>
                    <Button style={{ width: '10rem' }} variant="outline-danger" onClick={() => handleDelete()}>
                        Yes
                    </Button>
                    <Button style={{ width: '10rem' }} variant="outline-primary" onClick={handleClose}>
                        No
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default DeleteAlert