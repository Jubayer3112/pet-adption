import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          title: "Logged in successfully",
          icon: "success",
        });
      })
      .catch((error) =>
        Swal.fire({
          title: `${error.code}`,
          icon: "error",
        })
      );
  };
  return (
    <div>
      <div className="hero h-[70vh] ">
        <div className=" ">
          <div className="card flex-shrink-0 w-full lg:w-[500px] shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <hr />
              <SocialLogin />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
