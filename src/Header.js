import lithuania from "./assets/lithuania.png";
import ukraine from "./assets/ukraine.png";
import unitedKingdom from "./assets/united-kingdom.png";
import russia from "./assets/russia.png";

const Header = () => {
  return (
    <header className="header" id="header">
      <div className="flags">
        <ul>
          <li>
            <img src={lithuania} alt="lt flag" />
          </li>
          <li>
            <img src={ukraine} alt="ua flag" />
          </li>
          <li>
            <img src={unitedKingdom} alt="uk flag" />
          </li>
          <li>
            <img src={russia} alt="ru flag" />
          </li>
        </ul>
      </div>
      <h1>Matematikos terminų žodynas</h1>
    </header>
  );
};

export default Header;
