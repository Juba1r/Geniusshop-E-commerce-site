import "./userLogin.css";
import productbg from "../../../assets/customerproductbg.jpg";
import googleicon from "../../../assets/google.png";
import facebookicon from "../../../assets/facebook.png";
import { Link } from "react-router-dom";

const UserLogin = () => {
  return (
    <>
      {/* Header Image Section */}
      <div className="customer-products-fst-img">
        <img src={productbg} alt="Background" height={300} width="100%" />
        <div className="customer-products-text">
          <h2 className="text-white">User Login</h2>
          <p className="text-white">Home // User Login // </p>
        </div>
      </div>

      {/* Login Form Section */}
      <div className="container d-flex justify-content-center my-5">
        <div className="login-form-wrapper shadow-sm">
          <h3 className="text-center fw-bold mb-4">
            Welcome Back! Please login
          </h3>

          <form>
            {/* Email Input */}
            <div className="mb-3">
              <label className="form-label fw-medium">Email Address</label>
              <input
                type="email"
                className="form-control userlogin-email-field"
                placeholder="user@gmail.com"
                required
              />
            </div>

            {/* Password Input */}
            <div className="mb-3">
              <label className="form-label fw-medium">Your Password</label>
              <input
                type="password"
                className="form-control userlogin-password-field"
                placeholder="••••"
                required
              />
            </div>

            {/* Remember Me and Forgot Password */}
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="rememberMe"
                />
                <label className="form-check-label" htmlFor="rememberMe">
                  Remember me
                </label>
              </div>
              <a href="#" className="text-danger text-decoration-none">
                Forgot password?
              </a>
            </div>

            {/* Login Button */}
            <Link
            to="/UserDashboard"
              type="submit"
              className="userlogin-login-btn btn userlogin-btn-primary w-100 mb-3 mt-3"
            >
              Login
            </Link>

            {/* Divider */}
            <div className="text-center text-muted my-2">Or</div>

            {/* Social Login Buttons */}
            <button type="button" className="btn-outline-secondary w-100 mb-2">
              <img src={googleicon} alt="Google Icon" /> Login With Google
            </button>
            <button type="button" className="btn-outline-secondary w-100 mb-3">
              <img src={facebookicon} alt="Facebook Icon" /> Login With Facebook
            </button>

            {/* Create Account Link */}
            <p className="text-center">
              Don&apos;t have an account?{" "}
              <a href="#" className="text-danger">
                Create New Account
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default UserLogin;
