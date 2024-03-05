// src/pages/Home/FilterPage.jsx

// import { Checkbox } from "@/components/CheckBox"
import React, { useEffect, useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import Navbar from "../../components/Home/NavBar.jsx";
import Footer from "../../components/Home/Footer.jsx";
import { CheckBox } from "../../components/Filter/CheckBox.jsx";
import { SortBy } from "../../components/Filter/Sort.jsx";
import FilterBookCard from "../../components/Filter/FilterBookCard.jsx";
import { getAllBooksByCategory } from "../../services/filters.jsx";


import "../../components/Home/Footer.css";
import "./FilterPage.css"

export const FilterPage = () => {
    const [books, setBooks] = useState([]);
    const [checkedCategories, setCheckedCategories] = useState([]);


    const location = useLocation();
    const { selected } = location.state;   // stores the state of homepage catgory in 'selected'


    const categories = [
        "Young Adult",
        "Romance",
        "Action",
        "History",
        "Non-fiction",
        "Thriller",
        "LGBTQIA+",
        "Mystery",
        "Autobiography"
    ].sort();


    useEffect(() => {
        setCheckedCategories([selected.name]);   // assigns selected to checked categories, shows as checked on filter page
    }, [selected]);


    useEffect(() => {
        if (checkedCategories.length > 0) {
            getAllBooksByCategory(checkedCategories)   // fetches all books that are checked
                .then((booksData) => {
                    const newList = booksData.books
                    sortAlphabetically(newList);
                })
                .catch(error => {
                    console.log("Failed to fetch books:", error);
                });
        }
    }, [checkedCategories]);


    const updateBooksByCategories = (categories) => {
        if (categories.length > 0) {
            getAllBooksByCategory(categories)
                .then((booksData) => {
                const newList = booksData.books
                sortAlphabetically(newList);
                })
                .catch(error => {
                    console.log("Failed to fetch books:", error);
                });
        } else {
            setBooks([]);
        }
    };

    const sortAlphabetically = (newList) => {
        const sortAlpha = [...newList.books].sort((a, b) => a.title.localeCompare(b.title));
        setBooks(sortAlpha)
    }
    
    const handleCategoryChange = (category) => {
        setCheckedCategories(prevCategories => {
            if (prevCategories.includes(category)) {
                const updatedCategories = prevCategories.filter(cat => cat !== category);
                updateBooksByCategories(updatedCategories);
                return updatedCategories;
            } else {
                const updatedCategories = [...prevCategories, category];
                updateBooksByCategories(updatedCategories);
                return updatedCategories;
            }
        });
    };

    console.log("some books:", books)
    return (
        <>

            <Navbar />
            <div className="filter-page-title"> Filter Books </div>
            <SortBy books={books}/>
            <div className="categories-box">
                <div className="categories-container">
                    <h3 className="categories-title">Categories List:</h3>
                    <br />
                    {categories.map((category, index) => (
                        <CheckBox
                            key={index}
                            categories={category}
                            selected={checkedCategories.includes(category)}
                            setAddCategory={handleCategoryChange}
                            setRemoveCategory={handleCategoryChange}
                        />
                    ))}
                </div>
                <div className="filtered-books-container">
                    <h1>Filtered books</h1>
                    <div className='filtered-books'>
                        {books.map((book, index) => (
                            <FilterBookCard key={index} book={book} />
                        ))}
                    </div>
                    
                </div>
            </div>
            <Footer />
        </>
    );
};










