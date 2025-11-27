import { Link } from "react-router-dom";

export default function Login() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-100 via-yellow-100 to-red-100 p-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

                {/* Title */}
                <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
                    تسجيل الدخول
                </h2>

                {/* Form */}
                <form className="flex flex-col gap-4">
                    <input
                        type="email"
                        placeholder="البريد الإلكتروني"
                        className="px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-400 outline-none"
                    />

                    <input
                        type="password"
                        placeholder="كلمة المرور"
                        className="px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-400 outline-none"
                    />

                    <button
                        type="submit"
                        className="mt-2 bg-blue-600 text-white py-3 rounded-xl text-lg font-medium hover:bg-blue-700 duration-200 shadow-md"
                    >
                        تسجيل الدخول
                    </button>
                </form>

                {/* Divider */}
                <div className="text-center my-6 text-gray-500">أو</div>

                {/* Signup Link */}
                <p className="text-center text-gray-700">
                    لسه معندكش حساب؟
                    <Link
                        to="/register"
                        className="text-blue-600 font-semibold mx-1 hover:underline"
                    >
                        إنشاء حساب
                    </Link>
                </p>

                {/* Back to Home */}
                <div className="text-center mt-4">
                    <Link
                        to="/"
                        className="text-gray-600 hover:text-gray-800 hover:underline"
                    >
                        الرجوع إلى الصفحة الرئيسية
                    </Link>
                </div>
            </div>
        </div>
    );
}
