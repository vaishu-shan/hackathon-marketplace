import React, { useEffect, useState } from 'react'
import { goldTicketsOwned, platinumTicketsOwned, silverTicketsOwned } from '../../web3Service/Web3Integration'
import { useSelector } from 'react-redux';
import platinum from "../../assets/images/PLATINUM.jpg";
import gold from "../../assets/images/GOLD.jpg";
import silver from "../../assets/images/SILVER.jpg";
import demoUserAvatar from "../../assets/images/avatar.jpg";
import { Link } from "react-router-dom";

const MyNFT = () => {
    const AccountState = useSelector((state) => state.EthAccountStates);

    const [platinumCardData, setPlatinumCardData] = useState(null)
    const [goldCardData, setGoldCardData] = useState(null)
    const [silverCardData, setSilverCardData] = useState(null)

    const platinumCardImages = Array(platinumCardData).fill(platinum);
    const goldCardImages = Array(platinumCardData).fill(platinum);
    const silverCardImages = Array(platinumCardData).fill(platinum);

    useEffect(() => {
        PlatniumTicket();
        GoldTicket();
        SilverTicket();
    }, [])


    const PlatniumTicket = async () => {
        try {
            let accAddress = AccountState?.account;
            const PlatniumTicketRes = await platinumTicketsOwned(accAddress, "0x457A6C81926875CA32028974bf83E001Ea43205d")
            console.log("PlatniumTicketRes", Number(PlatniumTicketRes))
            setPlatinumCardData(Number(PlatniumTicketRes))
        } catch (error) {
            console.log("error in PlatniumTicket", error)
            return
        }
    }
    const GoldTicket = async () => {
        try {
            let accAddress = AccountState?.account;
            const GoldTicketRes = await goldTicketsOwned(accAddress, "0x457A6C81926875CA32028974bf83E001Ea43205d")
            console.log("GoldTicketRes", Number(GoldTicketRes))
            setGoldCardData(Number(GoldTicketRes))
        } catch (error) {
            console.log("error in GoldTicket", error)
            return
        }
    }
    const SilverTicket = async () => {
        try {
            let accAddress = AccountState?.account;
            const SilverTicketRes = await silverTicketsOwned(accAddress, "0x457A6C81926875CA32028974bf83E001Ea43205d")
            console.log("SilverTicketRes", Number(SilverTicketRes))
            setSilverCardData(Number(SilverTicketRes))
        } catch (error) {
            console.log("error in SilverTicket", error)
            return
        }
    }
    return (
        <div
            id="section-1"
            className="flex flex-col gap-3 w-full h-[9pc] sm:h-[15pc] items-center justify-center "
            style={{ minHeight: "85vh" }}
        >
            <h2 className="text-2xl sm:text-3xl dark:text-white/90 font-semibold">
                Your NFTs
            </h2>
<div className="flex relative z-10 flex-wrap gap-5 justify-evenly">
            {platinumCardImages?.map((src, index) => {
                return (
                    // <img key={index} src={src} alt={`Replicated Image ${index}`} />
                    <Link
                        to=""
                        key="1"
                        className="border-[1px] m-2 border-gray-700/20 group transition-all hover:-translate-y-3 rounded-xl flex flex-col gap-2 flex-2 w-[27pc] bg-darkBlue-600 p-3"
                        
                    >
                        <div className="flex gap-3 items-center">
                            <img
                                className="w-11 rounded-full bg-darkBlue-300 h-11"
                                src={demoUserAvatar}
                                alt=""
                            />
                            <div className="flex flex-col">
                                <span className="text-white/50 text-xs line-clamp-1 rounded-md  w-[6pc] h-[1pc]">
                                    Concert By :
                                </span>{" "}
                                <Link
                                    to=""
                                    className="text-white/90 rounded-md w-[9pc] h-[1.5pc] hover:text-pink-500 hover:scale-[99%] transition-all line-clamp-1 text-sm font-normal"
                                >
                                    Dua Lipa
                                </Link>
                            </div>
                        </div>
                        <div className="border-[1px] relative z-30 hover:shadow-xl shadow-darkBlue-700 hover:-translate-y-1  border-gray-700/70 h-[17pc] bg-darkBlue-600/40 transition-all w-full overflow-hidden rounded-xl flex items-center justify-center">
                            <img
                                className="h-full absolute z-10 cw-max !min-w-fit group-hover:scale-125 transition-all"
                                src={src}
                                alt=""
                            />
                            <img
                                className="w-full blur-sm h-full absolute cw-max !min-w-fit group-hover:scale-125 transition-all"
                                src={src}
                                alt=""
                            />
                        </div>

                    </Link>
                )
            })}
            </div>
        </div>
    )
}

export default MyNFT
