export default function Home() {
    return (
        <div className="bg-gradient-to-br from-blue-200 via-yellow-100 to-red-200 min-h-screen">

            {/* Header Section */}
            <header className="text-center py-12">
                <h1 className="text-5xl font-extrabold text-blue-700 drop-shadow-lg">
                    مين ناويها؟
                </h1>
                <p className="mt-4 text-xl text-gray-700 font-semibold">
                    خليك معانا في التنظيم!
                </p>
            </header>

            {/* Description */}
            <section className="text-center px-6 max-w-2xl mx-auto mb-12">
                <p className="text-lg text-gray-800 leading-relaxed">
                    منصة شبابية لتنظيم النشاطات الجماعية مثل الرحلات، لعب الكورة،
                    المذاكرة الجماعية، والفعاليات الترفيهية.
                    <span className="text-blue-600 font-semibold">كل دا بسهولة وأمان!</span>
                </p>

                <div className="flex justify-center gap-4 mt-6">
                    <button className="px-6 py-3 bg-blue-600 text-white text-lg rounded-xl shadow-lg hover:bg-blue-700 duration-200">
                        اشترك الآن
                    </button>
                    <button className="px-6 py-3 bg-yellow-400 text-black text-lg rounded-xl shadow-lg hover:bg-yellow-500 duration-200">
                        اكتشف النشاطات
                    </button>
                </div>
            </section>

            {/* Features */}
            <section className="px-8 max-w-5xl mx-auto mb-20">
                <h2 className="text-3xl font-bold text-center text-gray-700 mb-10">
                    ليه تختار "مين ناويها"؟
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    <div className="bg-white p-6 rounded-2xl shadow-xl text-center border-t-4 border-blue-500">
                        <h3 className="text-xl font-semibold mb-3">سهولة الاستخدام</h3>
                        <p className="text-gray-600">واجهه بسيطة تخليك تنضم أو تنشئ نشاط بثواني.</p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-xl text-center border-t-4 border-green-500">
                        <h3 className="text-xl font-semibold mb-3">أمان</h3>
                        <p className="text-gray-600">نظام تسجيل موثوق لضمان سلامة المشاركين.</p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-xl text-center border-t-4 border-yellow-500">
                        <h3 className="text-xl font-semibold mb-3">تواصل سهل</h3>
                        <p className="text-gray-600">تواصل مباشر بين أعضاء كل فعالية.</p>
                    </div>

                </div>
            </section>

            {/* Testimonials */}
            <section className="bg-white py-12">
                <h2 className="text-3xl font-bold text-center text-gray-700 mb-8">آراء المستخدمين</h2>

                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6">

                    <div className="bg-yellow-50 p-5 rounded-xl shadow-md">
                        <p className="text-gray-700">“منصة ممتازة! سهلت عليّ تنظيم خروجة مع صحابي.”</p>
                        <span className="block mt-3 font-semibold">— أحمد</span>
                    </div>

                    <div className="bg-blue-50 p-5 rounded-xl shadow-md">
                        <p className="text-gray-700">“شاركت في كذا فعالية وكانت التجارب لطيفة جدًا.”</p>
                        <span className="block mt-3 font-semibold">— مريم</span>
                    </div>

                    <div className="bg-red-50 p-5 rounded-xl shadow-md">
                        <p className="text-gray-700">“أكتر حاجة عجبتني التواصل السهل بين الأعضاء.”</p>
                        <span className="block mt-3 font-semibold">— سامح</span>
                    </div>

                </div>
            </section>

            {/* Footer */}
            <footer className="text-center py  mt-12 text-gray-600 text-sm py-8">
                تابعنا على:
                <div className="flex justify-center gap-6 mt-3">
                    <a href="#" className="text-blue-600 font-bold">Facebook</a>
                    <a href="#" className="text-pink-600 font-bold">Instagram</a>
                    <a href="#" className="text-gray-800 font-bold">Twitter</a>
                </div>
                <p className="mt-6">© 2025 مين ناويها؟ — كل الحقوق محفوظة</p>
            </footer>
        </div>
    );
}
