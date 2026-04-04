import React, { useState } from "react";

const LoginModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"login" | "register">("login");

  return (
    <>
      {/* 🔥 TRIGGER BUTTON */}
      <a
        className="rr-btn"
        href="#"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(true);
        }}
      >
        <span>
          Login <i className="fa-sharp fa-solid fa-arrow-right"></i>
        </span>
      </a>

      {/* 🔥 MODAL */}
      {isOpen && (
        <>
          <div className="modal fade show d-block" tabIndex={-1}>
            <div className="modal-dialog modal-dialog-centered register-tab">
              <div className="modal-content">
                <div className="modal-body p-0">

                  {/* HEADER */}
                  <div className="d-flex justify-content-between align-items-center p-3 px-4 bg-light-gray">
                    <h2 className="m-0">Welcome to All Happy Events</h2>

                    <button
                      type="button"
                      className="close"
                      onClick={() => setIsOpen(false)}
                    >
                      ✕
                    </button>
                  </div>

                  {/* TABS */}
                  <ul
                    className="nav nav-pills mb-3 horizontal-tab-second justify-content-center nav-fill pt-2"
                  >
                    <li className="nav-item">
                      <a
                        className={`nav-link ${
                          activeTab === "login" ? "active show" : ""
                        }`}
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveTab("login");
                        }}
                      >
                        Log In
                      </a>
                    </li>

                    <li className="nav-item">
                      <a
                        className={`nav-link ${
                          activeTab === "register" ? "active show" : ""
                        }`}
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveTab("register");
                        }}
                      >
                        Register
                      </a>
                    </li>
                  </ul>

                  {/* BODY */}
                  <div className="p-3 px-4 pt-0">

                    <div className="tab-content">

                      {/* LOGIN */}
                      <div
                        className={`tab-pane fade ${
                          activeTab === "login" ? "show active" : ""
                        }`}
                      >
                        <form>

                          <div className="form-group">
                            <input
                              type="email"
                              className="form-control"
                              placeholder="Email or Username"
                            />
                          </div>

                          <div className="form-group">
                            <input
                              type="password"
                              className="form-control"
                              placeholder="Password"
                            />
                          </div>

                          <div className="form-group">
                            <div className="custom-control custom-checkbox form-dark">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="customCheck112"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="customCheck112"
                              >
                                Remember Me
                              </label>
                            </div>
                          </div>

                          <div className="form-group">
                            <button
                              type="submit"
                              className="btn btn-default btn-rounded mt-3"
                            >
                              Log In
                            </button>
                          </div>

                        </form>
                      </div>

                      {/* REGISTER */}
                      <div
                        className={`tab-pane fade ${
                          activeTab === "register" ? "show active" : ""
                        }`}
                      >
                        <form>

                          <div className="form-group">
                            <div className="row">
                              <div className="col text-center">
                                <div className="custom-control custom-radio custom-control-inline form-dark">
                                  <input
                                    type="radio"
                                    id="dgest"
                                    name="dgest"
                                    className="custom-control-input"
                                  />
                                  <label className="custom-control-label" htmlFor="dgest">
                                    Couple
                                  </label>
                                </div>
                              </div>

                              <div className="col text-center">
                                <div className="custom-control custom-radio custom-control-inline form-dark">
                                  <input
                                    type="radio"
                                    id="owner"
                                    name="dgest"
                                    className="custom-control-input"
                                  />
                                  <label className="custom-control-label" htmlFor="owner">
                                    Vendor
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="form-group">
                            <input className="form-control" placeholder="Create Username" type="text" />
                          </div>

                          <div className="form-group">
                            <input className="form-control" placeholder="Password" type="password" />
                          </div>

                          <div className="form-group">
                            <input className="form-control" placeholder="First Name" type="text" />
                          </div>

                          <div className="form-group">
                            <input className="form-control" placeholder="Last Name" type="text" />
                          </div>

                          <div className="form-group">
                            <input className="form-control" placeholder="Email Address" type="text" />
                          </div>

                          <div className="form-group">
                            <button
                              type="submit"
                              className="btn btn-default btn-rounded mt-3"
                            >
                              Create Account
                            </button>
                          </div>

                        </form>
                      </div>

                    </div>

                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* BACKDROP */}
          <div
            className="modal-backdrop fade show"
            onClick={() => setIsOpen(false)}
          ></div>
        </>
      )}
    </>
  );
};

export default LoginModal;