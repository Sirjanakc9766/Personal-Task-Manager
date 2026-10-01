import { useState } from "react";

function Profile() {
  const [isEditing, setIsEditing] = useState(false);

  const [profile, setProfile] = useState({
    name: "Mausami Dong",
    email: "dongmausami@gmail.com",
    studentId: "IT2024-045",
    joined: "Jan 2026",
    role: "BSc IT Student",
  });

  const [formData, setFormData] = useState(profile);

  const handleEdit = () => {
    setFormData(profile);
    setIsEditing(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();

    setProfile(formData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData(profile);
    setIsEditing(false);
  };

  return (
    <>
      <div className="page-header">
        <div>
          <h1>My Profile</h1>

          <p>
            View and update your account information.
          </p>
        </div>
      </div>

      <div className="profile-card">

        <div className="profile-top">

          <span className="profile-avatar">
            👤
          </span>

          <div>
            <div className="profile-name">
              {profile.name}
            </div>

            <div className="profile-role">
              {profile.role}
            </div>
          </div>

          <button
            className="btn btn-primary profile-edit-btn"
            type="button"
            onClick={handleEdit}
          >
            ✎ Edit Profile
          </button>

        </div>


        {isEditing ? (

          <form
            className="profile-edit-form"
            onSubmit={handleSave}
          >

            <h3 className="profile-section-title">
              Edit Profile
            </h3>

            <div className="profile-form-grid">

              <div className="form-field">
                <label>Full Name</label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-field">
                <label>Email</label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-field">
                <label>Student ID</label>

                <input
                  type="text"
                  name="studentId"
                  value={formData.studentId}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-field">
                <label>Course</label>

                <input
                  type="text"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                />
              </div>

            </div>


            <div className="profile-edit-actions">

              <button
                type="button"
                className="btn btn-ghost"
                onClick={handleCancel}
              >
                Cancel
              </button>

              <button
                type="submit"
                className="btn btn-primary"
              >
                Save Changes
              </button>

            </div>

          </form>

        ) : (

          <>
            <h3 className="profile-section-title">
              Account Information
            </h3>

            <ul className="profile-info-list">

              <li>
                <span>👤 Full Name</span>
                <span>{profile.name}</span>
              </li>

              <li>
                <span>✉️ Email</span>
                <span>{profile.email}</span>
              </li>

              <li>
                <span>🆔 Student ID</span>
                <span>{profile.studentId}</span>
              </li>

              <li>
                <span>🎓 Course</span>
                <span>{profile.role}</span>
              </li>

              <li>
                <span>📅 Joined On</span>
                <span>{profile.joined}</span>
              </li>

            </ul>
          </>

        )}

      </div>
    </>
  );
}

export default Profile;