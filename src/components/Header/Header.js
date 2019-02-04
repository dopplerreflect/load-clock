import React, { useState, useEffect, useContext } from "react";
import SettingsContext from "../SettingsContext/Context";
import moment from "moment-timezone";
import "./Header.scss";

const Header = ({ temperature, locationTimezone, loadsFlownToday }) => {
  const { celsius, dispatch } = useContext(SettingsContext);
  const [time, setTime] = useState(null);
  const updateTime = locationTimezone => {
    setTime(moment.tz(locationTimezone).format("h:mm A"));
  };
  useEffect(() => {
    const timeInterval = setInterval(() => {
      updateTime(locationTimezone);
    }, 1000);
    return () => clearInterval(timeInterval);
  }, [locationTimezone]);
  const toggleBoolSetting = attribute => {
    dispatch({ type: "toggleBoolSetting", attribute });
  };
  return (
    <div className="Header">
      <div className="loadsFlown">Loads Flown Today: {loadsFlownToday}</div>
      <div className="time">{time && time}</div>
      <div
        className="temperature"
        style={{
          color: `hsl(${280 - temperature * 3}, 100%, 50%)`
        }}
        onClick={() => toggleBoolSetting("celsius")}
      >
        {temperature
          ? celsius
            ? `${(((temperature - 32) * 5) / 9).toFixed(1)} °C`
            : `${temperature} °F`
          : null}
      </div>
    </div>
  );
};
export default Header;
