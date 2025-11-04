'use client';

import TicketCard from './TicketCard'; 

export default function TicketList({ tickets, queue, onAddToQueue}) {
    return ( 
        <div className="grid gap-3">
            {tickets.map((t) => (
                <TicketCard
                    key={t.id}
                    ticket={t}
                    inQueue={!!queue[t.id]}
                    onAddToQueue={() => onAddToQueue(t.id)}
                /> 
            ))}
        </div>
    );
}