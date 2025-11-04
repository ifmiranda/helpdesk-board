'use client';
import { useEffect, useMemo, useRef, useState } from 'react';
import StatusFilter from './StatusFilter';
import PriorityFilter from './PriorityFilter';
import SearchBox from './SearchBox';
import TicketList from './TicketList';
import MyQueueSummary from './MyQueueSummary';
import StatusMessage from './StatusMessage'; 

const STATUS_FLOW = {
   Open: ['In Progress', 'On Hold', 'Resolved'],
    'In Progress': ['On Hold', 'Resolved'],
    'On Hold': ['In Progress', 'Resolved'],
    Resolved: ['Resolved'],
}; 
const PRIORITIES = ['Low', 'Medium', 'High', 'Critical'];

export default function Board() {
    const [tickets, setTickets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); 

    const [filters, setFilters] = useState({ status: 'All', priority:'All'});
    const [search, setSearch] = useState('');
    const [queue, setQueue] = useState({});
}
   
// Fetch on mount 
useEffect(() => {
    let active = true;
    (async () => {
        try { 
            setLoading(true);
            const res = await fetch('/api/tickets', { cache: 'no-store' });
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            const data = await res.json(); 
            if (active) {
                setTickets(data);
                setError(null);
            }
        } catch (e) { 
            if (active) setError('Unable to load tickets.');
        }  finally { 
            if (active) setLoading(false); 
        } 
    })(); 
        return () => { active = false; }; 
}, []);  

// Live update section 

                










