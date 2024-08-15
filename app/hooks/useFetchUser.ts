import { useEffect, useState } from 'react';
import axios from 'axios';

export function useFetchUser() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await axios.get('/api/user'); 
        setUser(response.data.user);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchUser();
  }, []);

  return { user, isLoading };
}