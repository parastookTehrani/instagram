export function SignUp() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white shadow-sm p-8">
        <div className="flex justify-center mb-8">
          <img src="" alt="Instagram" />
        </div>

        <form action="" className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          />

          <input
            type="text"
            placeholder="User Name"
            className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          />

          <div className="relative">
            <input
              type="password"
              placeholder="Password"
              className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 pr-16 text-gray-900 placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-medium text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              Show
            </button>
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white font-semibold py-3 transition"
          >
            Sign up
          </button>

          <p className="text-center text-sm text-gray-600">
            Already have an account?
            <span>
              <a
                href=""
                className="font-medium text-blue-600 hover:text-blue-700"
              >
                Login
              </a>
            </span>
          </p>
        </form>
      </div>
    </main>
  );
}
