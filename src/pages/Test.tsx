
export default function Test() {
    return (
        <div className="w-full grid mb-5 mx-4">
            <hr className="border-2 my-2 border-main-red flex flex-grow" />
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <NewsBannerCard />
                <NewsBannerCard />
                <NewsBannerCard />
                <NewsBannerCard />
            </div>
            <hr className="border-2 my-2 border-main-red flex flex-grow" />
        </div>
    )
}

function NewsBannerCard() {
    return (
        <div className="w-full p-4 rounded-xl flex justify-between items-center border border-main-red bg-superLight-red">
            <p className="flex flex-col">
                <span className="text-lg mb-3 font-medium">News Header</span>
                <span>Sub Head</span>
            </p>
        </div>
    )
}