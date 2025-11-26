export default function Register() {
    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
            <form className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-6">سجّل الآن</h2>

                <input type="text" placeholder="اسمك" className="w-full p-3 border rounded mb-4" />
                <input type="email" placeholder="البريد الإلكتروني" className="w-full p-3 border rounded mb-4" />
                <input type="password" placeholder="كلمة المرور" className="w-full p-3 border rounded mb-4" />

                <button className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700">
                    إنشاء حساب
                </button>
            </form>
        </div>
    );
}
