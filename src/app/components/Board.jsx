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
  // state
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [filters, setFilters] = useState({ status: 'All', priority: 'All' });
  const [search, setSearch] = useState('');
  const [queue, setQueue] = useState({}); // { [ticketId]: true }

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
      } finally {
        if (active) setLoading(false);
      }
    })();
    return () => { active = false; };
  }, []);

  // Live update section
  const timerRef = useRef(null);
  useEffect(() => {
    function scheduleNext() {
      const delay = 6000 + Math.floor(Math.random() * 4000);
      timerRef.current = setTimeout(() => {
        setTickets(prev => {
          if (!prev.length) return prev;
          const i = Math.floor(Math.random() * prev.length);
          const chosen = prev[i];
          if (!chosen) return prev;

          const flip = Math.random() < 0.5 ? 'status' : 'priority';
          let nextStatus = chosen.status;
          let nextPriority = chosen.priority;

          if (flip === 'status') {
            const options = STATUS_FLOW[chosen.status] || [chosen.status];
            nextStatus = options[Math.floor(Math.random() * options.length)];
          } else {
            const idx = PRIORITIES.indexOf(chosen.priority);
            const goUp = Math.random() < 0.6;
            let np = idx + (goUp ? 1 : -1);
            np = Math.max(0, Math.min(PRIORITIES.length - 1, np));
            nextPriority = PRIORITIES[np];
          }

          const copy = [...prev];
          copy[i] = {
            ...chosen,
            status: nextStatus,
            priority: nextPriority,
            updatedAt: new Date().toISOString(),
          };
          return copy;
        });
        scheduleNext();
      }, delay);
    }
    scheduleNext();
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, []);

  // Derived visible tickets
  const visibleTickets = useMemo(() => {
    const q = search.trim().toLowerCase();
    return tickets.filter(t => {
      const statusOk = filters.status === 'All' || t.status === filters.status;
      const priorityOk = filters.priority === 'All' || t.priority === filters.priority;
      const searchOk =
        !q ||
        t.title.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q);
      return statusOk && priorityOk && searchOk;
    });
  }, [tickets, filters, search]);

  // Controlled handlers
  const onStatusChange = v => setFilters(f => ({ ...f, status: v }));
  const onPriorityChange = v => setFilters(f => ({ ...f, priority: v }));
  const onSearchChange = v => setSearch(v);

  // Queue actions
  const addToQueue = id => setQueue(q => ({ ...q, [id]: true }));
  const removeFromQueue = id =>
    setQueue(q => { const c = { ...q }; delete c[id]; return c; });
  const clearQueue = () => setQueue({});

  const isEmpty = !loading && !error && visibleTickets.length === 0;

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        <StatusFilter value={filters.status} onChange={onStatusChange} />
        <PriorityFilter value={filters.priority} onChange={onPriorityChange} />
        <SearchBox value={search} onChange={onSearchChange} />
        <MyQueueSummary
          tickets={tickets}
          queue={queue}
          onRemove={removeFromQueue}
          onClear={clearQueue}
        />
      </div>

      <StatusMessage loading={loading} error={error} isEmpty={isEmpty} />

      {!loading && !error && visibleTickets.length > 0 && (
        <TicketList
          tickets={visibleTickets}
          queue={queue}
          onAddToQueue={addToQueue}
        />
      )}
    </div>
  );
}















































































































