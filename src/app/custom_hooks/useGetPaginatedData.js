import axios from "axios";
import { useState, useEffect, useRef, useContext } from "react";
import { baseUrl } from "./useFetchData";
import AuthContext from "../Context/AuthContext";
import { toast } from "react-toastify";

function useGetPaginatedData(endpoint, dataKey, initialParams = {}) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [pages, setPages] = useState(1);
    const [params, setParams] = useState(initialParams || {});

    const controllerRef = useRef(null); 
    const {setIsLoggedIn} = useContext(AuthContext);

    const fetchData = async (currentParams, currentPage) => {
        const filteredParams = Object.fromEntries(
            Object?.entries(currentParams)?.filter(([_, value]) => value !== "" && value !== null && value !== undefined)
        );     setLoading(true);
        setError(null);
        // console.log(filteredParams,"params")
        try {
            const token = localStorage.getItem('token');
            const is_logged_in = localStorage.getItem('is_logged_in');
            
            const headers = is_logged_in === "true" ? {
                Authorization: `Bearer ${token}`,
            } : {};
        
            const response = await axios.get(`${baseUrl}/api/${endpoint}`, {
                params: { page: currentPage, ...filteredParams },
                headers,
            });
            const fetchedData = response.data;
            setData(fetchedData.results||fetchedData?.[dataKey]);
                setPages(fetchedData?.total_pages || 1);
            } catch (error) {
            if (!axios.isCancel(error)) {
                setError("Error fetching data");
            }
            setData([])
            if (error.response && (error?.response?.data?.code==="token_not_valid"||error?.response?.data?.code==="user_not_found") ) {
                setIsLoggedIn(false);
                localStorage.clear();
              }
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        if (page === 0) setPage(1); 
        fetchData(params, page); 
        return () => {
            if (controllerRef.current) {
                controllerRef.current.abort();
            }
        };
    }, [page, params, endpoint]);

    return {
        data,
        loading,
        error,
        page,
        setPage,
        pages,
        params,
        setParams,
        refetch: () => fetchData(params, page),
    };
}

export default useGetPaginatedData;
