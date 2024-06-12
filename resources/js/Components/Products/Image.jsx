import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Image({images}) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
    };

    return <div
        className="my-6  items-start gap-6 overflow-hidden rounded-lg bg-white p-20 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] md:row-span-3 lg:p-10 lg:pb-10 dark:bg-zinc-200 dark:ring-zinc-100 dark:hover:text-white/70 dark:hover:ring-zinc-700 dark:focus-visible:ring-[#FF2D20]"
        id="docs-card">
        <Slider {...settings}>
            {images.list.length > 0 && images.list.map((img, index) => (
                <div key={index}>
                    <img src={img.url} alt={`Slide ${index}`} className="w-full rounded h-auto"/>
                </div>
            ))}
        </Slider>
    </div>
}
