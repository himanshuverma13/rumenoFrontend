import React, { useContext } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { UserContext } from './Modal/logusecont';
import ResponsiveNavbar from './Navbar/navMob';


const ThankYouPage = () => {
    const { cart } = useContext(UserContext);

    return (
        <>
            <div className="desk-nav">
                <Navbar size={cart?.length} />
            </div>
            <div className="mob-nav">
                <ResponsiveNavbar size={cart?.length} />
            </div>
            <section className='pt-5'>
                <div className="mt-4  pt-5 text-center">
                    <h1 className="text-2xl font-bold pt-5">Thank You!</h1>
                    <p className='h4 my-2 '>Thank you for Purchasing  </p>
                    <svg viewBox="0 0 512 512" fill='green' className='' width={150}>
                        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" /></svg>
                    <p className="mt-3 h5">
                        Thank you for visiting <strong className='text-danger h5 fw-bold'>RUMENO</strong> website. You will receive you product on time
                    </p>
                    <p className="my-3">
                        Please check your mail for more Details

                    </p>
                </div>
            </section>
            <Footer />

        </>
    )
}

export default ThankYouPage;