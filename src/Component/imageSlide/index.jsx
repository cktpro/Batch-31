import React from "react";
import { useState } from "react";
function ImageSlide(props) {
    const {imageList} =props
    const [index,setIndex]=useState(0)
    const onNextImage=()=>{
        if(index+1 < imageList.length){
            setIndex(index+1)
        }else{
            setIndex(0)
        }
    }
    const onPreviousImage =()=>{
        if(index-1 >= 0){
            setIndex(index-1)
        }
        setIndex(imageList.length-1)
    }
    return (
        <div>
            <img src={imageList[index]} alt="" />
            <button onClick={onPreviousImage}>Previous</button>
            <button onClick={onNextImage}>Next</button>
            <p>{index+1}/{imageList.length}</p>

        </div>
        
    );
}

export default ImageSlide;