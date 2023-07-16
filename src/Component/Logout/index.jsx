import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { LOCATIONS } from "constants/index";

function  Logout(props) {
  const navigate = useNavigate();
  const token = window.localStorage.getItem("TOKEN");
  useEffect(() => {
    if (token) {
      window.localStorage.removeItem("TOKEN")
      window.localStorage.removeItem("REFRESH_TOKEN")
      navigate(LOCATIONS.LOGIN);
    } else {
      navigate(LOCATIONS.LOGIN);
    }
  }, []);
  return <div>You ared Logout</div>;
}

export default Logout;
