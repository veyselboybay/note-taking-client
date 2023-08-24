import React, { useState } from 'react'
import { toast } from 'react-toastify'

const Register = () => {
    const [credentials, setCredentials] = useState({ email: "", password: "" })
    const handleChange = (e) => {
        setCredentials(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        toast.success("Registered!")
        setCredentials({ email: "", password: "" })
    }
    return (
        <div className="Auth-form-container">
            <form className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Sign Up</h3>
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

export default Register