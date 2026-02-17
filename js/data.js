/* ================================================
   DATA FILE - Barcha ma'lumotlar
   ================================================ */

// ========================
// O'QITUVCHILAR MA'LUMOTI
// ========================

const teachers = [
    {
        id: 1,
        name: "Tinchlikov Sulton Abduraimovich",
        title: "Kafedra Mudiri",
        position: "Dotsent",
        email: "s.tinchlikov@gdu.uz",
        phone: "+998 70 123-45-67",
        image: "images/tinchlikov.jpg",
        description: "Kafedramizning rahbari. 25 yildan ortiq oliy ta'lim sohasida ishchisi.",
        subjects: ["Matematik Analiz", "Differensial Tenglamalar", "Raqamli Usullar"],
        achievements: [
            "Yosh olimlar kongressi sertifikati",
            "20+ maqola va ilmiy ishlar",
            "Xalqaro konferensiasida ma'lumotlar taqdimi"
        ]
    },
    {
        id: 2,
        name: "Doс. Dr. Gulnoza Shodmonova",
        title: "Dotsent",
        position: "Associate Professor",
        email: "g.shodmonova@gdu.uz",
        phone: "+998 71 234-56-78",
        image: "https://via.placeholder.com/300x400?text=Doc.+Gulnoza",
        description: "Ehtimollar nazariyasi va matematik statistika bo'yicha mutaxassis.",
        subjects: ["Ehtimollar Nazariyasi", "Matematik Statistika", "Tasodifiy Jarayonlar"],
        achievements: [
            "PhD 2018 yilda olgan",
            "15+ maqola nashriyot",
            "Magistratura dasturlari boshqaruvchi"
        ]
    },
    {
        id: 3,
        name: "Doс. Dr. Rustam Valiyev",
        title: "Dotsent",
        position: "Associate Professor",
        email: "r.valiyev@gdu.uz",
        phone: "+998 72 345-67-89",
        image: "https://via.placeholder.com/300x400?text=Doc.+Rustam",
        description: "Hisobiy matematika va raqamli usullar bo'yicha olim.",
        subjects: ["Hisobiy Matematika", "Raqamli Usullar", "Programmalashtirish"],
        achievements: [
            "2 patentlangan kashf",
            "Tashqi universitetlar bilan hamkorlik",
            "25+ ilmiy nashriyot"
        ]
    },
    {
        id: 4,
        name: "Katta O'qituvchi Sitora Qodirov",
        title: "Katta O'qituvchi",
        position: "Senior Lecturer",
        email: "s.qodirov@gdu.uz",
        phone: "+998 73 456-78-90",
        image: "https://via.placeholder.com/300x400?text=Prof.+Sitora",
        description: "Algebra va chiziqli algebra fani bo'yicha ixtisoschi.",
        subjects: ["Chiziqli Algebra", "Algebra", "Geometriya"],
        achievements: [
            "Magistr darajasini 2020-yilda olgan",
            "Respublika o'quv konferensialarida ishtirokchi",
            "12+ ta o'quv ishi"
        ]
    },
    {
        id: 5,
        name: "O'qituvchi Aziz Mirpulatov",
        title: "O'qituvchi",
        position: "Lecturer",
        email: "a.mirpulatov@gdu.uz",
        phone: "+998 74 567-89-01",
        image: "https://via.placeholder.com/300x400?text=Teacher+Aziz",
        description: "Kompyuter fanları va programmalashtirish bo'yicha mutaxassis.",
        subjects: ["Python Programmalashtirish", "Veb Texnologiyalari", "Baza Dizayni"],
        achievements: [
            "3 yillik industrial tajribasi",
            "Online sertifikatlari",
            "Talaba loyihalari rahbari"
        ]
    },
    {
        id: 6,
        name: "Katta O'qituvchi Laylo Isakova",
        title: "Katta O'qituvchi",
        position: "Senior Lecturer",
        email: "l.isakova@gdu.uz",
        phone: "+998 75 678-90-12",
        image: "https://via.placeholder.com/300x400?text=Prof.+Laylo",
        description: "Axborot tizimlari va baza dizayni bo'yicha olim.",
        subjects: ["Axborot Tizimlari", "Database Dizayni", "Dastur Injiniring"],
        achievements: [
            "IT industriyada 10 yil tajribasi",
            "Respublika IT konferensialarida ma'lumotlar taqdimi",
            "ERP tizimlari mutaxassisi"
        ]
    }
];

// ========================
// FANLAR MA'LUMOTI
// ========================

