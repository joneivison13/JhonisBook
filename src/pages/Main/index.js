import React, { useState } from 'react';
import Header from '../../Components/Header';
import api from '../../services/api';

export default function Main() {
    
    const [comentarios, setComentarios] = useState('')
    const [data, setData] = useState(api)

    function handleSubmit(e) {
        e.preventDefault()
    }
    function hadleSendComment(){
        
        setComentarios('')
        setData([...data, {
            id:6,
            name:'Voçê',
            msg:comentarios
        }])

        
    }

    
    return (
        <>
            <Header/>
            <div className="container">

            <p className="comments">{data.map(user => (
                <div key={user.id}>
                    <p className="name-user">{user.name}</p>

                    <p className="msg">{user.msg}</p>
                </div>
            ))}</p>

                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        name="coment" 
                        className="input-comemtario"
                        onChange={(e) => setComentarios(e.target.value)}
                    />
                    <button type="submit" value={comentarios} onClick={hadleSendComment}>Enviar</button>
                </form>
            </div>
        </>
    )
}
