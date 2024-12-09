
export default function Listing () {
    return (
        <div className="min-h-screen bg-black text-gray-200 p-6">
            <header className="mb-6">
                <h1 className="text-3xl font-bold text-blue-400">Your Listings</h1>
                <p className="text-gray-400 mt-2">Manage your auction listings.</p>
            </header>
            <main>
                <div className="bg-gray-800 shadow-md rounded-lg p-6 mb-4">
                    <p className="text-lg text-gray-200">Listing: Antique Vase</p>
                    <p className="text-sm text-gray-400">Highest Bid: $200</p>
                    <p className="text-sm text-yellow-400">Ends: 2024-12-20</p>
                </div>
                <div className="bg-gray-800 shadow-md rounded-lg p-6 mb-4">
                    <p className="text-lg text-gray-200">Listing: Rare Coins</p>
                    <p className="text-sm text-gray-400">Highest Bid: $80</p>
                    <p className="text-sm text-yellow-400">Ends: 2024-12-25</p>
                </div>
            </main>
        </div>
    );
};