import { UilFacebook, UilInstagram } from "@iconscout/react-unicons"
import Tiktok from '../assets/tiktok.svg'
import Instagram from '../assets/instagram.svg'
import Facebook from '../assets/facebook.svg'
import Logo from '../assets/Logo.png'
import css from '../styles/Footer.module.css'

const Footer = () => {
    return (
        <div className={css.container}>
            <div className={css.atas}>
                <div className={css.logo}>
                    <div className={css.kyokimbapLogo}>
                        <img src={Logo} alt="logo kimbap" width={70} height={70} />
                        <span>KYOKIMBAP</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, mollitia!</p>
                </div>
                <div className={css.deliveryTime}>
                    <span>Delivery Time</span>
                    <div className={css.sunday}>
                        <h6>Sunday - Thursday</h6>
                        <p>10:00am - 11:00am</p>
                    </div>
                    <div className={css.friday}>
                        <h6>Friday - Saturday</h6>
                        <p>Off day</p>
                    </div>
                </div>
                <div className={css.contact}>
                    <span>Contact</span>
                    <div className={css.location}>
                        <p>Jalan Kedung Anyar 1 No. 1. Surabaya</p>
                    </div>
                    <div className={css.phone}>
                        <p> <span>Phone :</span> 082139820846</p>
                        <p> <span>Email :</span> ardyantows01@gmail.com</p>
                    </div>
                </div>
                <div className={css.opinion}>
                    <span>Suggestion Box</span>
                    <div className={css.opinionText}>
                        <p>Give your opinion about kyokimbap</p>
                    </div>
                    <div className={css.suggestionBox}>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSeWQYoqo7PrhXJD6x6HF9gLTuWYA_8EGmgO-XJNx_FGbE7Z6w/viewform">Go to form</a>
                    </div>
                </div>
            </div>
            <div className={css.bawah}>
                <div className={css.copyright}>
                    <span>copyright - 2023, website made by Ardyanto Widyadana All Rights Reserved.</span>
                </div>
                <div className={css.social}>
                    <span>Follow Us :</span>
                    <div className={css.circularIcon}>
                        <img src={Tiktok} alt="" className={css.tiktok} width={25} height={25} />
                    </div>
                    <div className={css.circularIcon}>
                        <img src={Instagram} alt="" className={css.tiktok} width={25} height={25} />
                    </div>
                    <div className={css.circularIcon}>
                        <img src={Facebook} alt="" className={css.tiktok} width={25} height={25} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer