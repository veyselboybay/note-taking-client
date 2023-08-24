import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import axios from 'axios'
import { Container, Row, Button } from 'react-bootstrap'
import NothingToShow from '../components/NothingToShow'

const Home = () => {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const navigate = useNavigate()
    const [state, setState] = useState(null)
    const token = localStorage.getItem("auth-token")
    useEffect(() => {
        if (!token) {
            navigate("/login")
        }
    }, [token])
    useEffect(() => {
        getNotes()
    }, [])
    const getNotes = async () => {
        await axios.get(baseUrl + "/notes", {
            headers: {
                "Authorization": 'Bearer ' + token
            }
        }).then(res => {
            setState(res.data)
        }).catch(err => console.log(err))
    }

    return (
        <Container>
            <Row style={{ justifyContent: 'end', padding: '10px 50px' }}>
                <Button style={{ width: '10rem' }} variant='outline-primary'>+ New Note</Button>
            </Row>
            {state !== null && state.map(item => <p key={item.id}>{item.title}</p>)}
            {state == null || state.length == 0 && <NothingToShow />}
        </Container>
    )
}

export default Home