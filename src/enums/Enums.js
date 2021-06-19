let Enums = {
    ORASE: [{
        name: "Timisoara",
        cityId: 1
    },
    {
        name: "Arad",
        cityId: 2
    },
    {
        name: "Oradea",
        cityId: 3
    },
    {
        name: "Satu-Mare",
        cityId: 4
    }
    ],
    LISTA_CURSURI: [{
        id: 9,
        url: 'curs-bucatar',
        short: 'bucatar',
        name: "Bucatar",
        image: "bucatar-1.jpg",
        date: "1 noiembrie",
        documents: [
            "copie B.I/C.I",
            "copie certificat nastere",
            "copie diploma studii (minim studii gimnaziale)",
            "Adeverinta medicala cu mentiunea 'apt de munca'"
        ],
        type: "calificare",
        code: "7412.2.1",
        duration: "18 saptamani",
        conditions: "minim invatamant gimnazial absolvit",
        price: "1.000lei",
        description: [
            "Bucatarii stabilesc meniuri, pregatesc alimente, organizeaza si coordoneaza munca in bucatarie. Tot ei sunt cei care realizeaza preparate culinare dupa diferite retete care sa satisfaca exigentele consumatorilor. In acest scop, el se ocupa de pregatirea produselor alimentare pentru gatit.",
            "Masoara cantitatile necesare, le amesteca progresiv conform retetei, le pune la dospit, fermentat, copt sau fiert. Dupa ce preparatele culinare au fost pregatite, urmeaza impartirea lor in portii. Bucatarul utilizeaza in activitatea sa diferite produse alimentare, unelte si masini cu ajutorul carora transforma alimentele in preparate culinare. "
        ],
        notes: [
            "Dupa absolvirea cursului se elibereaza un certificat de calificare recunoscut de Ministerul Muncii si Ministerul Educatiei Nationale, insotit de suplimentul descriptiv care atesta competentele dobandite.",
            "Certificatul de calificare are recunoastere internationala daca este tradus si apostilat."
        ]
    },
    {
        id: 11,
        url: 'curs-cofetar-patiser',
        short: 'cofetar',
        name: "Cofetar - Patiser",
        image: "cofetar-1.jpg",
        date: "1 noiembrie",
        documents: [
            "copie B.I/C.I",
            "copie certificat nastere",
            "copie diploma studii (minim studii gimnaziale)",
            "Adeverinta medicala cu mentiunea 'apt de munca'"
        ],
        type: "calificare",
        code: "7412.2.1",
        duration: "18 saptamani",
        conditions: "minim invatamant gimnazial absolvit",
        price: "1.000 lei",
        description: [
            "Patiserul prepara in laborator sau in unitatile industrializate, produsele de patiserie in vederea comercializarii. Dupa ce receptioneaza (cantitativ si calitativ) materiile prime si auxiliare, le depoziteaza si le conserva pana la introducerea in fabricatie. Apoi sorteaza, curata, cerne si dozeaza materiile prime, dupa care urmeaza prepararea aluaturilor, cremelor si compozitiilor; dupa aceasta etapa, se trece la modelarea si coacerea preparatelor (foetaje), umplerea si asamblarea produselor de patiserie.",
            "Ultima parte a muncii patiserului consta in finisarea produselor, glasarea si decorarea lor. Utilizeaza dispozitive de incalzire si coacere (cuptoare, etuve, boilere) masini de preparat si fabricat (malaxoare, laminor, dozatoare automate), echipamente frigorifice (frigidere, vitrine frigorifice, dulapuri si camere frigorifice) si alte ustensile cum ar fi: forme pentru decor, trusa de sprituit, diverse vase, site, unelte, dulapuri, cantare, cazane, tavi etc."
        ],
        notes: [
            "Dupa absolvirea cursului se elibereaza un certificat de calificare recunoscut de Ministerul Muncii si Ministerul Educatiei Nationale, insotit de suplimentul descriptiv care atesta competentele dobandite.",
            "Certificatul de calificare are recunoastere internationala daca este tradus si apostilat."
        ]
    },

    {
        id: 1,
        url: 'curs-stivuitorist',
        short: 'stivuitorist',
        name: "Stivuitorist",
        image: "stivuitorist-1.jpeg",
        date: "5 mai",
        documents: [
            "copie B.I/C.I",
            "copie certificat nastere",
            "copie diploma studii (minim studii gimnaziale)",
            "fisa de aptitudine medicina muncii cu mentiunea 'apt pentru functia de stivuitorist'"
        ],
        type: "specializare",
        code: "834403",
        duration: "4 saptamani (56 ore pregatire teoretica si 44 ore pregatire practica)",
        condition: "minim invatamant gimnazial absolvit",
        price: "1.200 lei, cu posibilitate de plata in 2 transe \n *Tariful include taxa ISCIR pentru autorizarea dumneavoastra ca stivuitorist, nu se percep taxe suplimentare.",
        description: ["empty"],
        notes: [
            "Dupa absolvirea cursului se elibereaza un certificat de calificare recunoscut de Ministerul Muncii si Ministerul Educatiei Nationale, insotit de suplimentul descriptiv care atesta competentele dobandite.",
            "Certificatul de calificare are recunoastere internationala daca este tradus si apostilat."
        ]
    },
    {
        id: 2,
        url: 'curs-stagiu-stivuitorist',
        short: 'stagiu-stivuitorist',
        name: "Stagiu Stivuitorist",
        image: "stagiu-stivuitorist-1.jpg",
        date: "23 mai",
        documents: [
            "copie dupa cartea de identitate",
            "copie dupa autorizatia ISCIR cu datele posesorului si seria autorizatiei vizibile",
            "cerere tip (de la firma organizatoare)"
        ],
        type: "calificare",
        code: "8332.2.2",
        duration: "18 saptamani",
        condition: "minim invatamant gimnazial absolvit",
        price: "375 lei,tariful include si taxa ISCIR",
        description: [
            "Masinistul la masini pentru terasamente este conducatorul de masini si utilaje pentru terasamente, care conduce, intretine si supravegheaza instalatii, agregate si utilaje destinate executarii lucrarilor de terasamente conform cartii tehnice a acestora.",
            "Masinile pentru terasamente sunt utilizate cu preponderenta la lucrarile de pamant si in constructia de drumuri executand operatii de: incarcat; sapat si transportat; sapat santuri si canale; profilat/nivelat; scarificat; defrisat/curatat terenul; compactat etc.",
            "Utilajele pentru executarea terasamentelor se pot clasifica astfel: ",
            "- utilaje şi echipamente pentru sapat si incarcat: excavatoare cu o cupa, excavatoare cu lingura dreapta, excavatoare cu lingura inversa, excavatoare cu draglina, excavatoare cu graifer, excavatoare cu soneta; incarcatoare frontale; ",
            "- utilaje pentru afanat, imprastiat si nivelat terenul: buldozere, scarificatoare, screpere, gredere; ",
            "- utilaje pentru compactat: compactoare la care compactarea se realizeaza prin rulare, compactoare la care compactarea se realizeaza prin vibrare, compactoare la care compactarea se realizeaza prin batere, compactoare la care compactarea se realizeaza mixt; "
        ],
        notes: [
            "Dupa absolvirea cursului se elibereaza un certificat de calificare recunoscut de Ministerul Muncii si Ministerul Educatiei Nationale, insotit de suplimentul descriptiv care atesta competentele dobandite.",
            "Certificatul de calificare are recunoastere internationala daca este tradus si apostilat."
        ]
    },
    {
        id: 3,
        url: 'curs-masinist-la-masini-pentru-terasamente',
        short: 'masinist',
        name: "Masinist la masini pentru terasamente",
        image: "masinist-1.jpeg",
        date: "2 iunie"
    },
    {
        id: 4,
        url: 'curs-sudor',
        short: 'sudor',
        name: "Sudor electric",
        image: "sudor-1.jpeg",
        date: "10 iunie"
    },
        // {
        //     id: 5,
        //     url: 'curs-electrician-medie-si-joasa-tensiune',
        //     short: 'electrician',
        //     name: "Electrician medie si joasa tensiune",
        //     image: "sudor.jpeg",
        //     date: "23 august"
        // },
        // {
        //     id: 6,
        //     url: "curs-lacatus-mecanic-intretinere-si-reparatii-universale",
        //     short: "lacatus",
        //     name: "Lacatus mecanic intretinere si reparatii universale",
        //     image: "stivuitorist.jpeg",
        //     date: "20 septembrie"
        // },
        // {
        //     id: 7,
        //     url: 'curs-instalator-instalatii-tehnico-sanitare-si-gaze',
        //     short: 'instalator',
        //     name: "Instalator instalatii tehnico-sanitare si gaze",
        //     image: "masinist.jpeg",
        //     date: "1 noiembrie"
        // },
        // {
        //     id: 8,
        //     url: 'curs-zidar-pietrar-tencuitor',
        //     short: 'zidar',
        //     name: "Zidar, pietrar, tencuitor",
        //     image: "sudor.jpeg",
        //     date: "1 noiembrie"
        // },
        // {
        //     id: 10,
        //     name: "Ospatar, chelner, vanzator in unitati de alimentatie",
        //     image: "masinist.jpeg",
        //     date: "1 noiembrie"
        // },
        // {
        //     id: 12,
        //     url: 'curs-dulgher',
        //     short: 'dulgher',
        //     name: 'Dulgher, Tamplar, Parchetar',
        //     imae: 'dulgher-1.jpeg'
        // }

    ],
    SLIDER_CURS: [
        {
            name: "stivuitorist",
            list: ["curs-stivuitorist-1.jpeg", "curs-stivuitorist-2.jpeg", "curs-stivuitorist-3.jpeg", "curs-stivuitorist-4.jpeg"]
        },
        {
            name: "masinist",
            list: ["masinist-1.jpeg"]
        },
        {
            name: "sudor",
            list: ["sudor-1.jpeg"]
        },
        {
            name: 'bucatar',
            list: ["bucatar-1.jpg"]
        },
        {
            name: 'cofetar',
            list: ['cofetar-1.jpg']
        },
        {
            name: 'stagiu-stivuitorist',
            list: ['stagiu-stivuitorist-1.jpg']
        }
    ]
}

export default Enums;