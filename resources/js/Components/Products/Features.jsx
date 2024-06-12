export default function Features({attributes}) {
    return <div>
        <div>مشخصات</div>
        <div>
            {attributes && attributes.length > 0 && attributes.map(att => <div className="flex" key={att.title}>
                <div>{att.title}</div>
                {att.values.length > 0 && att.values.map((value, index) => <div className="ms-10" key={value}>
                    <span>{value}</span>
                    {index !== att.values.length - 1 && <span>-</span>}
                </div>)}
            </div>)}</div>
    </div>
}
