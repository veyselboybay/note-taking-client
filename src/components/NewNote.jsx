import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const NewNote = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                            <Form.Control type="test" placeholder="Friday Plan ..." />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="content.id">
                            <Form.Label>Content</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder='Meet with friends at ...' />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default NewNote