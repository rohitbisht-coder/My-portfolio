import React from 'react';

export const Card = ({ projects }) => {
    return (

        <div  className="portfolio-image-container">

            <img src={projects.imgUrl ? projects.imgUrl : "https://ninjasfiles.s3.amazonaws.com/asset_0000000000000025_1550237330_codezen_2.png"} alt='' />
            <div  className="portfolio-details">
                <p>
                    {projects.description}
                </p>
                <p>
                    {
                        projects.url ? <><i  className="fab fa-deploydog"></i>  <a href={projects.url} target='_blank'  rel="noreferrer">Click Here To See</a></>
                            : null
                    }
                </p>
                <p>
                    <i  className="fab fa-github"></i> <a href={projects.githubLink} target='_blank'  rel="noreferrer">Github Link</a>
                </p>
            </div>

        </div>
    )
};

