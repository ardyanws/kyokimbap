import Cherry from '../assets/Cherry.png'
import HeroImage from '../assets/HeroImage.png'
import css from '../styles/Hero.module.css'
import { UilPhone } from '@iconscout/react-unicons'
import Pizza1 from '../assets/kimbap-goreng.jpg'


const Hero = () => {
    return (
        <div>
            <div className={css.container}>
                {/* left side */}
                <div className={css.left}>
                    <div className={css.cherryDiv}>
                        <span>More than Faster</span>
                        <img src={Cherry} alt="" width={40} height={25} />
                    </div>
                    <div className={css.heroText}>
                        <span>Be The Fastest</span>
                        <span>In Delivering</span>
                        <span>Your <span style={{ color: "var(--themeRed)" }}>Kimbap</span></span>
                    </div>

                    <span className={css.miniText}>
                        Our Mission is to filling your tummy with delicious food and with fast and free delivery
                    </span>

                    <div className={css.buttonHero}>
                        <button className={`btn ${css.btn}`}>
                            Get Started
                        </button>

                        <div className={css.ContactUs2}>
                            <a href="https://wa.me/082330388400">Contact us</a>
                            <div>
                                <UilPhone color='white' />
                            </div>
                        </div>
                    </div>
                </div>

                {/* right side */}

                <div className={css.right}>
                    <div className={css.imageContainer}>
                        <img className={css.imageMobile} src={HeroImage} alt="" layout="intrinsic" />
                    </div>

                    <div className={css.ContactUs}>
                        <a href="https://wa.me/082330388400">Contact us</a>
                        <div>
                            <UilPhone color='white' />
                        </div>
                    </div>

                    <div className={css.Pizza}>
                        <div>
                            <img src={Pizza1} alt='' objectFit='cover' layout='intrinsic' />
                        </div>

                        <div className={css.details}>
                            <span>Kimbab goreng</span>
                            <span><span style={{ color: "var(--themeRed)" }}>Rp </span>12.000</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero