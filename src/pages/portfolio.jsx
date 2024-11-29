import { Card } from "../Component/Card"
import { projects } from "../data/data"
export const Portfolio=()=>{
    return (
        <section id="portfolio">
        <h1 className="section-heading mb75px">
            <span>
                <i className="fas fa-th-list"></i>
            </span>
            <span> Portfolio </span>
        </h1>
        <div id="portfolio-container">
        {
           projects.map((projects,index)=>{
               return <Card projects={projects} key={index}/>
           }) 
        }
      
        </div>
    </section>
    )
}