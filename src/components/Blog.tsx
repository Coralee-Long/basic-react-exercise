import "../styles/Blog.css"
import { BlogTitle } from "./BlogTitle";
import { BlogTextBlock } from "./BlogTextBlock";
import { BlogImage } from "./BlogImage";
import { BlogLinks } from "./BlogLinks";

export const Blog = ({ blog }) => {
    return (
        <div className="blog-container">
            <BlogTitle title={blog.title} description={blog.subheading} />
            {blog.layout.map((block, index) => {
                switch (block.type) {
                    case "text":
                        return <BlogTextBlock key={index} content={block.content} />;
                    case "image":
                        return (
                            <BlogImage
                                key={index}
                                src={block.src}
                                alt={block.alt}
                                credit={block.credit}
                            />
                        );
                    default:
                        return null;
                }
            })}
            <BlogLinks links={blog.affiliateLinks} />
        </div>
    );
};
