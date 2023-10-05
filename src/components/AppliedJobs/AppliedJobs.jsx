import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utilites/Localstorage";


const AppliedJobs = () => {
    const jobs = useLoaderData();

    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);

    const handleJobFilter = filter =>{
        if(filter === 'all'){
            setDisplayJobs(appliedJobs);
        }
        else if(filter === 'remote'){
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
            setDisplayJobs(remoteJobs)
        }
        else if(filter === 'onsite'){
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite') ;
            setDisplayJobs(onsiteJobs)
        }
    }

    useEffect(()=>{
        const storedJobIds = getStoredJobApplication();
        if(jobs.length > 0){
            // const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id) );
            const jobsApplied = [];
            for(const id of storedJobIds ){
                const job = jobs.find(job => job.id === id);
                if(job){
                    jobsApplied.push(job)
                }
            }
            setAppliedJobs(jobsApplied);
            setDisplayJobs(appliedJobs);
            // console.log(jobs, storedJobIds, jobsApplied)
        }

    }, [jobs])

    return (
        <div>
        <Helmet>
        <title>Career Hub | AppliedJob</title>
        </Helmet>
            <h3>Jobs I applied :{appliedJobs.length}</h3>
            <div>
            <details className="dropdown mb-32">
            <summary className="m-1 btn">open or close</summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
              <li onClick={()=>handleJobFilter('all')}><a>All</a></li>
              <li onClick={()=> handleJobFilter('remote')}><a>Remote</a></li>
              <li onClick={()=> handleJobFilter('onsite')}><a>OnSite</a></li>
            </ul>
          </details>
            </div>
            <div>
                {
                    displayJobs.map(job => <li key={job.id}>
                        <span>{job.job_title} {job.company_name}:  {job.remote_or_onsite}</span>
                        </li> ) 
                }
            </div>
        </div>
    );
};

export default AppliedJobs;