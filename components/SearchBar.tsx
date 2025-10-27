"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";

export default function SearchBar() {
  const router = useRouter();
  const params = useSearchParams();
  const [q, setQ] = useState("");

  useEffect(() => {
    const initial = params.get("q");
    if (initial) setQ(initial);
  }, [params]);

  function submit(e?: React.FormEvent) {
    e?.preventDefault();
    const query = q.trim();
    router.push(`/products${query ? `?q=${encodeURIComponent(query)}` : ""}`);
  }

  return (
    <form onSubmit={submit} className="w-full">
      <div className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2 bg-white">
        <FiSearch className="text-gray-500" />
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search products"
          className="flex-1 outline-none bg-transparent text-sm"
        />
        <button type="submit" className="px-4 py-1 text-sm rounded-full bg-gray-900 text-white hover:bg-primary-light">
          Search
        </button>
      </div>
    </form>
  );
}
