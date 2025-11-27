export default function Support() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-100 via-yellow-100 to-red-100 p-6">

            <div className="bg-white max-w-xl w-full p-8 rounded-2xl shadow-xl">
                <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">
                    الدعم الفني
                </h1>

                <form className="flex flex-col gap-4">
                    <input
                        type="text"
                        placeholder="اسمك"
                        className="w-full p-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-400 outline-none"
                    />

                    <input
                        type="email"
                        placeholder="إيميلك"
                        className="w-full p-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-400 outline-none"
                    />

                    <textarea
                        placeholder="رسالتك"
                        className="w-full p-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-400 outline-none h-32 resize-none"
                    ></textarea>

                    <button className="w-full bg-blue-600 text-white py-3 rounded-xl text-lg font-semibold hover:bg-blue-700 duration-200 shadow-md">
                        إرسال
                    </button>
                </form>
            </div>

        </div>
    );
}
