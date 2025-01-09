export const BlogTitle = ({ title, description }) => {
    return (
        <div className="blog-title">
            <h2>{title}</h2>
            <h3>{description}</h3>
        </div>
    );
};
