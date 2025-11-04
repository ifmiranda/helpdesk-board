'use client'; 

export default function MyQueueSummary({ tickets, queue, onRemove, onClear}) {
    const queued = tickets.filter(t => queue[t.id]);
    const count = queued.length; 

    return (
        <div className="border rounded-2xl p-3 bg-white">
            <div className="flex items-center justify-between">
                <h4 className="font-semibold">My Queue</h4>
                <span className="text-sm text-gray-600">{count} selected</span>
            </div>

            {count === 0 ? (
                <p className="mt-2 text-sm text-gray-500">No tickets selected.</p> 
            ) : ( 
              <ul className="mt-2 space-y-2 max-h-36 overflow-auto pr-1">
                {queued.map(t=> (
                    <li key={t.id} className="flex items-center justify-between gap-2">
                        <span className="text-sm truncante" title={t.title}>{t.title}</span>
                        <button 
                            className="text-xs px-2 py-1 border rounded hover:bg-gray-50"
                            onClick={() => onRemove(t.id)} 
                        > 
                            Remove
                        </button> 
                    </li>
                ))}
            </ul>
        )}  

        <div className="mt-2 flex justify-end">
            <button 
            className="text-xs px-3 py-1.5  border rounded hover:bg-gray-50 disabled:opacity-50"
            disabled={count === 0}
            onClick={onClear}
        > 
            Clear Queue
        </button>
    </div>
</div>
    );
}
                
 
 
 
 
 
 
