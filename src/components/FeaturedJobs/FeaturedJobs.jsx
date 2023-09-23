import { useEffect, useState } from "react";
import SingleJob from "./SingleJob";


const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);

    // this is not the best way
    const[dataLength, setDtaLength] = useState(4);

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
          <div className="grid md:grid-cols-2 gap-6">
          
            {
                jobs.slice(0, dataLength).map(job => <SingleJob
                        key={job.id}
                        job={job}
                    ></SingleJob>)
            }
          </div>
          <div className={ `text-center my-4 ${dataLength === jobs.length && 'hidden'}`}>
          <button onClick={()=> setDtaLength(jobs.length)} className="btn btn-outline btn-primary">See All Jobs</button>
          </div>
        </section>
    );
};

export default FeaturedJobs;