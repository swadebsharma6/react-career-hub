import PropTypes from 'prop-types';

const SingleJob = ({job}) => {
    console.log(job)
    return (
        <div>
            <h2>Single Job</h2>
        </div>
    );
};

SingleJob.propTypes ={
    job: PropTypes.object,
}
export default SingleJob;