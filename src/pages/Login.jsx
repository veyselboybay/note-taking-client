import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import axios from "axios"

const Login = () => {
    const navigate = useNavigate()
    const [credentials, setCredentials] = useState({ email: "", password: "" })
    const handleChange = (e) => {
        setCredentials(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }
    const base_url = import.meta.env.VITE_BASE_URL;
    const handleSubmit = (e) => {
        e.preventDefault()
        if (credentials.email == "" || credentials.password == "") {
            toast.error("Fill Out Required Fields")
            return
        }
        const formData = new FormData()
        formData.append("username", credentials.email)
        formData.append("password", credentials.password)
        axios.post(base_url + "/auth/login", formData).then(res => {
            localStorage.setItem("auth-token", res.data.access_token)
            setCredentials({ email: "", password: "" })
            toast.success("Logged In!")
        }).catch(err => toast.error(err.response.data.detail))
    }
    const token = localStorage.getItem("auth-token")
    useEffect(() => {
        if (token) {
            navigate("/")
        }
    }, [token])
    return (
        <div className="Auth-form-container">
            <form className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Sign In</h3>
                    <div className="form-group mt-3">
                        <label>Email address</label>
                        <input
                            type="email"
                            name="email"
                            className="form-control mt-1"
                            placeholder="Enter email"
                            value={credentials.email}
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            className="form-control mt-1"
                            placeholder="Enter password"
                            value={credentials.password}
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary" onClick={(e) => handleSubmit(e)}>
                            Submit
                        </button>
                    </div>
                    <p className="forgot-password text-right mt-2">

                    </p>
                </div>
            </form>
        </div>
    )
}

export default Login