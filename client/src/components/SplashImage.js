import React from "react";

const SplashImage = () => {
    const [images, setImages] = useState({});

    useEffect(() => {
        images({
            images: imageURLs
        });
    }, []);
    return(
        <img src={images.imageURLs}></img>
    );
};

export default SplashImage;