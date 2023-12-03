/* eslint-disable react/prop-types */
import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const Register = () => {
  const { signUp, handleUpdateProfile, user } = useContext(AuthContext);
  console.log(user);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const userImg = form.userImg.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, userImg, email, password);

    signUp(email, password)
      .then((result) => {
        console.log(result.user);
        handleUpdateProfile()
          .then(() => {
            Swal.fire({
              title: "Good job!",
              text: "You clicked the button!",
              icon: "success",
            });
          })
          .catch((error) => {
            Swal.fire({
              title: `${error.code}`,
              icon: "error",
            });
          });
      })
      .catch((error) => {
        Swal.fire({
          title: `${error.code}`,
          icon: "error",
        });
      });
  };
  return (
    <div>
      <div>
        <div className="hero h-[70vh] ">
          <div className=" ">
            <div className="card flex-shrink-0 w-full lg:w-[500px] shadow-2xl bg-base-100">
              <form onSubmit={handleRegister} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Username</span>
                  </label>
                  <input
                    type="text"
                    placeholder="name"
                    name="name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">User Url</span>
                  </label>
                  <input
                    type="text"
                    placeholder="user Image"
                    name="userImg"
                    className="input input-bordered"
                    required
                  />
                </div>
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
                    className="input input-bordered"
                    name="password"
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
    </div>
  );
};

export default Register;
