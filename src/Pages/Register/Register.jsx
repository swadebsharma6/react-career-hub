import { useContext } from "react";
import { AuthContext } from "../../Firebase/AuthProvider";


const Register = () => {

    const {createUser} = useContext(AuthContext);

    const handleSubmit =(event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value ;
        const password = form.password.value;
        console.log(email, password);
        // create user
        createUser(email, password)
        .then(res =>{
            const user = res.user;
            console.log('created user', user);
            alert('User created successfully')
        })
        .catch(error =>{
            console.log(error.message)
        })
    }

    return (
        <div>
        <div className="hero min-h-[80vh] bg-base-200 my-10 rounded">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl text-purple-600 font-bold">Please Register now!</h1>
           
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Register;