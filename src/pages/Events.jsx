export default function Events() {
    const events = [
        { name: "ماتش كورة", date: "الجمعة", place: "النادي الأهلي" },
        { name: "مذاكرة جماعية", date: "السبت", place: "مكتبة مصر" },
        { name: "خروجة حديقة", date: "الأحد", place: "حديقة الأزهر" },
    ];

    return (
        <div className="min-h-screen p-10 bg-gray-100">
            <h1 className="text-3xl font-bold text-center mb-10">الفعاليات المتاحة</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {events.map((ev, i) => (
                    <div key={i} className="bg-white p-5 shadow-lg rounded-xl">
                        <h2 className="font-bold text-xl">{ev.name}</h2>
                        <p className="text-gray-600">📅 {ev.date}</p>
                        <p className="text-gray-600">📍 {ev.place}</p>

                        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">
                            اشترك
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
