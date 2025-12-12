import { Cedarville_Cursive } from "next/font/google";

const cedarville = Cedarville_Cursive({
  subsets: ["latin"],
  weight: "400",
});

const Footer = () => {
  return (
    <footer className="bg-red-700 py-5 align-middle ">
        <div className=" flex items-center justify-between px-4">
            <div>
                <h1 className={`${cedarville.className} text-white font-bold text-3xl`}>Shiva Kumar</h1>
            </div>
            <div>
               <div className="flex space-x-4"> <div><p className="text-2xl text-black font-bold">Quick Links</p>
                <ul className="space-x-4">
                    <li className="text-white hover:text-gray-200 cursor-pointer">Privacy Policy</li>
                    <li className="text-white hover:text-gray-200 cursor-pointer">Terms of Service</li>
                    <li className="text-white hover:text-gray-200 cursor-pointer">Contact Us</li>
                </ul></div>
                <div>
                     <p className="text-2xl text-black font-bold">Quick Links</p>
                <ul className="space-x-4">
                    <li className="text-white hover:text-gray-200 cursor-pointer">Privacy Policy</li>
                    <li className="text-white hover:text-gray-200 cursor-pointer">Terms of Service</li>
                    <li className="text-white hover:text-gray-200 cursor-pointer">Contact Us</li>
                </ul>
                </div></div>
            </div>
        </div>
        <p className="text-center text-sm">© 2025 My Profile. All rights reserved design nd developed by <span className={`${cedarville.className} text-2xl font-extrabold text-white`}>Shiva Kumar</span>.</p>
    </footer>
  )
}

export default Footer