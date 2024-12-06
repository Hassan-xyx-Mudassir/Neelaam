export default function Logout () {
    return (
        <div className="min-h-screen bg-black text-gray-200  ">
            <div className="bg-gray-800 shadow-md rounded-lg p-6 text-center">
                <h1 className="text-2xl font-bold text-red-400">Are you sure you want to logout?</h1>
                <button className="mt-4 px-4 py-2 bg-red-500 text-gray-200 rounded">Yes, Logout</button>
            </div>
        </div>
    );
};