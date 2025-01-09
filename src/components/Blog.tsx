import "../styles/Blog.css"
import { BlogTitle } from "./BlogTitle";
import { BlogTextBlock } from "./BlogTextBlock";
import { BlogImage } from "./BlogImage";
import { BlogMeta } from "./BlogMeta";

export const Blog = ({ blog }) => {
    return (
        <div className="blog-container">
            <BlogTitle title={blog.title} description={blog.subheading} />
            {blog.layout.map((block, index) => {
                if (block.type === "text") {
                    return <BlogTextBlock key={index} content={block.content} />;
                }
                if (block.type === "image") {
                    return (
                        <BlogImage
                            key={index}
                            src={block.src}
                            alt={block.alt}
                            credit={block.credit}
                        />
                    );
                }
                return null; // Handle unsupported block types
            })}
            <BlogMeta meta={blog.meta} />
        </div>
    );
};
