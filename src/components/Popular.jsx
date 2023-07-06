import React, { useState } from "react";
import { Col } from "reactstrap";
import css from "../styles/Popular.module.css";
import Pizza from "../assets/pizza.png";
import Bread from "../assets/bread.png";
import Hamburger from "../assets/hamburger.png";

// all images imported from images directory
import product_01_image_01 from "../assets/product_01.jpg";
import product_01_image_02 from "../assets/product_01.1.jpg";
import product_01_image_03 from "../assets/product_01.3.jpg";

import product_02_image_01 from "../assets/product_2.1.jpg";
import product_02_image_02 from "../assets/product_2.2.jpg";
import product_02_image_03 from "../assets/product_2.3.jpg";

import product_03_image_01 from "../assets/product_3.1.jpg";
import product_03_image_02 from "../assets/product_3.2.jpg";
import product_03_image_03 from "../assets/product_3.3.jpg";

import product_04_image_01 from "../assets/product_4.1.jpg";
import product_04_image_02 from "../assets/product_4.2.jpg";
import product_04_image_03 from "../assets/product_4.3.png";

import product_05_image_01 from "../assets/product_04.jpg";
import product_05_image_02 from "../assets/product_08.jpg";
import product_05_image_03 from "../assets/product_09.jpg";

import product_06_image_01 from "../assets/breadd.png";
import product_06_image_02 from "../assets/breadd2.png";
import product_06_image_03 from "../assets/breadd3.png";

const products = [
    { id: 1, title: "Pizza 1", category: "pizza", image: product_02_image_01, price: 10 },
    { id: 2, title: "Pizza 2", category: "pizza", image: product_02_image_02, price: 12 },
    { id: 3, title: "Pizza 3", category: "pizza", image: product_02_image_03, price: 12 },
    { id: 4, title: "Bread 1", category: "bread", image: product_06_image_01, price: 5 },
    { id: 5, title: "Bread 2", category: "bread", image: product_06_image_02, price: 6 },
    { id: 6, title: "Bread 3", category: "bread", image: product_06_image_03, price: 6 },
    { id: 7, title: "Hamburger 1", category: "hamburger", image: product_01_image_01, price: 8 },
    { id: 8, title: "Hamburger 2", category: "hamburger", image: product_01_image_02, price: 9 },
    { id: 9, title: "Hamburger 3", category: "hamburger", image: product_01_image_03, price: 9 },
];

const Popular = () => {

    const [selectedCategory, setSelectedCategory] = useState("all");

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const filteredProducts = selectedCategory === "all"
        ? products
        : products.filter((item) => item.category === selectedCategory);

    return (
        <>
            <div className={css.heading}>
                <span>Our Menu</span>
            </div>
            <div className={css.foodCategory}>
                <button
                    className={`${css.allButton} ${selectedCategory === "all" ? css.foodBtnActive : ""}`}
                    onClick={() => handleCategoryClick("all")}
                >
                    All
                </button>
                <button
                    className={`${selectedCategory === "pizza" ? css.foodBtnActive : ""}`}
                    onClick={() => handleCategoryClick("pizza")}
                >
                    <img className={css.imageCat} width={30} height={30} src={Pizza} alt="" objectFit="cover" layout="intrinsic" />
                    Pizza
                </button>
                <button
                    className={`${selectedCategory === "bread" ? css.foodBtnActive : ""}`}
                    onClick={() => handleCategoryClick("bread")}
                >
                    <img className={css.hideOnMobile} width={30} height={30} src={Bread} alt="" objectFit="cover" layout="intrinsic" />
                    Bread
                </button>
                <button
                    className={`${selectedCategory === "hamburger" ? css.foodBtnActive : ""}`}
                    onClick={() => handleCategoryClick("hamburger")}
                >
                    <img className={css.imageCat} width={30} height={30} src={Hamburger} alt="" objectFit="cover" layout="intrinsic" />
                    Burger
                </button>
            </div>
            <div className={css.allFoodPopular}>
                {filteredProducts.map((item) => (
                    <Col lg="3" md="4" key={item.id}>
                        <div className={css.productCard}>
                            <img className={css.ProductImg} src={item.image} alt={item.title} />
                            <h3>{item.title}</h3>
                            <p>Price: ${item.price}</p>
                        </div>
                    </Col>
                ))}
            </div>
        </>
    )
}

export default Popular