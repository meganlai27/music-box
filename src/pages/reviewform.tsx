import React from "react";
import { useState } from "react";
import { supabase } from "../supabase";
import "./style.css";

import { Album } from './search';

const ReviewForm = (album: Album) => { // pass album_id or song_id, picture, etc.
    console.log(album);
    const [review, setReview] = useState("");
    const [rating, setRating] = useState(0);
    // const [date, setDate] = useState("");
    return (
        <div className = 'reviewForm'>
            <h1>Submit a review: </h1>
            {/* <image src = {album_c}/> */}
            <form // need to add each song to list of songs
            onSubmit={async(e) => {
                e.preventDefault();
                const result = await supabase.from("Ratings").insert({ review : review, rating : rating });
                console.log(result);
            }}
            > 

                <div className = "container">

                    <label htmlFor = "form-review">Review: </label>
                    <input
                        id = "form-review"
                        type = "text"
                        value = {review}
                        onChange={(e) => {
                            setReview(e.target.value);
                        }}
                        required
                    />
                    <br />

                    <div className = "rating-wrap">
                        <h2>How many stars?</h2>
                        <div className = "center">
                            <fieldset className = "rating">
                                <input type = "radio" id = "star1" name="rating" value = "1" onChange={(e) => {
                        setRating(1);
                    }}/><label className = "full"></label>
                                <input type = "radio" id = "star2" name="rating" value = "2" onChange={(e) => {
                        setRating(2);
                    }}/><label className = "full"></label>
                                <input type = "radio" id = "star3" name="rating" value = "3" onChange={(e) => {
                        setRating(3);
                    }}/><label className = "full"></label>
                                <input type = "radio" id = "star4" name="rating" value = "4" onChange={(e) => {
                        setRating(4);
                    }}/><label className = "full"></label>
                                <input type = "radio" id = "star5" name="rating" value = "5" onChange={(e) => {
                        setRating(5);
                    }}/><label className = "full"></label>
                            </fieldset>
                        </div>
                    </div>
                </div>
                <script src = "star-rating"></script>
                {/* <label htmlFor = "form-review">How many stars? </label>
                <label><input type="radio" name="radio" 
                    // value = 1
                    onChange={(e) => {
                        setRating(1);
                    }}/></label>
                <label><input type="radio" name="radio"
                    // value = {rating}
                    onChange={(e) => {
                        setRating(2);
                    }}/></label>
                <label><input type="radio" name="radio" 
                    // value = {rating}
                    onChange={(e) => {
                        setRating(3);
                    }}/></label>
                <label><input type="radio" name="radio" 
                    // value = {rating}
                    onChange={(e) => {
                        setRating(4);
                    }}/></label>
                <label><input type="radio" name="radio"
                    value = {rating}
                    onChange={(e) => {
                        setRating(5);
                    }}/></label> */}
                {/* <button name="one star">🎵</button> */}
                <br />

                <input type = "submit" value = "Submit"/>
            </form>
        </div>
    )
}

export default ReviewForm;