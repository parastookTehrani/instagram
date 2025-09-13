export function SignUp (){
    return(
        <main className="bg-white">
            <div> <img src="" alt="" />
            </div>
            <form action="" className="flex flex-col items-center gap-1">
                <input type="email" placeholder="Email" className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"/>
                <input type="text" placeholder="User Name" className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" />
                <div>
                    <input type="password" placeholder="Password" className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 pr-16 text-gray-900 placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"/>
                    <button className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-medium text-gray-500 hover:text-gray-700 focus:outline-none" >Show</button>
                </div>
                <button>Sign up</button>
                <p>Already have an account?<span>Login</span></p>
            </form>
        </main>
    );
}