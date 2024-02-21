import { useEffect, useState } from "react";

const useOnlineCheck = () => {
  const [onlineStatus, setOnlineStatus] = useState("online");
  useEffect(() => {
    window.addEventListener("offline", (event) => {
      setOnlineStatus("You are Offline");
    });
  }, []);

  return onlineStatus;
};

export default useOnlineCheck;
