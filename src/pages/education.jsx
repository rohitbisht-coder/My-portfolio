export const Education = () => {
    return (
        <section id="education">

            <h1 className="section-heading mb75px">
                <span>
                    <i className="fas fa-graduation-cap"></i>
                </span>
                <span> Education </span>
            </h1>

            <div className="timeline">

                <div className="timeline-box left ">
                    <div className="timeline-container">
                    
                        <h3 className="certificate-designation  m0 m-blue">Bachelor of Arts</h3>
                        <h4 className="certificate-company-name "> 
                        <div className="timeline-logo" style={{right:"240px"}}>
                        <i className="fas fa-graduation-cap"></i>
                        </div>
                        School of Open Learning</h4>
                        <h5 className="certificate-duration m0">08/2021 - 05/2024 </h5>
                    </div>
                </div>

                <div className="timeline-box right ">
                    <div className="timeline-container">
                        
                        <h3 className="certificate-designation  m0 m-blue">  MERN Stack Web Development</h3>
                        <h4 className="certificate-company-name ">
                        <div className="timeline-logo">
                        <img src="https://ninjasfiles.s3.amazonaws.com/asset_0000000000000030_1550710829_ninjasicon.png" />
                        </div>
                        Coding Ninjas</h4>
                        <h5 className="certificate-duration m0"> 01/2024 - 12/2024 </h5>
                    </div>
                    
                </div>

                <div id="timeline-divider">
                    <div className="timeline-traveller">
                        <div>
                            <i className="fas fa-car-side"></i>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    )
}