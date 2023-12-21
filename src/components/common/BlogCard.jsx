import { Card } from "antd";

function BlogCard({ title, body, className }) {
    return (
        <>
            <Card
                headStyle={{ backgroundColor: "#EA906C" }}
                bodyStyle={{ backgroundColor: "#EEE2DE" }}
                title={title}
                className={className}
                bordered={true}
                hoverable={true}>
                <p>{body}</p>
            </Card>
        </>
    );
}

export default BlogCard;
