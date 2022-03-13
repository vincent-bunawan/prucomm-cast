import Head from "next/head";

const Profile = () => {
  return (
    <div className="profile_page">
      <Head>
        <title>Profile</title>
      </Head>

      <section className="row text-secondary my-3">
        <div className="col-md-4">
          <h3 className="text-center text-uppercase">Edit User Profile</h3>

          <div className="avatar">
            <span>
              <i className="fas fa-camera"></i>
              <p>Change</p>
              <input type="file" name="file" id="file_up" />
            </span>
          </div>

          <div className="form-group mt-3">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Your name"
            />
          </div>

          <div className="form-group mt-3">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              className="form-control"
              disabled={true}
            />
          </div>

          <div className="form-group mt-3">
            <label htmlFor="password">New Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Your new password"
            />
          </div>

          <div className="form-group mt-3">
            <label htmlFor="cf_password">Confirm New Password</label>
            <input
              type="password"
              name="cf_password"
              className="form-control"
              placeholder="Confirm new password"
            />
          </div>

          <button className="btn btn-info mt-3 w-100 text-white">Update</button>
        </div>
      </section>
    </div>
  );
};

export default Profile;
