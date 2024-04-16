const Footer = () => {
    return(
        <>
            <div class="cont h-[459px] flex justify-center gap-40 gap-y-8 bg-[#02060c] text-white leading-8 pt-20">
            <div class="c1">
                <p className="text-xl font-bold"><img src="" alt="" height="50px"/></p>
                <ul className="text-base opacity-80">
                    <li>© 2023 Bundl Technologies</li>
                    <li>Pvt. Ltd</li>
                </ul>
            </div>
            <div class="c2">
                <p className="text-xl font-bold">Company</p>
                <ul className="text-base opacity-80">
                    <li>About</li>
                    <li>Careers</li>
                    <li>Team</li>
                    <li>Swiggy One</li>
                    <li>Swiggy Instamart</li>
                    <li>Swiggy Genie</li>
                </ul>
                    
            </div>
            <div class="c3">
               <p className="text-xl font-bold">Contact Us</p>
               <ul className="text-base opacity-80">
                <li>Help & Support</li>
                <li>Partner with us</li>
                <li>Ride with us</li> 
               </ul>
               <div class="c3 in pt-8 flex-col">
                <p className="text-xl font-bold">Legal</p>
                <ul className="text-base opacity-80">
                    <li>Terms & Conditions</li>
                    <li>Cookie Policy</li>
                    <li>Privacy Policy</li>
                </ul>
               </div>
            </div>
            <div class="c4">
                <p className="text-xl font-bold">We deliver to :</p>
                <ul className="text-base opacity-80">
                    <li>Banglore</li>
                    <li>Gurgaon</li>
                    <li>Hyderabad</li>
                    <li>Delhi</li>
                    <li>Mumbai</li>
                    <li>Pune</li>
                </ul>
                <button id="btn-pry " className="border-red-100 flex w-36 justify-center align-middle gap-[23%]"><span>586 Cites</span><i class="fa-solid fa-chevron-down"></i></button>
            </div>
        </div>
        </>
    )
}
export default Footer;