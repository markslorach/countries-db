import { useEffect, useState } from "react";
import axios from "axios";
import { useUser } from "@clerk/nextjs";

export function useFetchUser() {
  const [user, setUser] = useState(null);
  const { isLoaded, isSignedIn } = useUser();

  useEffect(() => {
    async function fetchUser() {
      if (!isLoaded || !isSignedIn) { 
        setUser(null);
        return; 
      }

      try {
        const response = await axios.get("/api/user");
        const data = response.data.user;
        setUser(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchUser();
  }, [isLoaded, isSignedIn]);

  return { user };
}