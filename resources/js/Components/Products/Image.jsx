export default function Image({images}) {
    return <div>
        <div>
            <img src={images.main.url}/>
        </div>
        {images.list.map(img =>
            <div key={img.url}>
                <img src={img.url}/>
            </div>
        )}
    </div>
}
