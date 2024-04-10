import { NavLink, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export function SakkMod() {
    const navigate = useNavigate();
    const param = useParams();
    const id = param.SakkId;
    const [Sakk, setSakk] = useState({});
    const [isFetchPending, setFetchPending] = useState(false);
    
    useEffect(() => {
        setFetchPending(true);
        (async() => {
            try {
                const res = await fetch(`https://chess.sulla.hu/chess/${id}`);
                const Sakk = await res.json();
                setSakk(Sakk);
            } catch(error) {
                console.log(error);
            } finally {
                setFetchPending(false);
            }
        })();
    },[id]);

    return(
        <div className="p-5 content bg-whitesmoke text-center">
            <h2>Sakkozó módosítása</h2>
            <form onSubmit={(event) => {
                event.preventDefault();
                const formData = new FormData(event.target);
                const data = Object.fromEntries(formData);
                fetch(`https://chess.sulla.hu/chess/${id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    navigate('/');
                })
                .catch(error => console.error('Error:', error));
            }}>
                <div className="form-group row pb-3">
                    <label className="col-sm-3 col-form-label">Név:</label>
                    <div className="col-sm-9">
                        <input type="text" name="name" className="form-control" defaultValue={Sakk.name} />
                    </div>
                </div>
                <div className="form-group row pb-3">
                    <label className="col-sm-3 col-form-label">Kép URL:</label>
                    <div className="col-sm-9">
                        <input type="text" name="image_url" className="form-control" defaultValue={Sakk.image_url} />
                    </div>
                </div>
                <div className="form-group row pb-3">
                    <label className="col-sm-3 col-form-label">Világbajnokságot nyert</label>
                    <div className="col-sm-9">
                        <input type="text" name="world_ch_won" className="form-control" defaultValue={Sakk.world_ch_won} />
                    </div>
                </div>
                <div className="form-group row pb-3">
                    <label className="col-sm-3 col-form-label">profile_url</label>
                    <div className="col-sm-9">
                        <input type="text" name="profile_url" className="form-control" defaultValue={Sakk.profile_url} />
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <button type="submit" className="btn btn-primary">Mentés</button>
                </div>
            </form>
        </div>
    )
}

export default SakkMod;