export default function Home() {
    return (
        <div className="bg-linear-to-br from-blue-100 via-yellow-50 to-red-100 min-h-screen">

            {/* Hero Section */}
            <header className="text-center py-20 px-6">
                <h1 className="text-6xl font-extrabold text-blue-700 drop-shadow">
                    مين ناويها؟
                </h1>
                <p className="mt-4 text-2xl text-gray-700 font-semibold">
                    خليك معانا في التنظيم!
                </p>

                <p className="mt-6 max-w-2xl mx-auto text-lg leading-relaxed text-gray-800">
                    منصة شبابية لتنظيم النشاطات الجماعية مثل الرحلات، لعب الكورة، المذاكرة الجماعية،
                    والفعاليات الترفيهية.
                    <span className="text-blue-600 font-bold"> كل دا بسهولة وأمان! </span>
                </p>

                <div className="flex justify-center gap-6 mt-8">
                    <a href="/register"
                        className="px-8 py-3 bg-blue-600 text-white text-lg rounded-xl shadow-md hover:bg-blue-700 duration-200">
                        اشترك الآن
                    </a>

                    <a href="/events"
                        className="px-8 py-3 bg-yellow-400 text-black text-lg rounded-xl shadow-md hover:bg-yellow-500 duration-200">
                        اكتشف النشاطات
                    </a>
                </div>
            </header>

            {/* Features */}
            <section className="px-8 max-w-6xl mx-auto py-16">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-14">
                    ليه تختار "مين ناويها"؟
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                    <div className="bg-white p-8 rounded-3xl shadow-lg text-center hover:shadow-2xl duration-300 border-t-4 border-blue-500">
                        <h3 className="text-2xl font-bold mb-3">سهولة الاستخدام</h3>
                        <p className="text-gray-600 text-lg">واجهة بسيطة تخليك تنضم أو تنشئ نشاط بثواني.</p>
                    </div>

                    <div className="bg-white p-8 rounded-3xl shadow-lg text-center hover:shadow-2xl duration-300 border-t-4 border-green-500">
                        <h3 className="text-2xl font-bold mb-3">أمان</h3>
                        <p className="text-gray-600 text-lg">نظام تسجيل موثوق لضمان سلامة المشاركين.</p>
                    </div>

                    <div className="bg-white p-8 rounded-3xl shadow-lg text-center hover:shadow-2xl duration-300 border-t-4 border-yellow-500">
                        <h3 className="text-2xl font-bold mb-3">تواصل سهل</h3>
                        <p className="text-gray-600 text-lg">تواصل مباشر بين أعضاء كل فعالية.</p>
                    </div>

                </div>
            </section>

            {/* Testimonials */}
            <section className="bg-white py-16">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
                    آراء المستخدمين
                </h2>

                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-8">

                    <div className="bg-yellow-50 p-7 rounded-2xl shadow-md hover:shadow-xl duration-300">
                        <p className="text-gray-700 text-lg">“منصة ممتازة! سهلت عليّ تنظيم خروجة مع صحابي.”</p>
                        <span className="block mt-4 font-bold text-gray-800">— أحمد</span>
                    </div>

                    <div className="bg-blue-50 p-7 rounded-2xl shadow-md hover:shadow-xl duration-300">
                        <p className="text-gray-700 text-lg">“شاركت في كذا فعالية وكانت التجارب لطيفة جدًا.”</p>
                        <span className="block mt-4 font-bold text-gray-800">— مريم</span>
                    </div>

                    <div className="bg-red-50 p-7 rounded-2xl shadow-md hover:shadow-xl duration-300">
                        <p className="text-gray-700 text-lg">“أكتر حاجة عجبتني التواصل السهل بين الأعضاء.”</p>
                        <span className="block mt-4 font-bold text-gray-800">— سامح</span>
                    </div>

                </div>
            </section>

            {/* Footer */}
            <footer className="text-center mt-12 text-gray-700 text-md py-10">
                <p className="font-semibold">تابعنا على:</p>

                <div className="flex justify-center gap-6 mt-4">
                    <a href="#" className="text-blue-600 font-bold">Facebook</a>
                    <a href="#" className="text-pink-600 font-bold">Instagram</a>
                    <a href="#" className="text-gray-800 font-bold">Twitter</a>
                </div>

                <p className="mt-8">© 2025 مين ناويها؟ — كل الحقوق محفوظة</p>
            </footer>
        </div>
    );
}
