export default function Bidding () {
    return (
        <div className="min-h-screen bg-black text-gray-200 p-6">
            <header className="mb-6">
                <h1 className="text-3xl font-bold text-blue-400">Your Biddings</h1>
                <p className="text-gray-400 mt-2">Review your ongoing and past biddings.</p>
            </header>
            <main>
                <div className="bg-gray-800 shadow-md rounded-lg p-6 mb-4">
                    <p className="text-lg text-gray-200">Auction: Vintage Watch</p>
                    <p className="text-sm text-gray-400">Current Bid: $150 | Your Bid: $145</p>
                    <p className="text-sm text-blue-400">Status: Outbid</p>
                </div>
                <div className="bg-gray-800 shadow-md rounded-lg p-6 mb-4">
                    <p className="text-lg text-gray-200">Auction: Designer Handbag</p>
                    <p className="text-sm text-gray-400">Current Bid: $300 | Your Bid: $300</p>
                    <p className="text-sm text-green-400">Status: Leading</p>
                </div>
            </main>
        </div>
    );
};