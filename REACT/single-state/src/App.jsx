import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [user, setUser] = useState({
    name : "",
    email : "",
    password : "",
    repeatPassword: ""
  });

  const handleChange = (e)=>{
    setUser((prevUser)=>({
      ...prevUser,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section
      className="d-flex align-items-center justify-content-center min-vh-100"
      style={{
        backgroundImage: 'url("https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100vw",
      }}
    >
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          {/* Form Card */}
          <div className="col-12 col-md-7 col-lg-5 col-xl-4 mb-4">
            <div className="card w-100" style={{ borderRadius: "15px" }}>
              <div className="card-body p-4">
                <h3 className="text-uppercase text-center mb-4">Create an account</h3>

                <form>
                  <div className="form-outline mb-3">
                    <input type="text" name="name" className="form-control" value={user.name} onChange={handleChange}/>
                    <label className="form-label">Your Name</label>
                  </div>

                  <div className="form-outline mb-3">
                    <input type="email" name="email" className="form-control" value={user.email} onChange={handleChange} />
                    <label className="form-label">Your Email</label>
                  </div>

                  <div className="form-outline mb-3">
                    <input type="password"  name="password"  className="form-control"  value={user.password} onChange={handleChange} />
                    <label className="form-label">Password</label>
                  </div>

                  <div className="form-outline mb-3">
                    <input type="password"  name="repeatPassword"  className="form-control"  value={user.repeatPassword} onChange={handleChange} />
                    <label className="form-label">Repeat Password</label>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Display Card */}
          <div className="col-12 col-md-7 col-lg-5 col-xl-4">
            <div className="card w-100" style={{ borderRadius: "15px" }}>
              <div className="card-body p-4">
                <h4 className="text-uppercase text-center mb-3">Input Data</h4>
                <p><strong>Name:</strong> {user.name || "N/A"}</p>
                <p><strong>Email:</strong> {user.email || "N/A"}</p>
                <p><strong>Password:</strong> {user.password || "N/A"}</p>
                <p><strong>Repeat Password:</strong> {user.repeatPassword || "N/A"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}

export default App;