const subjects = [
    { id: 1, name: "Matematik Analiz I", credits: 4, semester: 1, category: "Asosiy" },
    { id: 2, name: "Chiziqli Algebra", credits: 3, semester: 1, category: "Asosiy" },
    { id: 3, name: "Analitik Geometriya", credits: 3, semester: 1, category: "Asosiy" },
    { id: 4, name: "Umumiy Fizika", credits: 4, semester: 1, category: "Asosiy" },
    { id: 5, name: "Ingliz Tili", credits: 2, semester: 1, category: "Til" },
    { id: 6, name: "Matematik Analiz II", credits: 4, semester: 2, category: "Asosiy" },
    { id: 7, name: "Differensial Tenglamalar", credits: 3, semester: 2, category: "Asosiy" },
    { id: 8, name: "Diskret Matematika", credits: 3, semester: 2, category: "Asosiy" },
    { id: 9, name: "Programmalashtirish Asoslari", credits: 3, semester: 2, category: "IT" },
    { id: 10, name: "Ehtimollar Nazariyasi", credits: 3, semester: 3, category: "Asosiy" },
    { id: 11, name: "Matematik Statistika", credits: 3, semester: 3, category: "Asosiy" },
    { id: 12, name: "C++ Programmalashtirish", credits: 4, semester: 3, category: "IT" },
    { id: 13, name: "Veb Texnologiyalari", credits: 3, semester: 3, category: "IT" },
    { id: 14, name: "Funksional Analiz", credits: 3, semester: 4, category: "Asosiy" },
    { id: 15, name: "Kompleks Analiz", credits: 3, semester: 4, category: "Asosiy" },
    { id: 16, name: "Baza Dizayni", credits: 4, semester: 4, category: "IT" },
    { id: 17, name: "Python Programmalashtirish", credits: 4, semester: 4, category: "IT" },
    { id: 18, name: "Topologiya", credits: 3, semester: 5, category: "Asosiy" },
    { id: 19, name: "Algoritm Nazariyasi", credits: 3, semester: 5, category: "IT" },
    { id: 20, name: "Suniy Intellekt Asoslari", credits: 3, semester: 5, category: "AI" }
];

// ========================
// YANGILIKLAR MA'LUMOTI
// ========================

const news = [
    {
        id: 1,
        title: "Kafedrada yangi magistratura dasturi tashkil qilindi",
        date: "2024-03-15",
        category: "E'lon",
        excerpt: "Kafedraga 'Axborot Texnologiyalari' bo'yicha yangi magistratura dasturi qo'shildi.",
        image: "https://via.placeholder.com/600x300?text=New+Program"
    },
    {
        id: 2,
        title: "Xalqaro konferensiada bizning talabalarimiz",
        date: "2024-02-28",
        category: "Tadbir",
        excerpt: "Kafedraning talabalariga xalqaro matematik konferensiasida ishtirok etish uchun stipendiya berildi.",
        image: "https://via.placeholder.com/600x300?text=Conference"
    },
    {
        id: 3,
        title: "Kafedra laboratoriyasi ta'mirlandi",
        date: "2024-02-10",
        category: "Infra",
        excerpt: "Kompyuter laboratoriyasiga yangi qurilmalar o'rnatildi va Internet tezligi oshirildi.",
        image: "https://via.placeholder.com/600x300?text=Laboratory"
    },
    {
        id: 4,
        title: "Bilim kunasi tadbiri bo'lib o'tdi",
        date: "2024-01-30",
        category: "Tadbirlar",
        excerpt: "Barcha bitiruv kurslari uchun 'Karera Yo'riqnomasi' seminar tadbiri bo'lib o'tdi.",
        image: "https://via.placeholder.com/600x300?text=Career+Event"
    },
    {
        id: 5,
        title: "Yangi o'qu kitoblari nashr etildi",
        date: "2024-01-15",
        category: "Nashryot",
        excerpt: "Matematika va Programmalashtirish bo'yicha 3 ta yangi o'qu qo'llanmasi nashr etildi.",
        image: "https://via.placeholder.com/600x300?text=Books"
    },
    {
        id: 6,
        title: "Kafedra tuzilmasi yangilandi",
        date: "2023-12-20",
        category: "E'lon",
        excerpt: "Kafedraning tashkiliy tuzilmasi takror ko'rib chiqildi va modernizatsiya qilindi.",
        image: "https://via.placeholder.com/600x300?text=Structure"
    }
];

// ========================
// ILMIY ISHLAR MA'LUMOTI
// ========================

