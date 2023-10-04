import { useEffect, useState} from "react";
import { useLocation } from "react-router-dom";

export function useAppartPage() {
    const [selectAppart, setSelectAppart] = useState(null);
    const location = useLocation();
    useEffect(() => {
        const abortController = new AbortController();
        fetch("db.json", { signal: abortController.signal })
        .then((res) => res.json())
        .then((apparts) => {
            const Appart = apparts.find((appart) => appart.id === location.state.apartementId)
            setSelectAppart(Appart);
        })
        .catch(console.error);
    return () => {
        abortController.abort();
    };
}
, [location.state.apartementId]);
return selectAppart;
}