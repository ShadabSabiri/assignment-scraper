import { useContext, useState } from "react";
import api from "../services/api";
import { AuthContext } from "../context/AuthContext";
import { useNavigate,Link } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await login(form.email,form.password);
      navigate("/stories");
    } catch (error) {
      console.log(error.response?.data || error.message);
      
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">Login</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            placeholder="Email"
            disabled={loading}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-black"
            required
          />

          <input
            type="password"
            placeholder="Password"
            disabled={loading}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-black"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
          >
            {loading ? "Application login ..." : "Login"}
          </button>
        </form>
        <p className="text-center mt-4 text-gray-600">
          New User?{" "}
          <Link to="/register" className="text-black font-semibold">
            Register Now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
