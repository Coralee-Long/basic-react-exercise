export const BlogTitle = ({ title, description }) => {
    return (
        <div className="blog-title">
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    );
};
