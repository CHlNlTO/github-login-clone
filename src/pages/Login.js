import './Login.css'

export default function Login() {

  return(
    <div className="body">
      <div className="all-container">
        
        <div className="logo-container">
          <img src="https://www.uplooder.net/img/image/91/aa85c0841f14ee083ed03bfc1c81284d/github-logo.png" alt="github-logo" className="logo"></img>
        </div>
        
        <span className="login-text">Sign in to GitHub</span>
        
        <div className="alert-container">
          <span style={{marginRight: 20 + 'px'}}>Incorrect username or password.</span>
          <img src="https://www.uplooder.net/img/image/14/8a6a4b8d349f687ee2dbb3170517c009/close.svg" alt="close-icon" className="alert-close"></img>
        </div>
         
        <div className="signin-container rounded">
          <div className="form-container">
            <div className="username-container">
              <label htmlFor="input-username" className="form-label text-white input-title user-input">Username or email address</label>
              <input type="text" className="form-control input" id="input-username"></input>
            </div>
            <div className="mb-0">
              <div className="password-container">
                <label htmlFor="input-password" className="form-label text-white input-title">Password</label>
                <a href="#" className="forget-password">Forgot password?</a>
              </div>
              <input type="password" className="form-control input" id="inputPassword"></input>
            </div>
          </div>
          <button type="button" className="btn btn-success signin-btn">Sign in</button>
        </div>
  
        <div className="new-container" style={{paddingTop: 19 + 'px'}}>
          <span><a className="passkey">Sign in with a passkey</a></span>
          <span className="create-account">
            <span className="create-text"><span style={{fontSize: 15.6 + 'px', fontWeight: 400}} className="new-text">New to GitHub? </span><a href="#" style={{fontSize: 15.9 + 'px', fontWeight: 400}} className="create-account-text">Create an account</a></span>
          </span>
        </div>
      </div>
      <div className="links-container">
          <a href="#" className='text-muted link-text'>Terms</a>
          <a href="#" className='text-muted link-text'>Privacy</a>
          <a href="#" className='text-muted link-text'>Docs</a>
          <a href="#" className='text-muted link-text'>Contact GitHub Support</a>
          <a href="#" className='text-muted link-text'>Manage cookies</a>
          <a href="#" className='text-muted link-text'>Do not share my personal information</a>
        </div>
    </div>
  )
}