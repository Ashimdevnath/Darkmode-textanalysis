import React, { useState } from 'react'

export default function Dark() {

    const [mystyle , setMystyle] = useState(
        {
            color : 'black',
            backgroundColor : 'white'
        }
    )
    const [Textch, settextch] = useState("Chnage to Dark")
let Darkmode = () =>{
    if(mystyle.color === 'white'){
        setMystyle({
            color : 'black',
            backgroundColor : 'white'
        })
        settextch("Change to Dark")
    }
    else{
        setMystyle({
            color : 'white',
            backgroundColor : 'black'
        })
        settextch("Change to Light")
    }
}
    

    return (
    
        <div className='container'>
            <div className="card"  style={mystyle}>
                    <div className="card-body">
                        <h5 className="card-title" style={mystyle}>Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button className="btn btn-primary" onClick={Darkmode}>{Textch}</button>
                    </div>
            </div>
        </div>
    )
}
