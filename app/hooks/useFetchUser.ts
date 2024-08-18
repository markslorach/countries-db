import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import axios from "axios";

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
        const response = await fetch("/api/user");
        const data = await response.json();
        setUser(data.user);
      } catch (error) {
        console.log(error);
      }
    }

    fetchUser();
  }, [isLoaded, isSignedIn]);

  return { user };
}