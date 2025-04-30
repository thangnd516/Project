import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./FordSignIn.scss";
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { doLogin } from '../../redux/action/userAction';
import { postLogin } from '../../service/apiService';
import { ImSpinner3 } from "react-icons/im";

const FordSignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const handleSubmit = () => {

    console.log('Submit form with:', { email, password });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateEmail = (email: string) => {
    return String(email).toLowerCase(
    ).match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
  }
  const handleLogin = async () => {
    // validate
    const isValidEmail = validateEmail(email);
    if (!isValidEmail) {
      toast.error("Invalid email")
    }
    if (!password) {
      toast.error("Invalid password")
    }
    setIsLoading(true);
    let data = await postLogin(email, password);
    if (data && data.EC === 0) {
      dispatch(doLogin(data))
      toast.success(data.EM);
      setIsLoading(true);
      navigate("/")
    }
    if (data && +data.EC !== 0) {
      toast.error(data.EM)
      setIsLoading(false);
    }
  }


  return (
    <div className="ford-signin">
      <img
        src="https://prodb2cuicontentdelivery-d0bbevfjaxfmedda.z01.azurefd.net/b2cui/assets/images/ford-logo.svg"
        alt="Ford Logo"
        className="logo"
      />

      <div className="login-container">
        <h1>SIGN IN</h1>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="password-container">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                className="toggle-password"
                onClick={togglePasswordVisibility}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </span>
            </div>
            <a href="#" className="forgot-password">Forgot password?</a>
          </div>

          <div className=''>
            <button disabled={isLoading} type="submit" className="sign-in-btn">
             { isLoading === true  &&  <ImSpinner3 className='loader-icon' /> }
              <span>Sign In </span>
            </button>

          </div>
        </form>

        <div className="divider"></div>

        <p className="no-account">Don't have an account?</p>
        <button className="create-account-btn">Create Account</button>
      </div>
    </div>
  );
};

export default FordSignIn;