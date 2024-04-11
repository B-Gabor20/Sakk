import {useNavigate} from 'react-router-dom'
export function SakkCreate()
{
    const navigate = useNavigate();
    return (
        <div className='p5 content bg-whitesmoke text-center'>
            <form
            onSubmit={(event) => {
                event.persist();
                event.preventDefault();
                const formData = new FormData(event.target);
                const data = Object.fromEntries(formData);
                fetch(`https://chess.sulla.hu/chess`, {
                    method: "POST",
                    headers: {
                    "Content-Type": "application/json",
                    'Access-Control-Allow-Origin': '*'
                    },
                    body: JSON.stringify(data),
            })
            .then(() => {
                navigate(`/`);
            })
            .catch(console.log)
            }}>
                <div className="form-group row pb-3">
                    <label className="col-sm-3 col-form-label">Név:</label>
                    <div className="col-sm-9">
                        <input type="text" name="name" className="form-control"/>
                    </div>
                </div>
                <div className="form-group row pb-3">
                    <label className="col-sm-3 col-form-label">Kép URL:</label>
                    <div className="col-sm-9">
                        <input type="text" name="image_url" className="form-control"/>
                    </div>
                </div>
                <div className="form-group row pb-3">
                    <label className="col-sm-3 col-form-label">Világbajnokságot nyert</label>
                    <div className="col-sm-9">
                        <input type="text" name="world_ch_won" className="form-control"/>
                    </div>
                </div>
                <div className="form-group row pb-3">
                    <label className="col-sm-3 col-form-label">profile_url</label>
                    <div className="col-sm-9">
                        <input type="text" name="profile_url" className="form-control"/>
                    </div>
                </div>
                <button type='submit' className='btn btn-success'>
                    Kuldes
                </button>
            </form>
        </div>
    );
}
