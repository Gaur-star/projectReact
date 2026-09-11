import { Form } from "react-bootstrap";
import { useState } from "react";



function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleLogin(e) {
        e.preventDefault();

        console.log("Email:", email);
        console.log("Password:", password);
    }

    return (
        <>
            <div className="container">
                <div className="row justify-content-center mt-5">

                    <div className="col-md-5">

                        <div className="card shadow">

                            <div className="card-body p-4">

                                <h2 className="text-center mb-4">
                                    Login
                                </h2>

                                <form onSubmit={handleLogin}>

                                    {/* Email */}
                                    <div className="mb-3">
                                        <label className="form-label">
                                            Email
                                        </label>

                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Enter your email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>

                                    {/* Password */}
                                    <div className="mb-3">
                                        <label className="form-label">
                                            Password
                                        </label>

                                        <input
                                            type="password"
                                            className="form-control"
                                            placeholder="Enter your password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                    </div>

                                    {/* Remember me */}
                                    <div className="mb-3 form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="remember"
                                        />

                                        <label
                                            className="form-check-label"
                                            htmlFor="remember"
                                        >
                                            Remember me
                                        </label>
                                    </div>

                                    {/* Login button */}
                                    <button
                                        type="submit"
                                        className="btn btn-primary w-100"
                                    >
                                        Login
                                    </button>

                                </form>

                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </>


    );
}

export default Login;