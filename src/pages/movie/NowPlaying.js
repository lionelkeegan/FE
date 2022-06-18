import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateMovies } from "../../features/moviesSlice";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoint";

function NowPlaying() {
    // Simpan API_KEY dan URL ke variable
    // state penyimpanan data movies
    const dispatch = useDispatch();

    useEffect(() => { getNowPlaying(); }, []);

    async function getNowPlaying() {
        // Fetch data dari axios
        const response =await axios(ENDPOINTS.NOW_PLAYING);

        const movies = response.data.results;
        dispatch(updateMovies(movies));
      }

    return (
    <div>
        <Hero/>
        <Movies title="Now Playing Movies"/>
    </div>
    );
}

export default NowPlaying;