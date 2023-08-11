import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Projects() {
  const projectSlider = [
    {
      id: 1,
      title: "currency converter",
      categories: "javascript",
      github: "https://github.com/ezhilvendhanponnaiyan",
    },

    {
      id: 2,
      title: "Register with us",
      categories: "javascript",
      github: "https://github.com/ezhilvendhanponnaiyan",
    },

    {
      id: 3,
      title: "QrCode",
      categories: "html",
      github: "https://github.com/ezhilvendhanponnaiyan/qr-code-component-main",
    },

    {
      id: 4,
      title: "profileCard",
      categories: "html",
      github:
        "https://github.com/ezhilvendhanponnaiyan/profile-card-component-main",
    },
    {
      id: 5,
      title: "orderSummary",
      categories: "html",
      github:
        "https://github.com/ezhilvendhanponnaiyan/order-summary-component-main",
    },
  ];
  return (
    <div id="projects" className="projects">
      <div className="projects-container">
        <h2 className="projects-title">Projects</h2>
        <div className="card-container">
          <Carousel
            autoPlay
            infiniteLoop={true}
            showArrows={true}
            showThumbs={false}
            transitionTime={1000}
            interval={2000}
          >
            {projectSlider.map((item) => {
              return (
                <div className="slides" key={item?.id}>
                  <div className="slide-container">
                    <img
                      src={require(`../../assets/images/${item?.id}.png`)}
                      alt={item?.title}
                      className="slide-image"
                    />
                    <h3>{item?.title}</h3>
                    <a
                      href={item?.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
