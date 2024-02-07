import { MdLocationPin } from "react-icons/md";
import { MdStar } from "react-icons/md";
import { MdStarBorder } from "react-icons/md";
import { FaPlay } from "react-icons/fa6";
import ReactPlayer from 'react-player/youtube'
import GooglesDetails from "../features/googleMap/detailMap";
import Headings from "../components/Headings/Headings";
import { useState } from "react";
import { useTranslation } from 'react-i18next';
import Gallery from "../features/Gallery";
const DetailPage = () => {
    const [open, setOpen  ] = useState(false)

    const { t } = useTranslation()

    const handleClick = () => {
        setOpen(true)
        console.log(open)
    };

    const handleClose = () => {
        setOpen(false)
        console.log(open)
    }

    return(
        <section className="w-full bg-white flex justify-center items-start">

            <main className="md:max-w-7xl w-full p-4 md:pr-8 md:pl-8 flex flex-col gap-8">
                <div className="flex justify-between items-center">
                    <div className="flex flex-col gap-2" >
                       <p className="p-2 bg-primaryColor text-white rounded-md">Catagory</p>
                       <p className="font-bold">Tile</p>
                       <p className="flex items-center"> <MdLocationPin className="text-primaryColor" /> location</p>
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
                    <Gallery />
                </div>

                <section className="w-full flex flex-col gap-4 md:flex-row">
                    <div className="w-full md:w-3/5 flex flex-col gap-4">
                        <div >
                            <h1 className="font-bold">{t('welcome')}</h1>
                            <p className="w-full p-4 mt-4 bg-secondaryColor">Bibendum purus aenean mus aenean eu interdum nonummy ipsum ad consequat. Dui eros donec faucibus convallis tempus rutrum id donec mus hymenaeos placerat congue curae mauris turpis gravida viverra consequat consequat gravida luctus.
                                Consectetuer aliquet. Libero porttitor curabitur</p>
                        </div>
                        <div>
                            <h1 className="font-bold">Video</h1>
                            <div className="w-full h-[300px] relative bg-black mt-2">
                                <img className=" w-full h-[300px] opacity-30" src="data:image/jpeg;base64,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" />
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 h-[50px] w-[50px] bg-primaryColor flex justify-center items-center rounded-[50%] cursor-pointer" onClick={handleClick}>
                                <FaPlay className="text-white" />
                            </div>
                            </div>
                            <div style={{ display: open ? 'block' : 'none', transition: 'all ease-in 0.2s' }} className="w-full h-[100vh] fixed top-0 left-0 z-50"  onClick={handleClose}>
                            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70 z-40"></div>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
                            <ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ' className=""/>
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
                            <GooglesDetails />
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
                                    Search
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
    )
}

export default DetailPage