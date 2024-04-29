import React from 'react'

const sectionTitle = "Discover Our Story";
const sectionDescription = `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.`;
function About() {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className=" mx-auto flex px-5 py-24 items-center justify-center flex-col">

                    <div className="flex flex-col text-center w-9/12 mb-20">
                        <h1 className={`title-font sm:text-4xl !text-[2.5rem] font-medium tracking-tight text-gray-900 font-playfairDisplay after:bg-[#f4b350] after:block after:m-auto after:w-8 after:h-[3px] after:my-4`}>
                            {sectionTitle}
                        </h1>
                        <p className={`lg:w-2/3 mx-auto leading-relaxed text-base text-[#999999]`}>
                            {sectionDescription}
                        </p>
                    </div>

                    <section className="text-gray-600 body-font">
                        <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
                            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 flex flex-row items-center">
                                <img className="object-cover object-center rounded-sm mx-1 h-[45%]" alt="hero"
                                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTskXnhhRvBDcDbKVotVtQP3Maq3Cv-p8tQEOzd1yLuG9WjnddO' />
                                <img className="object-cover object-center rounded-sm mx-1 h-[50%]" alt="hero"
                                    src='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcReHGTU_9n0yUbnFXjoCvHBMxN3lnyMBO6-FQymW_kXoBbJ_N18' />
                            </div>
                            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center">
                                <h3 className="title-font sm:text-4xl !text-[1.90rem] mb-4 font-medium text-gray-900 font-playfairDisplay">Our History
                                </h3>
                                <p className="mb-8 leading-relaxed font-rubic">
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi.
                                </p>
                                <div className="flex justify-center">
                                    <img
                                        alt="Sign"
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYbYVmNfnDYh9HKAtiF79BZUF3jp56bEA9kQ&usqp=CAU" />
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="text-gray-600 body-font">
                        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center">
                                <h3 className="title-font sm:text-4xl !text-[1.90rem] mb-4 font-normal text-gray-900 font-playfairDisplay">
                                    Our Restorans
                                </h3>
                                <p className="mb-8 leading-relaxed font-rubic">Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.</p>
                                <p className="mb-8 leading-relaxed">If you have any questions, we are here to support you 24/7. We do our best to make your life happier and easier! See you soon!</p>
                                <div className="flex justify-center">
                                    <span>
                                        <p className='text-[#f4b350] font-playfairDisplay'>Monday — Thursday</p>
                                        <p className='font-playfairDisplay'>8 am — 11 pm</p>
                                    </span>
                                    <span className='mx-16'>
                                        <p className='text-[#f4b350] font-playfairDisplay'>Friday — Sunday</p>
                                        <p className='font-playfairDisplay'>11 am — 11 pm</p>
                                    </span>
                                </div>
                            </div>
                            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 flex flex-row items-center">
                                <img className="object-cover object-center rounded-sm mx-1" alt="hero"
                                    src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTOz0Y1CENxbRU1MV6t62QjyUR_Dz4GRfVU_8frM8Xx7m2qC0UY" />
                                <img className="object-cover object-center rounded-sm mx-1" alt="hero"
                                    src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRlEQcM9Ns_FCukCBmHBkbS6aqToUA3lL1bRsZpWdW2qr1JjkvD' />
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </>
    )
}

export default About;