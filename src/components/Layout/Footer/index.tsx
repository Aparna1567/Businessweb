import { Icon } from '@iconify/react';
import Link from 'next/link';
import Image from 'next/image';
import {footerLinks} from "@/app/api/data";
import Logo from "../Header/Logo";


const Footer=()=>{
    return(
    <>
    <footer className='pt-10 relative bg-white'>
        <div className="container m-auto px-4 max-w-screen-xl">
            <div className="flex flex-col lg:flex-row justify-between lg:items-center border-b pb-0 mb-10 gap-6">
                <div className="flex flex-wrap md:flex-nowrap gap-6">
                    <div className='flex items-start text-foottext text-[15px]'>
                        <Icon icon="weui:location-outlined" className='w-6 h-6 mr-3 mt-1' />
                        <div className="flex flex-col">
                            <span>FD-3. Procube Complex</span>
                            <span>Chennai, Tamil Nadu</span>

                        </div>
                    </div>
                    <div className='flex items-center text-foottext'>
                        <Icon icon="majesticons:phone-retro-line" className='w-6 h-6' />
                        <Link className='text-[15px] hover:text-prim' href="#">+1 (123) 123 1234</Link>
                    </div>
                    <div className='flex items-center text-foottext'>
                        <Icon icon="clarity:email-line-retro-line" className='w-6 h-6' />
                        <Link className='text-[15px] hover:text-prim' href="#">info@axora.com</Link>
                    </div>

                </div>
                <div className="flex gap-4">
                    <Link href="https://www.facebook.com/" className='text-muted hover:text-prim transition-colors'>
                    <Icon icon="fe:facebook" width="28" height="28" />
                    </Link>
                    <Link href="https://x.com/" className='text-muted hover:text-prim transition-colors'>
                    <Icon icon="fa6-brands:square-twitter" width="28" height="28" />
                    </Link>
                    <Link href="https://www.linkedin.com/" className='text-muted hover:text-prim transition-colors'>
                    <Icon icon="fa6-brands:linkedin" width="28" height="28" />
                    </Link>
                    <Link href="https://www.youtube.com/" className='text-muted hover:text-prim transition-colors'>
                    <Icon icon="cbi:youtube-alt" width="30" height="30" />
                    </Link>
                </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8'>
                <div className='lg:col-span-3'>
                    <div className='text-black pb-5 '>
                        <Logo />
                    </div>
                    <p className='text-[14px] leading-6 text-foottext'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, explicabo voluptas beatae totam eum atque dolorem necessitatibus nesciunt quasi odio!
                    </p>
                    <div className='flex flex-wrap gap-3 items-center pt-5'>
                        <Image src="/images/footer/award-logo-2.webp" alt="award-logo-2" width={70} height={70} className='p-2 cursor-pointer bg-black'/>
                    </div>
                </div>
                {/* <div className="lg:col-span-2">
                    <h4 className='text-[18px] text-black mb-3 font-chakrapetch font-bold'>
                        Services
                    </h4>
                    <ul>
                        {footerLinks.slice(0,6).map((item,index)=>(
                            <li key={index} className='pb-2'>
                                <Link href="#" className='text-footertext text-[15px] hover:text-prim transition-colors'>
                                { item.link}</Link>
                            </li>
                        ))}
                    </ul>
                </div> */}

                  <div className="lg:col-span-2">
  <h4 className='text-[18px] text-black mb-3 font-chakrapetch font-bold'>
    Services
  </h4>

  <ul>
    <li className="pb-2">
      <Link href="/services/web-development" className='text-footertext text-[15px] hover:text-prim transition-colors'>
        Web Design
      </Link>
    </li>

    <li className="pb-2">
      <Link href="/services/mobile-app-development" className='text-footertext text-[15px] hover:text-prim transition-colors'>
        Mobile App Development
      </Link>
    </li>


    <li className="pb-2">
      <Link href="/services/ui-ux-design" className='text-footertext text-[15px] hover:text-prim transition-colors'>
        UI/UX Design
      </Link>
    </li>

    <li className="pb-2">
      <Link href="/services/cloud-solutions" className='text-footertext text-[15px] hover:text-prim transition-colors'>
            Cloud Solutions
      </Link>
    </li>


    <li className="pb-2">
      <Link href="/services/cyber-security" className='text-footertext text-[15px] hover:text-prim transition-colors'>
        Cyber Security
      </Link>
    </li>
  </ul>
                </div>
                

                        {/* Resources */}
                  {/* <div className="lg:col-span-2">
                    <h4 className='text-[18px] text-black mb-3 font-chakrapetch font-bold'>
                        Resources
                    </h4>
                    <ul>
                        {footerLinks.slice(6,12).map((item,index)=>(
                            <li key={index} className='pb-2'>
                                <Link href={item.link} className='text-footertext text-[15px] hover:text-prim transition-colors'>
                                { item.link}</Link>
                            </li>
                        ))}
                    </ul>
                </div> */}
                <div className="lg:col-span-2">
  <h4 className='text-[18px] text-black mb-3 font-chakrapetch font-bold'>
    Resources
  </h4>

  <ul>
    <li className="pb-2">
      <Link href="/about" className='text-footertext text-[15px] hover:text-prim transition-colors'>
        About Us
      </Link>
    </li>

    <li className="pb-2">
      <Link href="/team" className='text-footertext text-[15px] hover:text-prim transition-colors'>
        Our Team
      </Link>
    </li>


    <li className="pb-2">
      <Link href="/blog" className='text-footertext text-[15px] hover:text-prim transition-colors'>
        Blog
      </Link>
    </li>

    <li className="pb-2">
      <Link href="/faq" className='text-footertext text-[15px] hover:text-prim transition-colors'>
        FAQs
      </Link>
    </li>

    <li className="pb-2">
      <Link href="/contact" className='text-footertext text-[15px] hover:text-prim transition-colors'>
        Contact Us
      </Link>
    </li>
  </ul>
                </div>

                <div className="lg:col-span-5">
                    <p className="text-[18px] text-blsck font-bold font-chakrapetch">
                        Sign up for updates
                    </p>
                    <form className="mt-5">
                        <div className="relative">
                            <input type="email" name="email" placeholder="Enter your email address" className="w-full nbg-white placeholder:text-foottext text-black py-3 pl-5 pr-10 border border-border rounded-md" />
                            <Icon icon="solar:plain-2-linear" className='text-[20px] text-foottext absolute right-4 top-3.5' />
                        </div>
                    </form>
                    <p className='text-[18px] textx-black font-bold font-chakrapetch pt-10 pb-4'>
                        Get App
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <a href="#">
                            <Image  src="/images/footer/google.webp" alt="Google Pay" width={140} height={45} className='w-auto h-auto'  />
                            
                        </a>

                        <a href="#">
                            <Image  src="/images/footer/app.webp" alt="App store" width={140} height={45} className='w-auto h-auto'  />

                        </a>
                       
                    </div>
                </div>
                
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-center border-t mt-10 pt-6 text-center sm:text-left">
               <p className='text-[15px] text-foottext mb-3 sm:mb-0'>
                All rights reserved by {""} 
                <Link href="/" target="_blank" className='hover:text-prim'>
                 Aparna K </Link>
               </p>
               <div className="flex gap-4">
                {footerLinks.slice(12,15).map((item,index)=>(
                    <Link key={index} href="#" className='text-foottext hover:text-prim text-[15px]'>
                        {item.link}                    </Link>
                ))}
               </div>

            </div>
        </div>
    </footer>
    </>
    )
}
export default Footer;