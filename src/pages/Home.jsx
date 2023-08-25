import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import axios from 'axios'
import { Container, Row, Button } from 'react-bootstrap'
import NothingToShow from '../components/NothingToShow'
import SingleNote from '../components/SingleNote'
import Dropdown from 'react-bootstrap/Dropdown';
import { FiFilter } from 'react-icons/fi'

const Home = () => {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const navigate = useNavigate()
    const [state, setState] = useState(null)
    const [filter, setFilter] = useState("All")
    const token = localStorage.getItem("auth-token")
    useEffect(() => {
        if (!token) {
            navigate("/login")
        }
    }, [token])
    useEffect(() => {
        if (token) {
            getNotes()
        }
    }, [])
    const getNotes = async () => {
        await axios.get(baseUrl + "/notes", {
            headers: {
                "Authorization": 'Bearer ' + token
            }
        }).then(res => {
            setState(res.data.reverse())
        }).catch(err => console.log(err))
    }

    return (
        <Container>
            {state !== null && state.length !== 0 && <Row style={{ padding: '10px 50px', justifyContent: 'space-between' }}>
                <Dropdown style={{ width: '10rem' }} onSelect={(e) => setFilter(e)}>
                    <Dropdown.Toggle variant="outline-success" id="dropdown-basic">
                        <FiFilter /> Filter By {filter}
                    </Dropdown.Toggle>

                    <Dropdown.Menu >
                        <Dropdown.Item eventKey="All">All</Dropdown.Item>
                        <Dropdown.Item eventKey="Status-Active">By Status - Active</Dropdown.Item>
                        <Dropdown.Item eventKey="Status-Complete">By Status - Completed</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Button style={{ width: '10rem' }} variant='outline-primary'>+ New Note</Button>
            </Row>}
            {state !== null && filter === 'All' && state.map(item => <SingleNote key={item.id} {...item} />)}
            {state !== null && filter === 'Status-Active' && state.filter(item => item.isComplete === false).map(item => <SingleNote key={item.id} {...item} />)}
            {state !== null && filter === 'Status-Complete' && state.filter(item => item.isComplete === true).map(item => <SingleNote key={item.id} {...item} />)}
            {state == null || state.length == 0 && <NothingToShow />}
        </Container>
    )
}

export default Home