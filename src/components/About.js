import React from 'react'

export default function About(props) {
    return (
        <div className={`container text-${props.mode==='light'?'dark':'light'}`}>
            <h1>About Us</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Sunt nam a tenetur quas dolor cupiditate consequuntur atque ab natus! 
                Incidunt ea ut corporis temporibus quisquam aliquam exercitationem, 
                asperiores mollitia, sequi esse veritatis voluptatibus nostrum? Ex eius 
                eaque, eveniet autem quas odit! Vero ullam id dolores tempora ab odio, 
                autem, possimus recusandae iure nulla sunt. Eaque, optio. Incidunt 
                quisquam suscipit, iusto dolore dignissimos fugit tempore culpa.</p>
        </div>
    )
}

