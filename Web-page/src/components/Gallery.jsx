import React from "react";

import gleriferP from "../../public/Glerifer/gleriferP";

export default function Gallery ( { images }) {

    return (
        <>
        <div>
            {Images &&
            images.map((imagesUrl) =>
            <img src={imagesUrl} />
            )}
        </div>
        </>
    )
}