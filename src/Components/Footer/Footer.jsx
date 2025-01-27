
const Footer = () => {
    return (

        <div className="bg-base-200 mt-10 pt-10">
            <div className="text-center">
                <h3 className="text-3xl font-[700]">Gadget Heaven</h3>
                <p className="text-sm md:text-base w-8/12 mx-auto text-black/60 font-medium">Leading the way in cutting-edge technology and innovation.</p>
            </div>
            <footer className="footer container mx-auto p-10">
                <nav className="justify-self-center">
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Product Support</a>
                    <a className="link link-hover">Order Tracking</a>
                    <a className="link link-hover">Shipping & Delivery</a>
                    <a className="link link-hover">Returns</a>
                </nav>
                <nav className="justify-self-center">
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Career</a>
                    <a className="link link-hover">Contact</a>
                </nav>
                <nav className="justify-self-center">
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of Service</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;