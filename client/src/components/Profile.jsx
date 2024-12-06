export default function Profile ()  {
    return (
        <div className="min-h-screen bg-black text-gray-200 p-6">
            <header className="mb-6">
                <h1 className="text-3xl font-bold text-blue-400">Profile</h1>
                <p className="text-gray-400 mt-2">Update your personal details.</p>
            </header>
            <main>
                <form className="bg-gray-800 shadow-md rounded-lg p-6">
                    <div className="mb-4">
                        <label className="block text-gray-400 mb-1">Name</label>
                        <input
                            type="text"
                            className="w-full p-2 rounded bg-gray-700 text-gray-200"
                            placeholder="Your Name"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-400 mb-1">Email</label>
                        <input
                            type="email"
                            className="w-full p-2 rounded bg-gray-700 text-gray-200"
                            placeholder="Your Email"
                        />
                    </div>
                    <button className="px-4 py-2 bg-blue-500 text-gray-200 rounded">Save Changes</button>
                </form>
            </main>
        </div>
    );
};