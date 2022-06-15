import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movies from "../../components/Movies/Movies";
import DetailMovie from "../../components/DetailMovie";
import ENDPOINTS from "../../utils/constants/endpoint";

function Detail(){
    const [movies, setMovies] = useState([]);
    const {id} = useParams();
    // const API_KEY = process.env.REACT_APP_API_KEY;

    useEffect(()=>{
        getRecommendationMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    async function getRecommendationMovies(){
        // const URL = `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${API_KEY}`;
        const response = await axios(ENDPOINTS.REKOMENDASI(id));

        setMovies(response.data.results);
    }
    return(
        <>
        <DetailMovie />
        <Movies movies={movies} title="Rekomendasi Film"/>
        </>
    );
}
export default Detail;