import Link from "next/link"

const Header = ()=>{
    const svg = "/logo.svg"
    return(
        <div className="flex flex-row items-center min-w-[800px] mx-auto p-4 place-content-between bg-white"> 
            <div className="flex items-center">   
                <img src={svg} alt="birble logo" width={50}/>
                <Link href={'https://www.birbleai.com/'} className="font-semibold text-xl ml-2 text-[#333333]">Birble AI<span className="font-light text-xl text-[#333333]">| contracts</span></Link>
                <Link href={'#'}>
                    <div className="text-white p-2 font-medium text-[1.1rem] bg-gradient-to-r from-[#51d4ff] to-[#4e5de4] rounded-[0.5rem] ml-4">
                        Solidity Wizard
                    </div>
                </Link>
                <Link href={'/cairo'}>
                <div className="group bg-white border border-[1.5px] hover:border-none border-[#fe4a3c] hover:bg-gradient-to-r hover:from-[#fe9149] hover:to-[#fe4a3c]  ml-4 rounded-[0.5rem] p-2 hover:text-white">
                    <div className="font-medium text-[1.1rem] bg-clip-text bg-gradient-to-r from-[#fe9149] to-[#fe4a3c] hover:text-white text-transparent ">
                        Cairo Wizard
                    </div>
                </div>
                </Link>
            </div>
            <div >
                <Link href={'https://t.me/birblemain'} className="font-medium text-[1rem] ml-4 text-[#333333] ">Forum</Link>
                <Link href={'https://www.birbleai.com/'} className="font-medium text-[1rem] ml-4 text-[#333333] ">Docs</Link>
                <Link href={'https://github.com/Birblewin'} className="font-medium text-[1rem] ml-4 text-[#333333] ">GitHub</Link>
                <Link href={'https://twitter.com/birble_AI'} className="font-medium text-[1rem] ml-4 text-[#333333] ">Twitter</Link>
            </div>
        </div>
    )
}

export default Header;