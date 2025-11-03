'use client';
import { useEffect, useState } from 'react';

export default function Board() {
  const [ok, setOk] = useState(false);

  useEffect(() => {
    setOk(true);
  }, []);

  return (
    <div className="rounded border p-4 bg-white">
      <p className="font-medium">Board is mounted {ok ? '✅' : '…'}</p>
    </div>
  );
}