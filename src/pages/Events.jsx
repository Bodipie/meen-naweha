export default function Events() {
    const events = [
        { name: "ماتش كورة", date: "الجمعة", place: "النادي الأهلي" },
        { name: "مذاكرة جماعية", date: "السبت", place: "مكتبة مصر" },
        { name: "خروجة حديقة", date: "الأحد", place: "حديقة الأزهر" },
    ];

    return (
        <div
            className="
                min-h-screen p-10 
                bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100
                bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]
            "
        >
            <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
                الفعاليات المتاحة
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {events.map((ev, i) => (
                    <div
                        key={i}
                        className="
                            bg-white/90 backdrop-blur-sm
                            p-6 rounded-2xl 
                            shadow-md border border-gray-200
                            transition-transform duration-300
                            hover:shadow-xl hover:-translate-y-2
                        "
                    >
                        <h2 className="font-bold text-2xl mb-3 text-gray-800">{ev.name}</h2>

                        <p className="text-gray-600 mb-1">📅 {ev.date}</p>
                        <p className="text-gray-600 mb-4">📍 {ev.place}</p>

                        <button
                            className="
                                mt-auto w-full py-2 
                                bg-blue-600 hover:bg-blue-700
                                text-white font-semibold rounded-xl
                                transition-all duration-300
                                cursor-pointer
                            "
                        >
                            اشترك
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
