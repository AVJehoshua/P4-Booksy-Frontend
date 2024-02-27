// import { Link } from "react-router-dom";
// import React from 'react';
import Navbar from "../Components/Home/NavBar.jsx";
import "./HomePage.css";
import CategoryCard from "../Components/Home/CategoryCard.jsx";

export const HomePage = () => {

    const categories = ["Science Fiction", "Romance", "Philosophy", "Airport reads", "Adventure", "Horror"];

    return (
        <>
        <Navbar />
        <div className="title">
            <h1>Shop By Category!</h1>
            </div>
            <div className="category-grid-container">
                <div className="category-grid">
                    {categories.map((category, index) => (
                        <CategoryCard key={index} category={category} />
                    ))}
                </div>
            </div>
        </>
    );
}



// TODO: Code which allows the category cards to become a button, navigate to 
// relevant page: 

// // <Link key={index} to={`/category/${category}`}>
// <CategoryCard category={category} />
// </Link>