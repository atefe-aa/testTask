export default function Comments({comments}) {
    return (
        <div
            className="flex items-start  gap-4 rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] lg:pb-10 dark:bg-zinc-200 dark:ring-zinc-300">
            {comments && comments.length > 0 && <div>
                {comments.map((com, index) =>
                    <div className={`${index !== Comments.length - 1 ? "" : "border-b"} border-zinc-300 pb-6 mb-6`}>
                        <div className="font-bold">{com.user_name}</div>
                        <div>{com.rate} ⭐</div>
                        <div>{com.title}</div>
                        <div>{com.body}</div>
                    </div>
                )}
            </div>}
        </div>
    )
}
