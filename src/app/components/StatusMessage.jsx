'use client'; 

export default function StatusMessage({loading, error, isEmpty}) {
    if (loading) {
        return <div className="p-4 rounded-lg border bg-white">Loading...</div>;
    }
    if (error) {
        return <div className="p-4 rounded-lg border bg-red-50 text-red-700">Unable to load tickets.</div>;
    }
    if (isEmpty) {
      return <div className="p-4 rounded-lg border bg-yellow-50 text-yellow-800">No tickets match your filters.</div>;
    } 
    return null;
}
