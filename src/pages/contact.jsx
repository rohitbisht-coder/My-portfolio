export const Contact=()=>{
    return(
        <section id="contact">
        <h1 className="section-heading mb50px">
            <span>
                <i className="far fa-address-card"></i>
            </span>
            <span> Contact </span>
        </h1>
        <div id="contact-container">

            <div id="contact-form-container">
                <form id="contact-form">
                    <input id="input-name" name="name" type="text" placeholder="Your Name"/>
                    <input id="input-email" name="input-email" type="text" required placeholder="Your Email"/>
                    <textarea id="input-message" name="input-message" rows="2" cols={40} placeholder="Message"></textarea>
                    <button className="sub-btn" type="submit">SEND MESSAGE</button>
                </form>
            </div>
            <div id="my-details-container">

                <h3> Get In touch </h3>
                <div className="my-details-info-container">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>Delhi, India</span>
                </div>
                <div className="my-details-info-container">
                    <i className="fas fa-mobile-alt"></i>
                    <span>8126382045</span>
                </div>
                <div className="my-details-info-container">
                    <i className="far fa-envelope"></i>
                    <span>
                    <a href="mailto:rohitbisht07870@gmail.com" style={{textDecoration:"none" , color:"white"}}>rohitbisht07870@gmail.com</a>
                    </span>
                </div>
            </div>
        </div>

        <div className="text-center social-icons">

            <ul className="no-list-style horizontal-list">

            <li>
                            <a href="https://www.linkedin.com/in/rohit-bisht-578b73239/">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://stackoverflow.com/users/28496159/rohit-bisht">
                                <i className="fab fa-stack-overflow"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/rohitbisht-coder">
                                <i className="fab fa-github"></i>
                            </a>
                        </li>
            </ul>
        </div>
    </section>
    )
}