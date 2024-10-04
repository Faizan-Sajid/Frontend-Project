

import Image from "next/image";
import pic from "../assests/assests.png";
import image from "../assests/main_photo.jpg";
 import SmoothAnimatedSection from "./animation"
    

function Cards() {
    return (
        <SmoothAnimatedSection>
    
        <div className="mt-[100px] text-center">
            <div className="grid sm:grid-cols-2 grid-cols-1 mb-8">
                <div>
                    <h1 className="text-white text-2xl font-semibold pb-3 sm:text-3xl">
                        What People Are Saying <br /> About Us
                    </h1>
                </div>
                <div>
                    <p className="text-white text-lg pb-3">
                        Everything you need to accept card payments and grow your <br /> business anywhere on the planet
                    </p>
                </div>
            </div>

            <div className="grid sm:grid-cols-3 grid-cols-1 gap-8">
                <div className="max-w-[350px] mx-auto mb-8 border rounded p-4 bg-gray-800">
                    <Image src={pic} alt="pic" className="w-[110px] h-[110px] object-contain mx-auto" />
                    <h1 className="text-white mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus nam tempora necessitatibus impedit! Incidunt officiis aliquid velit, ducimus autem eum consequuntur sunt nulla.</h1>
                    <div className="flex gap-4 mx-4 my-4 items-center">
                        <Image src={image} alt="pic" className="w-[48px] h-[48px] rounded-full" />
                        <div className="text-white font-bold">
                            <h1>Herman Jenson</h1>
                        </div>
                    </div>
                </div>

                <div className="max-w-[350px] mx-auto mb-8 border rounded p-4 bg-gray-800">
                    <Image src={pic} alt="pic" className="w-[110px] h-[110px] object-contain mx-auto" />
                    <h1 className="text-white mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus nam tempora necessitatibus impedit! Incidunt officiis aliquid velit, ducimus autem eum consequuntur sunt nulla.</h1>
                    <div className="flex gap-4 mx-4 my-4 items-center">
                        <Image src={image} alt="pic" className="w-[48px] h-[48px] rounded-full" />
                        <div className="text-white font-bold">
                            <h1>Herman Jenson</h1>
                        </div>
                    </div>
                </div>

                <div className="max-w-[350px] mx-auto mb-8 border rounded p-4 bg-gray-800">
                    <Image src={pic} alt="pic" className="w-[110px] h-[110px] object-contain mx-auto" />
                    <h1 className="text-white mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus nam tempora necessitatibus impedit! Incidunt officiis aliquid velit, ducimus autem eum consequuntur sunt nulla.</h1>
                    <div className="flex gap-4 mx-4 my-4 items-center">
                        <Image src={image} alt="pic" className="w-[48px] h-[48px] rounded-full" />
                        <div className="text-white font-bold">
                            <h1>Herman Jenson</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </SmoothAnimatedSection>
    
    );
}

export default Cards;
