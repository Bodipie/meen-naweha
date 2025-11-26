export default function Support() {
    return (
        <div className="min-h-screen p-10 bg-gray-100">
            <h1 className="text-3xl font-bold text-center mb-8">الدعم الفني</h1>

            <form className="bg-white max-w-xl mx-auto p-6 rounded-xl shadow-lg">
                <input type="text" placeholder="اسمك" className="w-full mb-4 p-3 border rounded" />
                <input type="email" placeholder="إيميلك" className="w-full mb-4 p-3 border rounded" />
                <textarea placeholder="رسالتك" className="w-full mb-4 p-3 border rounded h-32"></textarea>

                <button className="w-full bg-blue-600 text-white py-3 rounded">
                    إرسال
                </button>
            </form>
        </div>
    );
}
