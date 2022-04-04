import React from "react";

const Form = (props) => {
  return (
    <form onSubmit={props.getWeather}>
      <input name="city" type="text" placeholder="city..."/>
      <input name="country" type="text" placeholder="country..."/>
      <button>Get Weather</button>
    </form>
  );
};

export default Form;
