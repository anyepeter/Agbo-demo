import { MdLocationPin } from "react-icons/md";
import { MdStar } from "react-icons/md";
import { MdStarBorder } from "react-icons/md";
import { FaPlay } from "react-icons/fa6";
import ReactPlayer from 'react-player/youtube'
import GooglesDetails from "../../features/googleMap/detailMap";
import Headings from "../../components/Headings/Headings";
import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import Gallery from "../../features/Gallery";
import { useLocation } from "react-router-dom";
import { Header } from "../../layout/header";
import Footer from "../../layout/footer";

const DetailsPage = () => {
    const [open, setOpen  ] = useState(false)
    const location = useLocation()
    const { t } = useTranslation()

    const handleClick = () => {
        setOpen(true)
        console.log(open)
    };
    const handleClose = () => {
        setOpen(false)
        console.log(open)
    }

    useEffect(() => {
      window.scrollTo(0, 0);
  }, []);


  const { service } = location.state

  console.log(service)


    return(
      <>
      <Header />
        <section className="w-full mt-[90px] bg-white flex justify-center items-start">

            <main className="md:max-w-7xl w-full p-4 md:pr-8 md:pl-8 flex flex-col gap-8">
                <div className="flex justify-between items-center">
                    <div className="flex flex-col gap-2" >
                      <div className="flex justify-start">
                       <p className="p-2 bg-primaryColor w-auto text-white rounded-md">{t(service?.category)}</p>
                       </div>
                       <p className="font-bold">{service?.title}</p>
                       <p className="flex items-center"> <MdLocationPin className="text-primaryColor" /> {service?.location.description}</p>
                    </div>
                    <div className="self-end">
                        <div className="flex">
                            <MdStar className="text-primaryColor" />
                            <MdStar className="text-primaryColor" />
                            <MdStar className="text-primaryColor" />
                            <MdStarBorder className="text-primaryColor" />
                            <MdStarBorder className="text-primaryColor" />
                        </div>
                        <p>Total Rating</p>
                    </div>
                </div>

                <div className="w-full  h-[300px] md:h-[600px] lg:h-[700px]">
                    <Gallery image={service?.images}/>
                </div>

                <section className="w-full flex flex-col gap-4 md:flex-row">
                    <div className="w-full md:w-3/5 flex flex-col gap-4">
                        <div >
                            <h1 className="font-bold">Description</h1>
                            <p className="w-full p-4 mt-4 bg-secondaryColor">
                              {t(service?.description)}</p>
                        </div>
                        <div>
                            <h1 className="font-bold">Video</h1>
                            <div className="w-full h-[300px] relative bg-black mt-2">
                                <img className=" w-full h-[300px] opacity-30" src={service?.images[0]} />
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 h-[50px] w-[50px] bg-primaryColor flex justify-center items-center rounded-[50%] cursor-pointer" onClick={handleClick}>
                                <FaPlay className="text-white" />
                            </div>
                            </div>
                            <div style={{ display: open ? 'block' : 'none', transition: 'all ease-in 0.2s' }} className="w-full h-[100vh] fixed top-0 left-0 z-50"  onClick={handleClose}>
                            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70 z-40"></div>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
                            <ReactPlayer canPlay={false} url='https://www.youtube.com/watch?v=LXb3EKWsInQ' className=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 w-full md:w-2/5">
                        <div>
                            <h1 className="font-bold ">Contact services</h1>
                            <div className="flex flex-col gap-2 mt-2">
                                <div className="flex gap-2">
                                    <img className="h-12 w-12 rounded-[50%]" src=""  alt="service pic" />
                                    <ul>
                                        <li>Name Service</li>
                                        <li>Email</li>
                                    </ul>
                                </div>
                                <p className="p-2 bg-primaryColor rounded-md text-white">WhatApp +237-671-326-486</p>
                            </div>
                        </div>

                        <div>
                            <h1 className="font-bold" >Location</h1>
                            <GooglesDetails service={service.location}/>
                        </div>
                    </div>
                </section>

                <section className="mb-4">
                    <Headings title="Give your Reviews"/>
                    <div className="w-full md:w-3/5">
                        <form className="flex flex-col gap-4">
                            <div className="w-full ">
                                <p>Move Mouse for Rating Active Star</p>
                                <div className="flex pt-2">
                                    <MdStar className="text-primaryColor" />
                                    <MdStar className="text-primaryColor" />
                                    <MdStar className="text-primaryColor" />
                                    <MdStarBorder className="text-primaryColor" />
                                    <MdStarBorder className="text-primaryColor" />
                                </div>
                            </div>
                            <div className="w-full pr-2">
                                <textarea className="w-full h-52 p-4" placeholder="Review">

                                </textarea>
                            </div>

                            <div className="w-full">
                                <button
                                    type="submit"
                                    className="w-28 h-12 bg-primaryColor  text-white font-bold py-2 px-4 rounded self-end"
                                >
                                    {t('formSearch')}
                                </button>
                            </div>
                        </form>
                    </div>
                </section>

                <section className="mt-2 w-full md:w-3/5 pr-2">

                    <h1 className="mb-6">User Reviews(2)</h1>

                    <div className="flex flex-col gap-4">
                        <div className="flex gap-2 border-b" >
                            <div>
                                <img className="w-[50px] h-[50px] rounded-[50%] bg-black" />
                            </div>
                            <div className="w-full flex flex-col gap-2 mb-4">
                                <div className="flex flex-col gap-2 md:flex-row justify-between ">
                                    <div>
                                        <p>Name</p>
                                        <p >reviews</p>
                                    </div>

                                    <div className="flex flex-col md:flex-row md:gap-2">
                                        <p>Date</p>
                                        <p>Reply</p>
                                    </div>

                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipis Lorem ipsum dolor sit amet, consectetur adipis 
                                Lorem ipsum dolor sit amet, consectetur adipis Lorem ipsum dolor sit amet, consectetur adipis 
                                Lorem ipsum dolor sit amet, consectetur adipis Lorem ipsum dolor sit amet, consectetur adipis 
                                Lorem ipsum dolor sit amet, consectetur adipis Lorem ipsum dolor sit amet, consectetur adipis 
                                </p>
                            </div>
                        </div>
                    </div>

                </section>

            </main>
            
        </section>
        <Footer />
      </>
    )
}

export default DetailsPage
