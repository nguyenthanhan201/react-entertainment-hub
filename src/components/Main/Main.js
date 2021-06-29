import React from 'react';
import "./Main.css";
import axios from "axios";
import { useEffect, useState } from "react";
import SingleCarousel from "../../components/SingleCarousel/SingleCarousel";
import Footer from '../Footer/Footer';



const Main = () => {

    const [page] = useState(1);

    const [content, setContent] = useState([]);

    const fetchTrending = async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
        );
        setContent(data.results);
    };
    useEffect(() => {
        window.scroll(0, 0);
        fetchTrending();

    }, [page]);
    return (
        <>
        <div className="carousel">
            <h2 className="titile">
                Top movies in theatres
            </h2>
            <div className="container">
                {content &&
                    content.map((c) => (
                        
                        <SingleCarousel
                            key={c.id}
                            id={c.id}
                            poster={c.poster_path}
                        />

                        
                    ))}
                
            </div>
        </div>
        <Footer/>
        </>
    );
};

export default Main;
