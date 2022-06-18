import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateMovies } from "../../features/moviesSlice";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoint";

function TopRated() {
    // Simpan API_KEY dan URL ke variable
    // state penyimpanan data movies
    const dispatch = useDispatch();

    useEffect(() => { getTopRated(); },[]);

    async function getTopRated() {
        // Fetch data dari axios
        const response =await axios(ENDPOINTS.TOP_RATED);

        const movies = response.data.results;
        dispatch(updateMovies(movies));
      }

    return (
    <div>
        <Hero/>
        <Movies title="Top Rated Movies"/>
    </div>
    );
}

export default TopRated;