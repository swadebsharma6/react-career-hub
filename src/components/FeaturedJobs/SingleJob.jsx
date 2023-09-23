import PropTypes from 'prop-types';
import { BiDollar } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";
import { Link } from 'react-router-dom';

const SingleJob = ({job}) => {
    // console.log(job);
    const {id,company_name,salary, logo, job_type,remote_or_onsite,location, job_title    } = job;
    return (
        <div className='m-4'>
            <div className="card border card-compact p-6 bg-base-100 shadow-xl">
            <figure><img  src={logo} alt="Shoes" /></figure>
            <div className="card-body">
            <h2 className="card-title">{job_title}</h2>
            <p>{company_name}</p>
            <div>
                <button className='btn btn-outline btn-primary mr-5'>{remote_or_onsite}</button>
                <button className='btn btn-outline btn-primary'>{job_type}</button>
            </div>
            <div className='flex'>
            <h4 className='flex items-center mr-4'> <MdLocationOn className='text-2xl mr-2'></MdLocationOn> <span className='text-xl'>{location}</span></h4>
            <h4 className='flex items-center'> <BiDollar className='text-2xl mr-2'></BiDollar><span className='text-xl'>{salary}</span></h4>
            </div>
            <div className="card-actions ">
               <Link to={`/job/${id}`}>
               <button className="btn btn-primary">View Details</button>
               </Link>
            </div>
            </div>
        </div>
        </div>
    );
};

SingleJob.propTypes ={
    job: PropTypes.object,
}
export default SingleJob;