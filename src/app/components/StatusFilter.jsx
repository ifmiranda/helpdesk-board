'use client'; 

const OPTIONS = ['All', 'Open', 'In Progress', 'On Hold', 'Resolved']; 

export default function StatusFilter({ value, onChange})  {
    return ( 
        <label className="flex flex-col text-sm">
            <span className="mb-1 font-medium">Status</span>
            <select 
                className="border rounded-lg p-2"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            >
                {OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
            </select>
        </label>
    ); 
 }