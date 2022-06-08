import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoint";

function TopRated() {
    // Simpan API_KEY dan URL ke variable
    // state penyimpanan data movies
    const [movies, setMovies] = useState([]);

    useEffect(() => { getTopRated(); },[]);

    async function getTopRated() {
        // Fetch data dari axios
        const response =await axios(ENDPOINTS.TOP_RATED);

        // simpan data ke state movies
        setMovies(response.data.results);
    };

    return (
    <div>
        <Hero/>
        <Movies movies={movies} title='Top Rated Movies'/>
    </div>
    );
}

export default TopRated;