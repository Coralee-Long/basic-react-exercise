

export const BlogImage = ({ src, alt, credit }) => {
    return (
        <figure className="blog-image">
            <img src={src} alt={alt}/>
            <figcaption>
                Photo by{" "}
                <a href={credit.link}>{credit.photographer}</a>{" "}
                on{" "}
                <a href={credit.source}>{credit.source}</a>
            </figcaption>
        </figure>
    );
};