"use client";
import { useState } from "react";
export default function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h2>Count: {count}</h2>
            <div className="flex gap-3 mt-4">
                <button
                    onClick={() => setCount(count + 1)}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg transition"
                >
                    Increase
                </button>

                <button
                    onClick={() => setCount(count - 1)}
                    className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg transition"
                >
                    Decrease
                </button>
            </div>
        </div>
    );
}
