import consult from '../assets/consultancyfor.jpg'

export default function ForConsultancy() {
    return (
        <div className="grid lg:grid-cols-2 m-4 md:mx-8 lg:mx-14 gap-8 md:gap-12 lg:gap-16">
            <div className="grid items-center">
                <h1 className='text-2xl md:text-4xl my-2 font-bold leading-relaxed'>Consultancy Card Title</h1>
                <div className="h-full">
                    <img src={consult} className='h-full' alt="" />
                </div>
            </div>
            <div className='mt-2'>
                <form className="">
                    <div className="mb-6">
                        <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your name"
                        />
                    </div>

                    <div className="mb-6">
                        <div className="flex items-center mb-2">
                            <label className="text-gray-700 mr-4" htmlFor="male">Are You local</label>
                            <input
                                className="mr-2 leading-tight"
                                id="local"
                                type="radio"
                                name="local"
                                value="local"
                            />
                        </div>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Phone</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your phone number"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Budget</label>
                        <select
                            id="budget"
                            name="budget"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option disabled>Select Budget</option>
                            <option value="0-1000">0-1000</option>
                            <option value="1000-5000">1000-5000</option>
                            <option value="5000-10000">5000-10000</option>
                            <option value="10000-50000">10000-50000</option>
                        </select>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            placeholder='Enter your message'
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <button className="w-full text-center py-3 bg-main-red text-white font-semibold">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}