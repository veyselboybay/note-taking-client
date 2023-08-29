import React from 'react'
import { Row, Button } from 'react-bootstrap'
import NewNote from './NewNote'

const NothingToShow = () => {
    return (
        <>
            <Row style={{ justifyContent: 'center', alignItems: 'center', height: '4rem', backgroundColor: 'lightyellow', fontWeight: 'bold' }} >You don't have any notes!</Row>
            <Row style={{ justifyContent: 'center', alignItems: 'center', height: '4rem', backgroundColor: 'lightyellow', fontWeight: 'bold' }} >
                <NewNote />
            </Row>
        </>
    )
}

export default NothingToShow