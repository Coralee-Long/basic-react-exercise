

export const BlogLinks = ({ links }) => {
    return (
        <div className="blog-links">
            {links.map((link) => (
                <a key={link.id} href={link.url}>
                    {link.text}
                </a>
            ))}
        </div>
    );
};