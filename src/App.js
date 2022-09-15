import "./App.css";
import Header from "./component/Header";
import Form from "./component/Form";
import { useCallback, useEffect, useState } from "react";
import { useMemo } from "react";
import axios from "axios";

function App() {
  const [state, setState] = useState({
    lat: null,
    long: null,
    firstname: "",
    lastname: "",
    jobposition: "",
    jobtitle: "",
    companyname: "",
  });
  const options = useMemo(
    () => ({
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    }),

    []
  );

  function success(pos) {
    const crd = pos.coords;
    setState((s) => ({
      ...s,
      lat: crd.latitude,
      long: crd.longitude,
      data: [],
    }));
  }

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  useEffect(() => {
    if (!navigator.geolocation) {
      alert("No GeoLocation Found ");
    } else {
      navigator.geolocation.getCurrentPosition(success, error);
    }
    return () => {};
  }, [options]);

  const getAddress = useCallback(async () => {
    var config = {
      method: "get",
      url: `https://api.geoapify.com/v1/geocode/reverse?lat=${state.lat}&lon=${state.long}&apiKey=${process.env.REACT_APP_NOT_SECRET_CODE}`,
      headers: {},
    };
    try {
      const response = await axios(config);
      setState((s) => ({
        ...s,
        data: response.data.features,
      }));
    } catch (error) {}
  }, [state.lat, state.long]);

  useEffect(() => {
    if (state.lat && state.long) {
      getAddress();
    }
  }, [state.lat, state.long, getAddress]);

  const handleInput = (e) => {
    const { name, value } = e.target;

    setState((s) => ({
      ...s,
      [name]: value,
    }));
  };

  const { firstname, lastname, jobposition, jobtitle, companyname } = state;
  const formdata = { firstname, lastname, jobposition, jobtitle, companyname };
  return (
    <>
      <Header />
      <Form data={state.data} handleInput={handleInput} formdata={formdata} />
    </>
  );
}

export default App;
