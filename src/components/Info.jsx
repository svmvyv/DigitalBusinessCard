import React from "react"


export default function Info() {

    return (
        <div className="info--div">
            <img src="..\src\assets\pfp1.png" width="317px" alt="" />

            <h2>Samaya Nuqayti</h2>
            <h6>Front-End Engineer</h6>

            <p><a href="http://">samaya.website</a></p>

            <div className="button--space">
            <button className="email--button" type="button" onclick="alert('this is my email@')"><i class="fa-solid fa-envelope"></i> Email</button>
            <button className="linkedin--button" type="button" onclick="alert('this is my linkedin!')"><i class="fa-brands fa-linkedin"></i> Linkedin</button>
            </div>
        </div>
    )
}