const scientificWorks = [
    {
        id: 1,
        type: "Maqola",
        title: "Raqamli usullar va ularning qo'llanilishi",
        author: "Prof. Alisher Xoliqov",
        year: 2023,
        journal: "Matematika va Informatika Jurnali"
    },
    {
        id: 2,
        type: "Kitob",
        title: "Matematik Analiz Qo'llanmasi",
        author: "Prof. Alisher Xoliqov",
        year: 2022,
        publisher: "GDU Nashryoti"
    },
    {
        id: 3,
        type: "Maqola",
        title: "Ehtimollar Nazariyasi va Statistika",
        author: "Doс. Gulnoza Shodmonova",
        year: 2023,
        journal: "International Math Journal"
    },
    {
        id: 4,
        type: "Patent",
        title: "Algoritm optimizatsion usuli",
        author: "Doс. Rustam Valiyev",
        year: 2021,
        status: "Ro'yxatdan o'tgan"
    },
    {
        id: 5,
        type: "Maqola",
        title: "Programmalashtirish texnologiyalari",
        author: "O'qituvchi Aziz Mirpulatov",
        year: 2022,
        journal: "IT Innovations"
    }
];

// ========================
// KAFEDRA HAQIDA
// ========================

const kafedraInfo = {
    name: "Amaliy Matematika va Axborot Texnologiyalari Kafedrasi",
    fullName: "Guliston Davlat Universiteti, Axborot Texnologiyalari Fakulteti, Amaliy Matematika va Axborot Texnologiyalari Kafedrasi",
    university: "Guliston Davlat Universiteti (GDU)",
    faculty: "Axborot Texnologiyalari Fakulteti",
    founded: 1998,
    foundedText: "1998-yil",
    image: "https://via.placeholder.com/1200x400?text=GDU+Campus",
    logo: "https://via.placeholder.com/200x200?text=GDU+Logo",
    
    // Universitetning Tarihi
    universityHistory: {
        established: 1965,
        name: "Syrdarya Davlat Pedagogika Instituti",
        renamed: 1966,
        renamedTo: "G'afur G'ulom shurafiga nisbatan",
        university: 1992,
        universityNote: "Sirdarya viloyatida universitet tashkil etish uchun qaror qabul qilindi",
        rector: "Mukhsin Khodzhaev",
        location: "Guliston, Sirdarya viloyati, O'zbekiston",
        students: 16942,
        faculties: [
            "Filoloji Fakulteti",
            "Fizika va Matematika Fakulteti",
            "Pedagogika Fakulteti",
            "Tabiiy fanlar Fakulteti",
            "Ijtimoiy fanlar va Iqtisodiyot Fakulteti",
            "Biologiya Fakulteti",
            "Axborot Texnologiyalari Fakulteti"
        ]
    },
    
    // Missiya va Vizyoni
    mission: "Talabalarni zamonaviy matematik va IT bo'yicha dunyo sifatidagi mutaxassislar qilib tayyorlash, ular orqali jamiyatning raqamli transformatsiyasiga hissa qo'shish",
    vision: "Markaziy Osiyodan Xalqaro darajadagi ilmiy tadqiqotlar, innovatsiyalar va ta'limni amalga oshiruvchi baland ta'limning markazi bo'lishdir",
    
    // Kafedraning xususiyatlari
    features: [
        {
            title: "Malakali o'qituvchilar",
            description: "45 ta dotsent, professor va o'qituvchi, ularning 80% PhD ga ega",
            icon: "fas fa-chalkboard-user"
        },
        {
            title: "Zamonaviy ta'lim",
            description: "12 ta bakalavriat va magistratura dasturlari, IT, matematika va aniqlik sohasida",
            icon: "fas fa-book"
        },
        {
            title: "Laboratoriyalar",
            description: "Kompyuter laboratoriyalari, server xonadoni, bulut texnologiyalari",
            icon: "fas fa-laptop"
        },
        {
            title: "Xalqaro hamkorlik",
            description: "30+ ta chet el universitetlari bilan hamkorlik, talaba almashuvlar",
            icon: "fas fa-globe"
        },
        {
            title: "Ilmiy tadqiqotlar",
            description: "245+ ilmiy nashr, 8 ta patent, respublika va xalqaro konferensialar",
            icon: "fas fa-microscope"
        },
        {
            title: "Karera yo'riqnomalari",
            description: "Talabalarni karera boshqaruvida yordamlilik, ish joylari bilan bog'lanish",
            icon: "fas fa-briefcase"
        }
    ],
    
    // Kafedraning tarixi
    history: [
        { 
            year: 1965, 
            event: "Syrdarya Davlat Pedagogika Institutining tashkil etilishi",
            details: "O'zbek, qozoq, rus va tojik tillarida ta'lim berish maqsadida amalga oshdi"
        },
        { 
            year: 1966, 
            event: "Institutan G'afur G'ulom shurafiga nisbatan nomlanganini almashish",
            details: "Marhinaz adabiy figuraning shurafiga nisbatan" 
        },
        { 
            year: 1992, 
            event: "Universitetga o'tkazilish",
            details: "Sirdarya viloyatida universitet tashkili uchun qaror qabul qilindi"
        },
        { 
            year: 1998, 
            event: "Amaliy Matematika va Axborot Texnologiyalari Kafedraning tashkil etilishi",
            details: "IT va matematika sohasida ixtisoslashgan kafedrasi achildi"
        },
        { 
            year: 2005, 
            event: "Ilk magistratura dasturi - 'Saxiy matematik va informatika'",
            details: "Master darajasidagi ixtisoslashuv boshlandi" 
        },
        { 
            year: 2008, 
            event: "Kafedra o'z binosi va laboratoriyalari qayta ta'mirlandi",
            details: "30 ta o'rinli kompyuter laboratoriyasi qurildi, internet kanal kengaytirildi"
        },
        { 
            year: 2010, 
            event: "Xalqaro sertifikatsiyalar dasturi boshlandy",
            details: "Oracle, Microsoft, Cisco kabilar bilan hamkorlik"
        },
        { 
            year: 2015, 
            event: "Kafedra uchun yangi laboratoriya inshosi va tajhizlari",
            details: "Ilg'or kompyuterlar, serverlari, xalol zona ta'mirlandi"
        },
        { 
            year: 2018, 
            event: "Xalqaro standartlar asosida dasturlarni qayta tuzish",
            details: "Bologna jarayoni asosida ta'lim tizimi modernizatsiya qilindi"
        },
        { 
            year: 2020, 
            event: "Online ta'lim platformasi - Moodle tizimi qo'shildi",
            details: "COVID-19 paytida masofaviy ta'lim mukammal ma'noda boshlandy"
        },
        { 
            year: 2021, 
            event: "Universitetda Tajriba Biologiya Laboratoriyasi tashkil etildi",
            details: "Dunyo Banki Academic Innovation Fond tomonidan moliyalashtirildi"
        },
        { 
            year: 2024, 
            event: "Yangi IT magistratura dasturi - 'Sun'iy intellekt va Mashin o'rganish'",
            details: "Kafedra bugungi zamon IT texnologiyasiga asosiy fokusni o'tkazdi"
        },
        { 
            year: 2025, 
            event: "Xitoj-O'zbekiston Xalqaro Oziq-ovqat Laboratoriyasi tashkil etildi",
            details: "Universitetda birgalikda ijro etildi"
        }
    ],
    
    // Statistika
    statistics: {
        teachers: 45,
        professors: 8,
        docents: 15,
        lecturers: 22,
        students: 2800,
        undergraduates: 1850,
        postgraduates: 800,
        doctorants: 150,
        universityStudents: 16942,
        subjects: 80,
        bachelors: 6,
        masters: 4,
        doctoralPrograms: 2,
        publications: 245,
        patents: 8,
        internationalPartners: 32,
        laboratories: 4,
        computers: 150
    },
    
    // Bog'lanish ma'lumotlari
    contact: {
        phone: "+998 (70) 123-45-67",
        email: "kafedra@gdu.uz",
        website: "www.gdu.uz",
        address: "Guliston shahar, Sirdarya viloyati, O'zbekiston",
        officeNumber: "101-A bino, 3-qavat",
        working_hours: "Dushanba-Juma: 09:00 - 18:00 (Tushlik vaqti: 12:30-13:30)",
        rector: {
            name: "Prof. Dr. Mukhsin Khodzhaev",
            title: "Universitetning Rektori",
            email: "rector@gdu.uz",
            phone: "+998 (70) 100-00-01"
        },
        departmentHead: {
            name: "Prof. Dr. Alisher Xoliqov",
            title: "Kafedra Mudiri",
            email: "a.xoliqov@gdu.uz",
            phone: "+998 (70) 123-45-01"
        }
    },
    
    // Kafedra birliklariga taqsimoti
    departments: [
        {
            name: "Matematik ta'lim shobasi",
            head: "Doс. Dr. G. Shodmonova",
            subjects: ["Matematik Analiz", "Differensial Tenglamalar", "Ehtimollar Nazariyasi"]
        },
        {
            name: "Informatika va Dastur ta'limi",
            head: "O'qituvchi A. Mirpulatov",
            subjects: ["Python", "Java", "Veb Texnologiyalari"]
        },
        {
            name: "Xalqaro Hamkorlik va Innovatsiya",
            head: "Doс. Dr. R. Valiyev",
            subjects: ["Xalqaro Loyihalar", "Ilmiy Tadqiqot", "Startap Yaratish"]
        }
    ],
    
    // Yangi o'ziga xos bilgilar
    recentDevelopments: [
        {
            year: 2021,
            title: "Tajriba Biologiya Laboratoriyasi",
            description: "Dunyo Banki tomonidan moliyalashtirilgan"
        },
        {
            year: 2025,
            title: "Xitoj-O'zbekiston Oziq-ovqat Laboratoriyasi",
            description: "Xalqaro hamkorlikda yaratilgan"
        }
    ]
};
