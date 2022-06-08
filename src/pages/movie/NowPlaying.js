import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoint";

function NowPlaying() {
    // Simpan API_KEY dan URL ke variable
    // state penyimpanan data movies
    const [movies, setMovies] = useState([]);

    useEffect(() => { getNowPlaying(); });

    async function getNowPlaying() {
        // Fetch data dari axios
        const response =await axios(ENDPOINTS.NOW_PLAYING);

        // simpan data ke state movies
        setMovies(response.data.results);
    };

    return (
    <div>
        <Hero/>
        <Movies movies={movies} title='Now Playing Movies'/>
    </div>
    );
}

export default NowPlaying;