import axios from "axios";
import { useContext, useEffect, useMemo, useState } from "react";
import AuthContext from "../Context/AuthContext";
export const baseUrl=import.meta.env.VITE_REACT_APP_BASE_URL
export const host=import.meta.env.VITE_REACT_APP_HOST_URL
const baseURL = import.meta.env.VITE_REACT_APP_BASE_URL;
export const WSBaseUrl=import.meta.env.VITE_REACT_APP_WS_URL

function useFetchData(endpoint) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const {setIsLoggedIn} = useContext(AuthContext);

  const token = useMemo(() => localStorage.getItem("token"), []);
  const is_logged_in = useMemo(() => localStorage.getItem("is_logged_in"), []);
  // console.log(`${baseURL}/api/${endpoint}`,"endpoint")
  const fetchData = async () => {
  try {
      setLoading(true);
      let response;
        response = await axios.get(`${baseURL}/api/${endpoint}`, {
          headers: is_logged_in === "true" 
          ? { Authorization: `Bearer ${token}` } 
          : {}
        })         
      const fetchedData = await response.data;
      setData(fetchedData);
      setLoading(false);
      // console.log(response,"fetchedData")
    } catch (error) {
    console.log(error)
      if (error.response && (error?.response?.data?.code==="token_not_valid"||error?.response?.data?.code==="user_not_found") ) {
        setIsLoggedIn(false);
        localStorage.clear();
      }
      if(error?.response?.status===404)
      setNotFound(true)
      setData(null)
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (endpoint&&endpoint!==undefined) {
      fetchData();
    }
  }, [endpoint]);

  return { data, loading,setData,fetchData,notFound };
}

export default useFetchData;
