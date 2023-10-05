import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../Utilites/Localstorage";


const JobDetails = () => {

   

    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id == idInt);
    // console.log(job, jobs)

    const handleApplyJob =() =>{
        saveJobApplication(idInt);
        toast('You have apply successfully!!')
    }

    return (
        <div className="my-10">
        <Helmet>
           <title>Career Hub | Job Details</title>
            
        </Helmet>
             <div className="text-center">
             <h4 className="text-2xl font-bold ">Job Details of: </h4>
             </div>
            <div className="grid md:grid-cols-4 gap-4">
            <div className="border md:col-span-3">
            <h3 className="text-2xl font-bold">Job details Coming Here: {job.id}</h3>
            <h4 className="text-xl font-bold ">Post: {job.job_title}</h4>
            </div>
            <div className="border md:col-span-1">
            <h3 className="text-2xl font bold">Job Details:</h3>
            <button onClick={handleApplyJob} className="btn btn-primary w-full">Apply Now</button>
            </div>
            
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;