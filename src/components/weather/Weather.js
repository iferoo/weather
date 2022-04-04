import React from "react";

const Weather = (props) => {
  return (
    <div className="info">
      {props.state.tempreature && (
        <p className="info_key">
          Tempreature:
          <span className="info_value">{props.state.tempreature}</span>
        </p>
      )}
      {props.state.city && (
        <p className="info_key">
          City: <span className="info_value">{props.state.city}</span>
        </p>
      )}
      {props.state.country && (
        <p className="info_key">
          Country: <span className="info_value">{props.state.country}</span>
        </p>
      )}
      {props.state.humidity && (
        <p className="info_key">
          Humidity: <span className="info_value">{props.state.humidity}</span>
        </p>
      )}
      {props.state.description && (
        <p className="info_key">
          Description:
          <span className="info_value">{props.state.description}</span>
        </p>
      )}
      {props.state.error && (
        <p className="info_key">
          Error: <span className="info_value">{props.state.error}</span>
        </p>
      )}
    </div>
  );
};

export default Weather;
