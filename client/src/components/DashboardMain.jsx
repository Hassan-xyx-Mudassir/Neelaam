export default function DashboardMain () {
    return (
        <div className="min-h-screen bg-black text-gray-200 p-6">
            <header className="mb-6">
                <h1 className="text-3xl font-bold text-blue-400">Welcome to Neelaam Dashboard!</h1>
                <p className="text-gray-400 mt-2">Explore and manage your auctions.</p>
            </header>
            <main>
                <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div className="bg-gray-800 shadow-md rounded-lg p-4">
                        <h2 className="text-xl font-semibold text-gray-200">Active Biddings</h2>
                        <p className="text-3xl font-bold text-blue-400 mt-2">7</p>
                    </div>
                    <div className="bg-gray-800 shadow-md rounded-lg p-4">
                        <h2 className="text-xl font-semibold text-gray-200">Your Listings</h2>
                        <p className="text-3xl font-bold text-green-400 mt-2">15</p>
                    </div>
                    <div className="bg-gray-800 shadow-md rounded-lg p-4">
                        <h2 className="text-xl font-semibold text-gray-200">Won Bids</h2>
                        <p className="text-3xl font-bold text-yellow-400 mt-2">3</p>
                    </div>
                </section>
            </main>
        </div>
    );
};