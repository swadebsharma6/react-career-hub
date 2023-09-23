import { useEffect, useState } from "react";
import SingleJob from "./SingleJob";


const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(()=>{

        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))

    }, [])

    return (
        <section>
          <div className="text-center">
            <h2 className="text-4xl font-bold">Featured Jobs: {jobs.length}</h2>
            <p className="text-base font-semibold">Explore thousands of job opportunities with all the information you need. Its your future</p>  
          </div>
          <div>
          
            {
                jobs.map(job => <SingleJob
                        key={job.id}
                        job={job}
                    ></SingleJob>)
            }
          </div>
        </section>
    );
};

export default FeaturedJobs;