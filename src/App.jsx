import {
    FaArrowRight,
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaLocationArrow,
    FaPhone,
    FaTwitter,
    FaVoicemail,
} from "react-icons/fa";
import "./App.css";
import { FaLocationPin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function App() {
    return (
        <div className="mt-20">
            {/* Accordian Section */}
            <section>
                <div className="flex justify-center">
                    <h1 className="lg:text-[48px] sm:text-[32px] text-[24px] font-bold">
                        Frequently asked questions
                    </h1>
                </div>
                <div className="lg:w-[920px] sm:w-[688px] w-[358px] mx-auto mt-[120px] rounded-2xl">
                    <div className="join join-vertical bg-base-100 w-full">
                        <div className="collapse collapse-arrow join-item border-base-300 border">
                            <input
                                type="radio"
                                name="my-accordion-4"
                                defaultChecked
                            />
                            <div className="collapse-title font-semibold">
                                Do plumbers deal with heating?
                            </div>
                            <div className="collapse-content text-sm">
                                Some of our local plumbers are also gas
                                registered and experienced working on heating
                                systems, bathrooms and kitchens.
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-base-300 border">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title font-semibold">
                                Do you charge a call out fee?
                            </div>
                            <div className="collapse-content text-sm">
                                Click on "Forgot Password" on the login page and
                                follow the instructions sent to your email.
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-base-300 border">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title font-semibold">
                                How quickly can your company send out an
                                engineer?
                            </div>
                            <div className="collapse-content text-sm">
                                Go to "My Account" settings and select "Edit
                                Profile" to make changes.
                            </div>
                        </div>

                        <div className="collapse collapse-arrow join-item border-base-300 border">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title font-semibold">
                                What should I do if I get a water leak?
                            </div>
                            <div className="collapse-content text-sm">
                                Go to "My Account" settings and select "Edit
                                Profile" to make changes.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Get in Touch Section */}
            <section className="my-20">
                <div className="lg:w-[1360px] sm:w-[688px] w-[358px] lg:h-[404px] sm:h-[278px] mx-auto bg-[#0058FF] rounded-3xl">
                    <div className="flex flex-col justify-center items-center h-full w-full text-white gap-y-8 sm:p-10 p-4">
                        <h1 className="lg:text-[48px] sm:text-[32px] text-[24px] font-bold">
                            Get In Touch
                        </h1>
                        <p className="sm:w-[608px] lg:w-[1000px] text-center">
                            Contact us now to enquire our plumbing services,
                            whether you have a commercial project that requires
                            support, or a domestic plumbing task that needs the
                            attention of a trusted professional.
                        </p>
                        <button className="bg-white text-[#0058FF] px-[24px] py-[10px] flex justify-center items-center gap-x-4 font-bold rounded-lg sm:text-[16px] text-[14px]">
                            Book a Professional Plumber <FaArrowRight />
                        </button>
                    </div>
                </div>
            </section>

            <section className="bg-[#FFFFFF] lg:p-[120px] sm:p-[40px] p-[20px]">
                <footer className="grid lg:grid-cols-3 sm:grid-cols-1 sm:gap-10 lg:gap-0 gap-10 text-base-content p-10 lg:w-[1360px] mx-auto">
                    <aside className="">
                        <h1 className="text-[32px]">Business Logo</h1>
                        <div className="flex gap-4 mt-[28px]">
                            <FaFacebook size={25} />
                            <FaLinkedin size={25} />
                            <FaTwitter size={25} />
                            <FaInstagram size={25} />
                        </div>
                    </aside>
                    <div className="grid lg:grid-cols-3 sm:grid-cols-2 sm:col-span-2 gap-10 sm:gap-0 lg:gap-0">
                        <nav className="flex flex-col gap-4">
                            <h6 className="footer-title">Services</h6>
                            <a className="link link-hover">Branding</a>
                            <a className="link link-hover">Design</a>
                            <a className="link link-hover">Marketing</a>
                            <a className="link link-hover">Advertisement</a>
                        </nav>
                        <nav className="flex flex-col gap-4">
                            <h6 className="footer-title">Company</h6>
                            <a className="link link-hover">About us</a>
                            <a className="link link-hover">Contact</a>
                            <a className="link link-hover">Jobs</a>
                            <a className="link link-hover">Press kit</a>
                        </nav>
                        <nav className="flex flex-col gap-4 sm:col-span-2 lg:col-span-1 sm:mt-10 lg:mt-0">
                            <h6 className="footer-title">Contact Info</h6>
                            <a className="link link-hover flex gap-2 items-center">
                                <FaLocationPin /> 1 Sail Street, London, SE11
                                6NQ
                            </a>
                            <a className="link link-hover flex gap-2 items-center">
                                {" "}
                                <MdEmail /> enquiries@PlumbingPros.com
                            </a>
                            <a className="link link-hover flex gap-2 items-center">
                                {" "}
                                <FaPhone /> 020 4527 6474
                            </a>
                        </nav>
                    </div>
                </footer>
                <div className="flex justify-between lg:w-[1360px] mx-auto mt-[80px] ">
                    <p className="text-[#2c2e2f]">© Plumbing Pros. All Rights Reserved</p>
                    <p className="text-[#313334]">Website by IH Adventure And Creative</p>
                </div>
            </section>
        </div>
    );
}

export default App;
