'use client';

export default function SearchBox({ value,onChange }) {
    return (
        <label className="flex flex-col text-sm md:col-span-2">
            <span className="mb-1 font-medium">Search</span>
            <input 
                type="text"
                className="border rounded-lg p-2"
                placeholder="Search title or description..."
                value={value}
                onChange={(e) =>onChange(e.target.value)}
            />
        </label>
    );
}
    