import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
export function SakkSingleElement() {
    const { SakkId } = useParams();
    const [Sakk, setSakk] = useState({});
    const [isFetchPending, setFetchPending] = useState(false);

    useEffect(() => {
        setFetchPending(true);
        fetch(`https://chess.sulla.hu/chess/${SakkId}`)
            .then((res) => res.json())
            .then((data) => {
                setSakk(data);
            })
            .catch((error) => {
                console.error("Error fetching Sakk data:", error);
            })
            .finally(() => {
                setFetchPending(false);
            });
    }, [SakkId]);

    return (
        <div className="p-5 m-auto text-center content bg-ivory">
            {isFetchPending || !Sakk.id ? (
                <div className="spinner-border"></div>
            ) : (
                <div className="card p-3">
                    <div className="card-body">
                        <h5 className="card-title">{Sakk.name}</h5>
                            <img
                                className="img-fluid" style={{ maxHeight: 200 }}
                                src={Sakk.image_url ? Sakk.image_url : 'https://via.placeholder.com/400x800'}
                                alt={Sakk.name}
                            />
                        <p className="text-muted">{Sakk.image_url}</p>
                        <p>Született : {Sakk.birth_date}</p>
                        <p>Világbajnokságot nyert : {Sakk.world_ch_won}</p>
                        <NavLink target="_blank" to={Sakk.profile_url}>
                            <p>Wikipédia oldala</p>
                        </NavLink>
                        <div className="btn-group" role="group">
                           <NavLink key="n"to={`/mod-Sakk/${Sakk.id}`}  >
                                <button type="button" class="btn btn-primary">Módosítás</button>
                           </NavLink>
                            <NavLink key="i" to={`/delete-Sakk/${Sakk.id}`}>
                                    <button type="button" class="btn btn-danger">Törlés</button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
