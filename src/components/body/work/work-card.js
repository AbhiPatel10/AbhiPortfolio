import React, {useEffect} from "react";
import "./work-card.css";
import AOS from "aos";
import "aos/dist/aos.css";

function WorkCard({ item }) {
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
    AOS.refresh();
  }, []);
  return (
    <div data-aos={item.aos} className="work-card">
      <img src={item.companyLogo} className="work-logo" alt="logo"/>
      <div className="work-info">
        <label className="company-name">{item.company}</label>
        <div className="work-dates">
          <label>{item.dateJoining}</label>-<label>{item.dateEnd}</label>
        </div>
        <div className="work-dates">
          <label>{item.designation}</label>
        </div>
        <div className="work-desc">
          <p>{item.work}</p>
        </div>
      </div>
    </div>
  );
}

export default WorkCard;
