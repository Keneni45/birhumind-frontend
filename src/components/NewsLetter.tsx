export default function NewsLetter() {
    return (
        <div className="mx-6 grid my-14">
            <h4 className="text-center font-bold text-4xl text-gray-700">Follow the latest trends</h4>
            <p className="mt-4 px-14 text-gray-500 text-center text-2xl">With our daily news letter</p>
            <div className="flex gap-4 w-max mx-auto mt-4">
                <input type="text" placeholder="you@example.com" className="border shadow border-slate-200 px-4 py-2 rounded-lg" />
                <button className="px-4 py-2 font-bold border text-main-red rounded-lg border-main-red hover:bg-main-red hover:text-white">Submit</button>
            </div>
        </div>
    )
}