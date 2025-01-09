export const BlogMeta = ({ meta }) => {
    return (
        <div className="blog-meta">
            <div className="author-details">
                <img
                    src={meta.author.avatar}
                    alt={`${meta.author.name}'s avatar`}
                    className="avatar"
                />
                <div className="author-container">
                    <p className="author-name">
                        <strong>Written by {meta.author.name}</strong>
                    </p>
                    <p className="author-date">
                        {meta.date}
                    </p>
                </div>

            </div>
            <div className="hashtags">
                {meta.hashtags.map((tag, index) => (
                    <span key={index} className="hashtag">
            {tag}
          </span>
                ))}
            </div>
        </div>
    );
};