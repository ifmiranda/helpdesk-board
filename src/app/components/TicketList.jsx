'use client';

import TicketCard from './TicketCard'; 

export default function TicketList({ tickets, queue, onddToQueue}) {
    return ( 
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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