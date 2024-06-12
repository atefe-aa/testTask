export default function Price({priceData}) {
    return (
        <div
        >
            {priceData ? <div>
                <div>قیمت</div>
                {priceData.rrp_price && priceData.rrp_price !== priceData.selling_price &&
                    <div>
                        <div
                            className="line-through text-gray-400 text-sm"> تومان{priceData.rrp_price.toLocaleString()}</div>
                    </div>
                }
                <div> تومان {priceData.selling_price.toLocaleString()}</div>
            </div> : <div>ناموجود!</div>}
        </div>
    )
}
