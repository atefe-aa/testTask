import Image from "@/Components/Products/Image.jsx";
import Introduction from "@/Components/Products/Introduction.jsx";
import Features from "@/Components/Products/Features.jsx";
import Comments from "@/Components/Products/Comments.jsx";

export default function Product({data}) {
    return (
        <div className="" dir="rtl">
            <div
                className=" my-6 rounded-lg text-white/70 bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20]  lg:p-10 lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:text-white/70 dark:hover:ring-zinc-700 dark:focus-visible:ring-[#FF2D20]"
            >{data.product.title_fa}</div>
            <Image images={data.product.images}/>
            <Introduction description={data.product.review.description}/>
            {data.product.review.attributes && <Features attributes={data.product.review.attributes}/>}
            {data.product.specifications.attributes &&
                <Features attributes={data.product.specification.attributes}/>
            }
            <Comments comments={data.product.last_comments}/>
        </div>
    )
}
