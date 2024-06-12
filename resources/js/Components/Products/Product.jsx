import Image from "@/Components/Products/Image.jsx";
import Introduction from "@/Components/Products/Introduction.jsx";
import Features from "@/Components/Products/Features.jsx";
import Comments from "@/Components/Products/Comments.jsx";

export default function Product({data}) {
    return <div className="grid gap-6 lg:grid-cols-2 lg:gap-8" dir="rtl">
        <div>{data.product.title_fa}</div>
        <Image images={data.product.images}/>
        <Introduction description={data.product.review.description}/>
        {data.product.review.attributes && <Features attributes={data.product.review.attributes}/>}
        {data.product.specifications.attributes &&
            <Features attributes={data.product.specification.attributes}/>
        }
        <Comments comments={data.product.last_comments}/>
    </div>
}
