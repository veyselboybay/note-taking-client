import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'

const Home = () => {
    const navigate = useNavigate()
    useEffect(() => {
        if (!localStorage.getItem("auth-token")) {
            navigate("/login")
        }
    }, [])
    return (
        <div>Home</div>
    )
}

export default Home