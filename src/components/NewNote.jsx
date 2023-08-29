import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { toast } from 'react-toastify'


const NewNote = () => {
    const [show, setShow] = useState(false);
    const [newNote, setNewNote] = useState({ title: "", content: "" })


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const baseUrl = import.meta.env.VITE_BASE_URL;
    const authToken = localStorage.getItem("auth-token");

    const handleChange = (e) => {
        setNewNote(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleAdd = async () => {
        const res = await axios.post(baseUrl + "/notes/create", newNote, {
            headers: {
                "Authorization": "Bearer " + authToken
            }
        })

        console.log(res)

        if (res.status === 201) {
            handleClose()
            window.location.reload()
        } else {
            toast.error(res.response.data.detail)
        }
    }

    return (
        <>
            <Button style={{ width: '10rem' }} variant="outline-primary" onClick={handleShow}>
                + New Note
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>New Note</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="title.id">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="test" name='title' placeholder="Friday Plan ..." onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="content.id">
                            <Form.Label>Content</Form.Label>
                            <Form.Control as="textarea" rows={3} name='content' placeholder='Meet with friends at ...' onChange={handleChange} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-primary" onClick={() => handleAdd()}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default NewNote