export default function Comments({comments}) {
    return <div>
        {comments && comments.length > 0 && <div>
            {comments.map(com =>
                <div>
                    <div>{com.user_name}</div>
                    <div>{com.rate} ⭐</div>
                    <div>{com.title}</div>
                    <div>{com.body}</div>
                </div>
            )}
        </div>}
    </div>
}
