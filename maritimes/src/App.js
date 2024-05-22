import { useState } from "react";
import "./App.css";
import {
  Calendar,
  CloudRainHeavy,
  GeoAlt,
  InfoCircle,
  Moon,
  Sun,
} from "react-bootstrap-icons";

function App() {
  const [date, setDate] = useState(1000);
  const home = (
    <a
      target="_blank"
      rel="noreferrer"
      href="https://www.google.com/maps/place/41+Eaglewood+Dr,+Hanwell,+NB+E3E+2K4/@45.8855736,-66.7739603,17z/data=!3m1!4b1!4m5!3m4!1s0x4ca424bfa4cc7f8d:0xca16e3619148c405!8m2!3d45.8855699!4d-66.77138?entry=ttu">
      41 Eaglewood Drive
    </a>
  );
  const handleSelect = (e) => {
    setDate(parseInt(e.target.value));
    // You can perform any action with the selected value here
  };
  const days = [
    "Thursday, Aug 1",
    "Friday, Aug 2",
    "Saturday, Aug 3",
    "Sunday, Aug 4",
    "Monday, Aug 5",
    "Tuesday, Aug 6",
    "Wednesday, Aug 7",
    "Thursday, Aug 8",
    "Friday, Aug 9",
    "Saturday, Aug 10",
    "Sunday, Aug 11",
    "Monday, Aug 12",
    "Tuesday, Aug 13",
    "Wednesday, Aug 14",
    "Thursday, Aug 15",
    "Friday, Aug 16",
    "Saturday, Aug 17",
  ];
  const data = [
    {
      date: ["Thursday, Aug 1"],
      location: ["Calgary", "Fredericton"],
      accomodations: [home],
      sunActivities: ["Arrive @ 7:22pm", "Have a drink", "Artic Spa"],
      rainActivities: [],
      info: [
        "Remember Park Pass!",
        "Flight: PD 2371",
        "Airline Confirmation: B1W96Y",
      ],
    },
    {
      date: ["Friday, Aug 2"],
      location: ["Fredericton"],
      accomodations: [home],
      sunActivities: [
        "Nashwaak River Tubing: 1575, Route 148, Durham Bridge, NB E6C 2Z9, (506) 457-2300",
        "Tour of Downtown Fredericton",
        "Kayaking",
      ],
      rainActivities: [
        "Beaverbrook Art Gallery",
        "Downtown Fredericton Shops",
        "Kings Landing",
        "Breweries",
      ],
      info: ["Food: Naru, BBQ at home, Cannelloni"],
    },
    {
      date: ["Saturday, Aug 3"],
      location: ["Fredericton"],
      accomodations: [home],
      sunActivities: [
        "Fredericton Farmer's Market",
        "Nashwaak River",
        "Tour of Downtown Fredericton",
      ],
      rainActivities: [
        "Beaverbrook Art Gallery",
        "Downtown Fredericton Shops",
        "Kings Landing",
        "Breweries",
      ],
      info: ["Food: Naru, BBQ at home, Cannelloni"],
    },
    {
      date: ["Sunday, Aug 4"],
      location: ["Fredericton to St.Martins/Saint John to Fredericton"],
      accomodations: [home],
      sunActivities: [
        "St. Martin's Caves",
        "Irving Nature Park",
        "Area 506",
        "Tour of Uptown",
        "Hopscotch",
      ],
      rainActivities: [],
      info: ["You must do Hopscoth for a drink", "Return to SJ in the evening"],
    },
    {
      date: ["Monday, Aug 5"],
      location: ["Fredericton to Prince Edward Island"],
      accomodations: [
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.google.com/maps/place/34+Homestead+Ln,+Long+Creek,+PE+C0A+1H1/@46.18361,-63.2849749,17z/data=!3m1!4b1!4m6!3m5!1s0x4b5faaff5447cc53:0xd1f88c437f8f926c!8m2!3d46.18361!4d-63.2824!16s%2Fg%2F11rq8hxj_1?entry=ttu">
          34 Homestead Ln, PEI
        </a>,
      ],
      sunActivities: ["Visit Alan's parents", "Charlottetown in evening"],
      rainActivities: [],
      info: [""],
    },
    {
      date: ["Tuesday, Aug 6"],
      location: ["Prince Edward Island"],
      accomodations: [
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.google.com/maps/place/34+Homestead+Ln,+Long+Creek,+PE+C0A+1H1/@46.18361,-63.2849749,17z/data=!3m1!4b1!4m6!3m5!1s0x4b5faaff5447cc53:0xd1f88c437f8f926c!8m2!3d46.18361!4d-63.2824!16s%2Fg%2F11rq8hxj_1?entry=ttu">
          34 Homestead Ln, PEI
        </a>,
      ],
      sunActivities: ["Cavendish Beach", "Charlottetown"],
      rainActivities: [],
      info: ["Food: Blue Mussell Cafe"],
    },
    {
      date: ["Wednesday, Aug 7"],
      location: ["Prince Edward Island"],
      accomodations: [
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.google.com/maps/place/34+Homestead+Ln,+Long+Creek,+PE+C0A+1H1/@46.18361,-63.2849749,17z/data=!3m1!4b1!4m6!3m5!1s0x4b5faaff5447cc53:0xd1f88c437f8f926c!8m2!3d46.18361!4d-63.2824!16s%2Fg%2F11rq8hxj_1?entry=ttu">
          34 Homestead Ln, PEI
        </a>,
      ],
      sunActivities: ["Cavendish Beach", "Charlottetown"],
      rainActivities: [],
      info: ["Food: Lobster Boil"],
    },
    {
      date: ["Thursday, Aug 8"],
      location: ["Prince Edward Island"],
      accomodations: [
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.google.com/maps/place/34+Homestead+Ln,+Long+Creek,+PE+C0A+1H1/@46.18361,-63.2849749,17z/data=!3m1!4b1!4m6!3m5!1s0x4b5faaff5447cc53:0xd1f88c437f8f926c!8m2!3d46.18361!4d-63.2824!16s%2Fg%2F11rq8hxj_1?entry=ttu">
          34 Homestead Ln, PEI
        </a>,
      ],
      sunActivities: ["Cavendish Beach", "Charlottetown"],
      rainActivities: [],
      info: ["Food: Lobster Boil"],
    },
    {
      date: ["Friday, Aug 9"],
      location: ["Prince Edward Island", "Cheticamp"],
      accomodations: [
        <a
          target="_blank"
          rel="noreferrer"
          href="https://maps.app.goo.gl/NN5s3Ke2rdmDQ9Hi7">
          Auberge Bay Wind Suites, 15299 Cabot Trail, B0E 1H0 Chéticamp, Canada
        </a>,
      ],
      sunActivities: ["Explore Cheticamp"],
      rainActivities: [],
      info: [],
    },
    {
      date: ["Saturday, Aug 10"],
      location: ["Chéticamp"],
      accomodations: [
        <a
          target="_blank"
          rel="noreferrer"
          href="https://maps.app.goo.gl/NN5s3Ke2rdmDQ9Hi7">
          Auberge Bay Wind Suites, 15299 Cabot Trail, B0E 1H0 Chéticamp, Canada
        </a>,
      ],
      sunActivities: ["Skyline Trail", "Cape Bretan Highlands National Park"],
      rainActivities: [],
      info: [],
    },
    {
      date: ["Sunday, Aug 11"],
      location: ["Halifax"],
      accomodations: [
        <a
          target="_blank"
          rel="noreferrer"
          href="https://maps.app.goo.gl/dHCTqLEj9ifGV49R6">
          Chocolate Lake Hotel, 250 Saint Margaret's Bay Road, Halifax, B3N 1J4
        </a>,
      ],
      sunActivities: [
        "Citadel",
        "Maritime Museum of the Atlantic",
        "Halifax Market",
        "Peggy's Cove",
        "Boardwalk",
      ],
      rainActivities: [],
      info: [],
    },
    {
      date: ["Monday, Aug 12"],
      location: ["Halifax"],
      accomodations: [
        <a
          target="_blank"
          rel="noreferrer"
          href="https://maps.app.goo.gl/dHCTqLEj9ifGV49R6">
          Chocolate Lake Hotel, 250 Saint Margaret's Bay Road, Halifax, B3N 1J4
        </a>,
      ],
      sunActivities: [
        "Citadel",
        "Maritime Museum of the Atlantic",
        "Halifax Market",
        "Peggy's Cove",
        "Boardwalk",
      ],
      rainActivities: [],
      info: [],
    },
    {
      date: ["Tuesday, Aug 13"],
      location: ["Halifax"],
      accomodations: [
        <a
          target="_blank"
          rel="noreferrer"
          href="https://maps.app.goo.gl/dHCTqLEj9ifGV49R6">
          Chocolate Lake Hotel, 250 Saint Margaret's Bay Road, Halifax, B3N 1J4
        </a>,
      ],
      sunActivities: [
        "Citadel",
        "Maritime Museum of the Atlantic",
        "Halifax Market",
        "Peggy's Cove",
        "Boardwalk",
      ],
      rainActivities: [],
      info: [],
    },
    {
      date: ["Wednesday, Aug 14"],
      location: ["Moncton"],
      accomodations: [
        <a
          target="_blank"
          rel="noreferrer"
          href="https://maps.app.goo.gl/ZryZ6wy3uhBNpSzAA">
          Best Western Moncton, 300 Lewisville Road, Moncton
        </a>,
      ],
      sunActivities: ["Hopewell Rocks", "Shediac", "Alma/Fundy National Park"],
      rainActivities: [],
      info: [
        "If you plan to visit Alma, tomorrow may be a better day to reduce driving.",
      ],
    },
    {
      date: ["Thursday, Aug 15"],
      location: ["Fredericton"],
      accomodations: [home],
      sunActivities: ["Alma", "Fredericton Garrison Night Market"],
      rainActivities: [],
      info: ["You could do Alma on the way home."],
    },
    {
      date: ["Friday, Aug 16"],
      location: ["Fredericton", "St. Andrews"],
      accomodations: [home],
      sunActivities: [
        "Minister's Island",
        "St. Andrews-by-the-Sea",
        "Whale Watching",
      ],
      rainActivities: ["Minister's Island"],
      info: [],
    },
    {
      date: ["Saturday, Aug 17"],
      location: ["Fredericton"],
      accomodations: [home],
      sunActivities: [],
      rainActivities: [],
      info: [
        "Departure: 3:10PM",
        "Flight: PD 2380",
        "Airline Confirmation: B1W96Y",
      ],
    },
  ];
  return (
    <div>
      <div className="text-white py-2 text-center bg-main">
        <div className="py-3">
          <p className="m-0">Roger & Katharine</p>
          <h2 className="m-0 fw-bold">Maritime Trip 2024</h2>
        </div>
      </div>

      <div className="bg-light min-vh-100 pt-2 px-3">
        <div className="d-flex justify-content-center align-items-center mt-4">
          <Calendar className="me-3 text-secondary" />
          <select className="form-select w-50" onChange={handleSelect}>
            <option defaultValue value={1000}>
              All
            </option>

            {days.map((day, index) => (
              <option key={index} value={index}>
                {day}
              </option>
            ))}
          </select>
        </div>
        {data.map(
          (item, i) =>
            (date === i || date === 1000) && (
              <div key={i}>
                <h2 className="pt-4 fw-bold">{days[i]}</h2>

                <div className="d-flex flex-row justify-content-center align-items-center pb-1">
                  {/* LOCATION */}
                  <div className="col-1 text-secondary mb-auto">
                    <GeoAlt />
                    {/* <span className="m-0">City</span> */}
                  </div>
                  <div className="col-11">
                    {item.location.map((item) => (
                      <p className="m-0">{item}</p>
                    ))}
                  </div>
                </div>
                {/* ACCOMMODATIONS */}
                <div className="d-flex flex-row justify-content-center align-items-center pb-1">
                  <div className="col-1 text-secondary mb-auto">
                    <Moon />
                  </div>
                  <div className="col-11">
                    {item.accomodations.map((item) => (
                      <p className="m-0">{item}</p>
                    ))}
                  </div>
                </div>

                {/* SUN ACTIVITIES*/}
                <div className="d-flex flex-row justify-content-center align-items-center pb-1">
                  <div className="col-1 text-secondary mb-auto">
                    <Sun />
                  </div>
                  <div className="col-11">
                    {item.sunActivities.map((item) => (
                      <p className="m-0">{item}</p>
                    ))}
                  </div>
                </div>
                {/* RAIN ACTIVITIES*/}
                {item.rainActivities.length !== 0 && (
                  <div className="d-flex flex-row justify-content-center align-items-center pb-1">
                    <div className="col-1 text-secondary mb-auto">
                      <CloudRainHeavy />
                    </div>
                    <div className="col-11">
                      <p className="m-0">
                        {item.rainActivities.map((item) => (
                          <p className="m-0">{item}</p>
                        ))}
                      </p>
                    </div>
                  </div>
                )}

                {/* INFO */}
                <div className="d-flex flex-row justify-content-center align-items-center pb-1">
                  <div className="col-1 text-secondary mb-auto">
                    <InfoCircle />
                  </div>
                  <div className="col-11">
                    {item.info.map((item) => (
                      <p className="m-0">{item}</p>
                    ))}
                  </div>
                </div>
                <hr />
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default App;
