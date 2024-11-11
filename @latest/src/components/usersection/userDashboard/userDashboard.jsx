import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./userDashboard.css";
import { Link } from "react-router-dom";

const UserDashboard = () => {
  return (
    <div className="userdashbaord-main-div">
      <div className="container">
        <div className="row">
          {/* Sidebar */}
          <div className="col-md-3 col-lg-2 px-0 sidebar bg-white">
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  <i className="fas fa-th-large me-2"></i>Dashboard
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fas fa-store me-2"></i>Vendor Panel
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fas fa-shopping-bag me-2"></i>Purchased Items
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fas fa-money-bill-wave me-2"></i>Deposit
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fas fa-exchange-alt me-2"></i>Transactions
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fas fa-gift me-2"></i>Rewards
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fas fa-handshake me-2"></i>Affiliate Program
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fas fa-paper-plane me-2"></i>Withdraw
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fas fa-truck me-2"></i>Order Tracking
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fas fa-heart me-2"></i>Favorite Sellers
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fas fa-envelope me-2"></i>Messages
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fas fa-ticket-alt me-2"></i>Tickets
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fas fa-exclamation-circle me-2"></i>Disputes
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fas fa-user-edit me-2"></i>Edit Profile
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fas fa-lock me-2"></i>Reset Password
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fas fa-tags me-2"></i>Pricing Plans
                </a>
              </li>
              <li className="nav-item mt-auto">
                <Link className="nav-link" to="/UserLogin">
                  <i className="fas fa-sign-out-alt me-2"></i>Logout
                </Link>
              </li>
            </ul>
          </div>

          {/* Main Dashboard Content */}
          <div className="col-md-9 col-lg-10 p-4 bg-white">
            <h3 className="fw-bold">Dashboard</h3>

            {/* Statistics Cards */}
            <div className="row mb-4">
              <div className="col-sm-6 col-md-3">
                <div className=" p-5 text-center userdashboard-order-card">
                  <div>
                    <i
                      className="fas fa-box fa-4x mb-2"
                      style={{ color: "#5B68FF" }}
                    ></i>
                    <h5 className="fw-semibold">15</h5>
                    <p className="fw-medium">Total Orders</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className=" p-5 text-center userdashboard-pending-card">
                  <div>
                    <i
                      className="fas fa-hourglass-half fa-4x mb-2"
                      style={{ color: "#20c997" }}
                    ></i>
                    <h5 className="fw-semibold">12</h5>
                    <p className="fw-medium">Pending Orders</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="p-5 text-center userdashboard-bonus-card">
                  <div>
                    <i
                      className="fas fa-coins fa-4x mb-2"
                      style={{ color: "#fd7e14" }}
                    ></i>
                    <h5 className="fw-semibold">$4,094.43</h5>
                    <p className="fw-medium">Affiliate Bonus</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className=" p-5 text-center userdashboard-wallet-card">
                  <div>
                    <i
                      className="fas fa-wallet fa-4x mb-2"
                      style={{ color: "#0dcaf0" }}
                    ></i>
                    <h5 className="fw-semibold">$662.79</h5>
                    <p className="fw-medium">Wallet Balance</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Orders Table */}
            <h4 className="fw-bold">Recent Orders</h4>
            <div className="recent-orders-table-wrapper">
              <table className="table table-bordered mt-3 text-center">
                <thead className="table-light">
                  <tr>
                    <th className="text-danger">#Order</th>
                    <th className="text-danger">Date</th>
                    <th className="text-danger">Order Total</th>
                    <th className="text-danger">Order Status</th>
                    <th className="text-danger">View</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>yXvC1729269652</td>
                    <td>18 Oct 2024</td>
                    <td>$181.82</td>
                    <td>
                      <button type="button" className="btn btn-warning">
                        Pending
                      </button>
                    </td>
                    <td>
                      <i className="fas fa-eye"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>yXvC1729269652</td>
                    <td>18 Oct 2024</td>
                    <td>$181.82</td>
                    <td>
                      <button type="button" className="btn btn-warning">
                        Pending
                      </button>
                    </td>
                    <td>
                      <i className="fas fa-eye"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>yXvC1729269652</td>
                    <td>18 Oct 2024</td>
                    <td>$181.82</td>
                    <td>
                      <button type="button" className="btn btn-warning">
                        Pending
                      </button>
                    </td>
                    <td>
                      <i className="fas fa-eye"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>yXvC1729269652</td>
                    <td>18 Oct 2024</td>
                    <td>$181.82</td>
                    <td>
                      <button type="button" className="btn btn-warning">
                        Pending
                      </button>
                    </td>
                    <td>
                      <i className="fas fa-eye"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>yXvC1729269652</td>
                    <td>18 Oct 2024</td>
                    <td>$181.82</td>
                    <td>
                      <button type="button" className="btn btn-warning">
                        Pending
                      </button>
                    </td>
                    <td>
                      <i className="fas fa-eye"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>yXvC1729269652</td>
                    <td>18 Oct 2024</td>
                    <td>$181.82</td>
                    <td>
                      <button type="button" className="btn btn-warning">
                        Pending
                      </button>
                    </td>
                    <td>
                      <i className="fas fa-eye"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>yXvC1729269652</td>
                    <td>18 Oct 2024</td>
                    <td>$181.82</td>
                    <td>
                      <button type="button" className="btn btn-warning">
                        Pending
                      </button>
                    </td>
                    <td>
                      <i className="fas fa-eye"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>yXvC1729269652</td>
                    <td>18 Oct 2024</td>
                    <td>$181.82</td>
                    <td>
                      <button type="button" className="btn btn-warning">
                        Pending
                      </button>
                    </td>
                    <td>
                      <i className="fas fa-eye"></i>
                    </td>
                  </tr>
                  {/* Add more rows as needed */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
