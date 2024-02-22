import Tool from "./tool";


export default function ERC1155() {

    return (

        <div className=" flex flex-col rounded-lg overflow-y-visible p-4 bg-white ">
          <h2 className="text-[#818998] font-semibold text-xs">SETTINGS</h2>
            <form className="flex flex-col">
                <label className="text-black mt-2 text-xs font-normal">Name</label>
                <input
                    type="text"
                    placeholder="MyToken"
                    className="mt-2 p-1 rounded border border-gray-300 text-black"
                />
                <label className="text-black text-xs mt-2 font-normal">URI</label>
                
                <input
                    type="text"
                    placeholder="http://..."
                    className="mt-2 p-1 rounded border border-gray-300  text-black"
                    
                />
            </form>
            <hr className="my-4"></hr>
            <div>
                <h1 className="text-[#818998] font-semibold text-xs">FEATURES</h1>
                <div className="mt-2 flex items-center">
                    <input
                        title="Mintable"
                        type="checkbox"
                        className="form-checkbox mt-2 h-3 w-3 rounded"

                    />
                    <label className="ml-2 mt-2 text-[#333333] ">Mintable</label>
                </div>
                <div className="m-2 flex items-center">
                    <input
                        title="Burnable"
                        type="checkbox"
                        className="form-checkbox mt-2 h-3 w-3 text-indigo-600 rounded"

                    />
                    <label className="ml-2 mt-2 text-[#333333]">Burnable</label>
                </div>
                <div className="m-2 flex items-center">
                    <input
                        title="Supply Tracking"
                        type="checkbox"
                        className="form-checkbox mt-2 h-3 w-3 text-indigo-600 rounded"

                    />
                    <label className="ml-2 mt-2 text-[#333333] ">Supply Tracking</label>
                </div>
                <div className="m-2 flex items-center">
                    <input
                        title="Pausable"
                        type="checkbox"
                        className="form-checkbox mt-2 h-3 w-3 text-indigo-600 rounded"

                    />
                    <label className="ml-2 mt-2 text-[#333333] ">Pausable</label>
                </div>
                <div className="m-2 mb-0 flex items-center">
                    <input
                        title="Updated URI"
                        type="checkbox"
                        className="form-checkbox mt-2 h-3 w-3 text-indigo-600 rounded"

                    />
                    <label className="ml-2 mt-2 text-[#333333] ">Updated URI</label>
                </div>

            </div>
            <hr className="my-4"></hr>
            <section>
                <h1>
                    <span className="text-[#818998] font-semibold text-xs">ACCESS CONTROL</span>
                    <span className="ml-2">
                        <input type="checkbox" disabled defaultChecked />
                    </span>
                </h1>
            <div className="flex flex-col text-black ml-3 mt-1">
                    <label className="inline-flex items-center  mt-2">
                        <input 
                        type="radio" 
                        className="rounded-full h-3 w-3" 
                        name="accessControl" />

                        <span className="ml-2 text-black">Ownable</span>

                    </label>
                    <label className="inline-flex items-center mt-2 mr-4">
                        <input 
                        type="radio" 
                        className="rounded-full h-3 w-3" 
                        name="accessControl" />

                        <span className="ml-2 text-black">Roles</span>

                    </label>
                    <label className="inline-flex mt-2 items-center">
                        <input 
                        type="radio" 
                        className="rounded-full h-3 w-3" 
                        name="accessControl" />

                        <span className="ml-2 text-black">Managed</span>
                    </label>
                </div>
            </section>


            <hr className="my-4" />
            <section>
                <h1 className="mt-2">
                    <span className="text-[#818998] font-semibold text-xs">UPGRADEABILTY</span>
                    <span className="ml-2">
                        <input type="checkbox" />
                    </span>
                </h1>
                <div className="flex flex-col text-black m-3 gap-3">
                <label className="inline-flex items-center mt-2 mr-4">
                        <input 
                        type="radio" 
                        className="rounded-full h-3 w-3" 
                        name="accessControl" />

                        <span className="ml-2 text-black">Transparent</span>

                    </label>
                    <label className="inline-flex mt-2 items-center">
                        <input 
                        type="radio" 
                        className="rounded-full h-3 w-3" 
                        name="accessControl" />

                        <span className="ml-2 text-black">UUPS</span>
                    </label>
                </div>
            </section>
            <hr className="my-4" />
            <div>
                <h1 className="text-[#818998] font-semibold text-xs ">INFO</h1>
                <div className="flex flex-col mt-[0.75rem]">
                   
                    <label htmlFor="Security Contact" className="text-[#333333] text-sm">
                        Security Contact
                    </label>
                    <input  id="Security Contact" type="text" placeholder="security@example.com" className="border border-1 border-[#333333] rounded-[6px] p-1  text-black"/>
                </div>
                <div className="flex flex-col mt-[0.75rem]">
                    <label htmlFor="license" className="text-[#333333] text-sm">
                        License
                    </label>
                    <input  id="license" type="text" placeholder="MIT" className="border border-1 border-[#333333] rounded-[6px] p-1  text-black" />
                </div>
            </div>
        </div>

    );
}

