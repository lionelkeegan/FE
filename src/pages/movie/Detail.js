import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { updateMovies } from "../../features/moviesSlice";
import Movies from "../../components/Movies/Movies";
import DetailMovie from "../../components/DetailMovie";
import ENDPOINTS from "../../utils/constants/endpoint";

function Detail(){
    const dispatch = useDispatch();
    const {id} = useParams();
    // const API_KEY = process.env.REACT_APP_API_KEY;

    useEffect(()=>{
        getRecommendationMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    async function getRecommendationMovies(){
        // const URL = `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${API_KEY}`;
        const response = await axios(ENDPOINTS.REKOMENDASI(id));
        const movies = response.data.results;
        dispatch(updateMovies(movies));
      }
    return(
        <>
        <DetailMovie />
        <Movies title="Rekomendasi Film"/>
        </>
    );
}
export default Detail;