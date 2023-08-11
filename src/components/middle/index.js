export default function Middle() {
  return (
    <div className="middle">
      <div className="middle-container">
        <div className="middle-left"></div>
        <div className="middle-right">
          <div className="profile-card">
            <div className="profile-card-container">
              <h2 className="profile-name">Mr. Ezhilvendhan Ponnaiyan</h2>
              <p className="profile-description">
                A professional web and app developer
              </p>
              <div className="profile-downloadables">
                <p>
                  <a href={require("../../assets/resume_ezhil.pdf")}>
                    Download Resume
                  </a>
                </p>
                <p>
                  <a
                    href={"https://github.com/ezhilvendhanponnaiyan"}
                    target="_blank"
                  >
                    Work Project
                  </a>
                </p>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
