import { Blogs } from "../data/blogs";
import BlogCard from "./common/BlogCard";

function Dashboard() {
    return (
        <>
            {Blogs.map((data) => (
                <BlogCard
                    className={"my-5 w-50 border border-white rounded border-3"}
                    title={data?.title}
                    body={data?.body}
                />
            ))}
        </>
    );
}

export default Dashboard;
