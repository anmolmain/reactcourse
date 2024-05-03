import React from 'react'

const Card = (p) => {
    return (
        <div>
            {
                console.log(p)
            }
            {
                p.carDetailsNewObj.map((n) => (
                    <div style={{ border: "2px solid black", margin:"5px",padding:"5px" }}>
                        <p>{n.carname}: {n.carcolor} 
                        <br /> Car Rating : {n.carrating}
                        <br /> car manufacturer : { n.carmanufacturer}
                        <br /> country of origin : { n.countryoforigin}
                        
                        </p>
                    </div>
                ))
            }

        </div>
    )
}

export default Card

// details = { details = [ {title="",content=" "},{title="",content=" "},{title="",content=" "}]}
//   p.details[0].title
