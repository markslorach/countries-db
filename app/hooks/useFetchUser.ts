import { useEffect, useState } from "react";
import axios from "axios";

export function useFetchUser() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await axios.get("/api/user");
        const data = response.data.user;
        setUser(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchUser();
  }, []);

  return { user };
}
