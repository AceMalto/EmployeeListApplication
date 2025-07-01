export default function Login({ form, handleChange, handleLogin, authError }) {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md w-80">
                <h2 className="text-xl font-bold mb-4">Login</h2>

                <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Username</label>
                <input
                    type="text"
                    name="username"
                    value={form.username}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded"
                    required
                />
                </div>

                <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Password</label>
                <input
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded"
                    required
                />
                </div>

                {authError && <p className="text-red-500 text-sm mb-2">{authError}</p>}

                <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                >
                Login
                </button>
            </form>
        </div>
    );
}
