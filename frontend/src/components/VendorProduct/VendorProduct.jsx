'use client'
import {
    Avatar,
    Box,
    Button,
    Checkbox,
    Container,
    CssBaseline,
    FormControlLabel,
    Grid,
    Link,
    TextField,
    Typography,
} from "@mui/material";
import React from "react";
import './index.css';
import { useState, useEffect } from 'react';



const Product = (props) => {

    function EditProduct() {
        console.log("EditProduct")
    }
    function RemoveProduct() {
        console.log("RemoveProduct")
    }

    const { product  } = props;
    useEffect(() => {
        let heart_icon = document.querySelectorAll(".help")
        heart_icon.forEach((z) => {
            z.onclick = function () {
                console.log("message")
                if (z.className === "fas fa-heart") {
                    z.className = "far fa-heart";
                } else z.className = "fas fa-heart";
            }
        })
    })
    // console.log(product)

    return (
        <>
            
            <div className="vendor-item ">
                <div className="figure">
                    <img src={product.images[0]} alt="" />
                </div>
                <div className="vendor-info">
                    <h2>{product.model} </h2>
                    <p>{product.description}</p>

                        <div className="info-div">
                            <b><h2>Price : </h2>{product.price} </b>
                            <b><h2>Stock : </h2>{product.stock  } </b>
                            <b><h2>Sold : </h2>--</b>
                            <b><h2>Likes : </h2>--</b>
                        </div>
                    <div className="vendor-btns">
                        <Button
                            onClick={EditProduct}
                            color="primary"
                            // disabled={false}
                            // size="large"
                            variant="contained"
                            sx={{ m: 2, mr: 1 }}
                        >
                            Edit
                        </Button>
                        <Button
                            onClick={RemoveProduct}
                            variant="contained"
                            color="error"
                            sx={{ m: 2, ml: 1 }}
                        >Remove</Button>
                    </div>
                </div>
            </div>
            
        </>
    );
};

export default Product;
