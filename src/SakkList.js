import {useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';
export function SakkList()
{
    const [sakkosok,setsakkosok] = useState([]);
    const [isFetchPending,setFetchPending] = useState(false);

    useEffect(() => {
        setFetchPending(true);
        fetch("https://chess.sulla.hu/chess")
          .then((res) => res.json())
          .then((Sakk) => setsakkosok(Sakk))
          .catch(console.log)  
          .finally(() => {
            setFetchPending(false);
          });
        }, []);
    return(
        <div className='p-5 m-auto text-center content bg-ivory'>
                {isFetchPending ? (<div className="spinner-border"></div>):(
                    <div>
                        <h2>sakkosokmaisterek</h2>
                        {sakkosok.map((Sakk)=>(
                            <div className='card col-xs-12 col-md-4 col-xl-2 d-inline-block m-1 p-2'>
                            <div className=' flex-wrap text-center'>
                            <NavLink key={`/chess/${Sakk.id}`} to={`/chess/${Sakk.id}`}  >
                                <h5 className='text-muted'>{Sakk.name}</h5>
                                <div className='card-body'>
                                <img className="img-thumbnail img-fluid img-responsive" 
                                    style={{ height: 200, maxWidth: 200, objectFit: 'cover' }}
                                    src={Sakk.image_url ? Sakk.image_url : 'https://via.placeholder.com/400x800'}/>
                            </div>
                           </NavLink>
                           </div>
                           </div>
                        ))}
                    </div>
                )}
        </div>
    )
} 
export default SakkList;