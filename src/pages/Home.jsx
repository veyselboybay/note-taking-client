import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'

const Home = () => {
    const navigate = useNavigate()
    const token = localStorage.getItem("auth-token")
    useEffect(() => {
        if (!token) {
            navigate("/login")
        }
    }, [token])
    return (
        <div>Home</div>
    )
}

export default Home