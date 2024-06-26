export default function Features({attributes}) {
    return (
        <div
            className="my-6  flex flex-col items-start gap-4 rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] lg:pb-10 dark:bg-zinc-200 dark:ring-zinc-300 dark:hover:text-white/70 dark:hover:ring-zinc-400 dark:focus-visible:ring-[#FF2D20]"
        >
            <div className="text-gray-400">مشخصات</div>
            <div>
                {attributes && attributes.length > 0 && attributes.map(att =>
                    <div className="flex w-100" key={att.title}>
                        <div className="text-black/50 font-semibold w-[130px] ">{att.title}</div>
                        {att.values.length > 0 && <div className="flex w-[400px]">
                            {att.values.map((value, index) =>
                                <div className="flex" key={value}>
                                    <span>{value}</span>
                                    {index !== att.values.length - 1 && <span>-</span>}
                                </div>
                            )}
                        </div>
                        }
                    </div>
                )}
            </div>
        </div>
    )
}
