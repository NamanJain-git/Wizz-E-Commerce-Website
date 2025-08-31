import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {

    const [login, setlogin] = useState(true);
    const [formData, setFormData] = useState({
        username: "",
        phone: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const navigate = useNavigate()
    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { username, phone, email, password, confirmpassword } = formData;

        if (!email || !password) {
            return alert("Please fill all required fields");
        }

        if (!login) {

            if (!username || !phone) {
                return alert("Please fill all required fields");
            }

            if (password !== confirmpassword) {
                return alert("Password do not match");
            }

            const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

            const existingEmail = existingUsers.some((user) => user.email === email);
            if (existingEmail) {
                return alert("Email exist Try with other email");
            }

            const newUser = { username, phone, email, password };
            existingUsers.push(newUser);

            localStorage.setItem("users", JSON.stringify(existingUsers));

            alert("Your account is created you can Login now");
            setlogin(true);
            setFormData({ username: "", phone: "", email: "", password: "", confirmPassword: "" });
        }

        else {
            const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

            const foundUser = storedUsers.find(
                (user) => user.email === email && user.password === password
            );
            if (foundUser) {
                alert(`Welcome ${foundUser.username}! Login successful.`);
                e.target.reset();
                localStorage.setItem("isLoggedIn", "true");
                localStorage.setItem("currentUser", JSON.stringify(foundUser));
                // alert("successfuly")
                navigate("/")
                window.location.reload()

            } else {
                alert("Invalid email or password.");
            }

        }

    }

    const toggle = () => {
        setlogin((prev) => !prev)
    }

    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 p-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">


                <form onSubmit={handleSubmit} className="space-y-6">
                    <h2 className="text-2xl font-bold !text-red-500 text-center">{login ? "Login" : "Signup"}</h2>


                    {!login && (
                        <div>
                            <label className="block text-sm font-medium text-gray-700">UserName</label>
                            <input
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                placeholder="Enter your username"
                                required
                                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                    )}

                    {!login && (
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Mobile number</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Enter your number"
                                required
                                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"

                            />
                        </div>
                    )}

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            required
                            className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"  //form-input

                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    {!login && (
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                            <input
                                type="password"
                                name="confirmpassword"
                                value={formData.confirmpassword}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                    )}

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 transition"
                    >
                        {login ? "Login" : "Signup"}
                    </button>

                    <p className="text-center text-sm text-gray-600"> Don't have an account?{" "}
                        <a href="#" className="text-blue-600 hover:underline font-medium" onClick={toggle}>
                            {login ? "Singup" : "Login"}
                        </a>
                    </p>

                </form>
            </div>
        </section>
    );
};
export default Login