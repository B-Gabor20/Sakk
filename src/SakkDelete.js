import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, NavLink } from 'react-router-dom';

export function SakkDelete(props) {

    const params = useParams();
    const id = params.SakkId;
    const navigate = useNavigate();
    const [Sakk, setSakk] = useState([]);

    useEffect(() => {
        (async() => {
            try {
        const res = await fetch(`https://Sakk.kando-dev.eu/Sakk/${id}`)
        const Sakk2 = await res.json();
        setSakk(Sakk2);
            } catch(error) {
                console.log(error);
            }
    })();
}, [id]);
return (
    <div className="p-5 text-center content bg-whitesmoke">
            <h2>Sakkozó törlése</h2>
            <form
            onSubmit={(e) => {
                e.persist();
                e.preventDefault();
                fetch(`https://chess.sulla.hu/chess/${id}`, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                .then(() => {
                    navigate("/");
                })
                .catch(console.log);
            }}
            >
            <div>
                <button type="submit" class="btn btn-danger">Törlés</button>
                <NavLink to={`/Sakk/${Sakk.id}`}>
                    <button className="btn btn-secondary">Vissza</button>
                </NavLink>
            </div>
            </form>
    </div>
);
}