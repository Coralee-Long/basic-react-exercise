import { Blog } from "./Blog";
import mockData from "../data/data-mocks.json";

export const BlogList = () => {
    return (
        <>
            <div className="blog-list">
                {mockData.map((blog) => (
                    <Blog key={blog.id} blog={blog} />
                ))}
            </div>
        </>
    );
};
