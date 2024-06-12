import Image from "@/Components/Products/Image.jsx";
import Introduction from "@/Components/Products/Introduction.jsx";
import Features from "@/Components/Products/Features.jsx";
import Comments from "@/Components/Products/Comments.jsx";
import Price from "@/Components/Products/Price.jsx";

export default function Product({data}) {
    const rating = Math.round(data.product.rating.rate / data.product.rating.count)
    return (
        <div className="" dir="rtl">

            <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
                <Image images={data.product.images}/>
                <div
                    className="my-6  items-start gap-6 overflow-hidden rounded-lg bg-white p-20 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] md:row-span-3 lg:p-10 lg:pb-10 dark:bg-zinc-200 dark:ring-zinc-100 dark:hover:text-white/70 dark:hover:ring-zinc-700 dark:focus-visible:ring-[#FF2D20]"
                >
                    <div>{data.product.title_fa}</div>
                    <div>{data.product.data_layer.dimension9} ⭐</div>
                    <div>{data.product.rating.count} نظر</div>
                    {(data.product.default_variant?.price || data.product.variants.length > 0) ?
                        <Price priceData={data.product.default_variant.price || data.product.variants[0].price}/>
                        : <div className="mt-6">ناموجود!</div>
                    }

                </div>

            </div>
            <Introduction description={data.product.review.description}/>
            {data.product.review.attributes && <Features attributes={data.product.review.attributes}/>}
            {data.product.specifications.attributes &&
                <Features attributes={data.product.specification.attributes}/>
            }
            <Comments comments={data.product.last_comments}/>
        </div>
    )
}
