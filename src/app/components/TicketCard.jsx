'use client';

function formatWhen(iso) {
    try {
        return new Date(iso).toLocateString();
    } catch {
        return iso;
    }
} 

export default function TicketCard({ ticket, inQueue, onAddToQueue}) {
    return (
        <div className="rounded-2xl border p-4 shadow-sm bg-white">
            <div className="flex items-start justify-between">
                <h3 className="text-lg font-semibold pr-3">{ticket.title}</h3>
                <span className="text-xs px-2 py-1 rounded-full bg-gray-100 border">
                    {ticket.id}
                </span>
            </div>
        
            <p className= "text-sm text-gray-700 mt-2">{ticket.description}</p> 
        
            <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
                <div><span className="font-medium">Priority:</span> {ticket.priority}</div>
                <div><span className="font-medium">Status:</span> {ticket.status}</div>
                <div><span className="font-medium">Asignee:</span> {ticket.asignee}</div>
                <div><span className="font-medium">Updated:</span> {formatWhen(ticket.updatedAt)}</div>
            </div>

            <div className="mt-4f flex items-center gap-2">
                <button 
                 onClick={onAddToQueue}
                 disabled={inQueue}
                 className={`px-3 py-2 rounded-lg border text-sm font-medium transition
                    ${inQueue ? 'bg-gray-100t ext-gray-400 cursor-not-allowed' 
                              : 'bg-black text-white hover:opacity-90'}`}
                >
                    {inQueue ? 'Already in My Queue': 'Add To My Queue'}
                </button>
            </div>

            {inQueue && (
                <p className="mt-2 text-xs text-gray-500">This ticket is in your queue.</p>
            )} 
        </div> 
    ); 
} 