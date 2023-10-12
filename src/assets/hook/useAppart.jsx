import { useState, useEffect } from "react";

export const useAppart = () => {
    const [appartement, setAppartement] = useState([]);
    useEffect(() => {
        const abortController = new AbortController();
        fetch("db.json", { signal: abortController.signal })
            .then((res) => res.json())
            .then((res) => setAppartement(res))
            .catch(console.error);
        return () => {
            abortController.abort();
        };
    }, []);
    return appartement;
};