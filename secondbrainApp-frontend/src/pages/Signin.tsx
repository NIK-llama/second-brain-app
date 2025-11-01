export const Signin = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 font-sans p-4">
            <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-2xl transition-all duration-300 transform hover:shadow-3xl">
                <div className="flex flex-col items-center mb-8">
                    <h1 className="text-2xl font-extrabold text-gray-900 mt-4">
                        SIGNIN TO YOUR ACCOUNT
                    </h1>
                    <p className="text-sm text-blue-500 font-extrabold mt-2">
                        START BUILDING YOUR SECOND BRAIN TODAY
                    </p>
                </div>

                <form  className="space-y-6">
                    <div>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition duration-150"
                            placeholder="Username"
                        />
                    </div>
                    <div>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            required
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition duration-150"
                            placeholder="Password"
                        />
                    </div>
                   <button className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150" type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}