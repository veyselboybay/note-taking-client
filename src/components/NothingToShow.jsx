import React from 'react'
import { Row, Button } from 'react-bootstrap'

const NothingToShow = () => {
    return (
        <>
            <Row style={{ justifyContent: 'center', alignItems: 'center', height: '4rem', backgroundColor: 'lightyellow', fontWeight: 'bold' }} >You don't have any notes!</Row>
            <Row style={{ justifyContent: 'center', alignItems: 'center', height: '4rem', backgroundColor: 'lightyellow', fontWeight: 'bold' }} >
                <Button style={{ width: '10rem' }} variant='outline-primary'>Add New Note</Button>
            </Row>
        </>
    )
}

export default NothingToShow