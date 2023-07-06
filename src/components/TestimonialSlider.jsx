import Slider from "react-slick";
import css from "../styles/Testimonial.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import networkImg from "../assets/network.png";
import Ava1 from "../assets/people-1.jpg";
import Ava2 from "../assets/people-2.jpg";
import Ava3 from "../assets/people-3.jpg";


const TestimonialSlider = () => {
    const testimonials = [
        {
            id: 1,
            name: "John Doe",
            comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            photo: Ava1, // Ubah sesuai dengan path dan nama file foto pengguna
        },
        {
            id: 2,
            name: "Jane Smith",
            comment: "Praesent tempor velit in est malesuada, ac ullamcorper dolor auctor.",
            photo: Ava2, // Ubah sesuai dengan path dan nama file foto pengguna
        },
        {
            id: 3,
            name: "David Johnson",
            comment: "Vestibulum sagittis odio at tur.",
            photo: Ava3, // Ubah sesuai dengan path dan nama file foto pengguna
        }
    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className={css.header} >
            <div className={css.testimonialLeft}>
                <div className={css.testimonial}>
                    <h5>Testimonial</h5>
                    <h2>What our <span>customers</span> are saying</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Distinctio quasi qui minus quos sit perspiciatis inventore
                        quis provident placeat fugiat! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione eum nam modi
                    </p>
                </div>
                <Slider className={css.sliderContainer} {...settings}>
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id}>
                            <div className={css.testimonialContent}>
                                <div className={css.testimonialText}>
                                    <p>{testimonial.comment}</p>
                                </div>
                                <div className={css.testimonialImage}>
                                    <img className={css.testimonialImg} src={testimonial.photo} alt={testimonial.name} />
                                    <h3>{testimonial.name}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            <div className={css.testimonialRight}>
                <img src={networkImg} className={css.imageTestimonial} alt="" />
            </div>
        </div >
    );
}

export default TestimonialSlider
