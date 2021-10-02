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
        price: "375 lei, tariful include si taxa ISCIR",
        description: [
            "Stagiul de instruire se organizeaza in conformitate cu Prescripția Tehnica ISCIR CR8/ 2009.",
            "Posesorii autorizatiilor ISCIR pentru ocupatia de stivuitorist au obligatia ca odata la 4 ani sa faca un stagiu de instruire, cu o durata de 8 ore, in vederea obtinerii unui talon nou.",
            "Aceste stagii trebuie efectuate atat de catre stivuitoristii care deservesc stivuitoare autopropulsate, cat si de cei care deservesc translatoare stivuitoare.",
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
        date: "2 iunie",
        documents: [
            "copie B.I./C.I.;",
            "copie certificat de nastere;",
            "copie diploma de studii;",
            "adeverinta medicala cu mentiunea apt munca"
        ],
        type: "calificare",
        code: "7245.2.6",
        duration: "18 saptamani",
        condition: "minim invatamant gimnazial absolvit",
        price: "1.100 lei",
        description: [
            "Electricianul Exploatare Medie şi Joasa Tensiune efectueaza lucrari de explotare, intretinere, revizie si reparatie (limitat de competente si impreuna cu echipele de mentenanta) la instalatiile electrice si echipamentele tehnologice conectate la medie şi joasa tensiune cat si verificarea starii tehnice a utilajelor si mijloacelor de securitate, a dispozitivelor de lucru.",
            "Dupa absolvirea cursului se elibereaza un certificat de calificare recunoscut de Ministerul Muncii si Ministerul Educatiei, insotit de suplimentul descriptiv care atesta competentele dobandite",
            "Certificatul de calificare are recunoastere internationala daca este tradus si apostilat."
        ],
        notes: [
            "Dupa absolvirea cursului se elibereaza un certificat de calificare recunoscut de Ministerul Muncii si Ministerul Educatiei Nationale, insotit de suplimentul descriptiv care atesta competentele dobandite.",
            "Certificatul de calificare are recunoastere internationala daca este tradus si apostilat."
        ]
    },
    {
        id: 4,
        url: 'curs-sudor',
        short: 'sudor',
        name: "Sudor electric",
        image: "sudor-1.jpeg",
        date: "10 iunie",
        documents: [
            "copie B.I./C.I.;",
            "copie certificat de nastere",
            "copie diploma de studii",
            "adeverinta medicala cu mentiunea apt de munca"
        ],
        type: "calificare",
        code: "7212.1.1",
        duration: "10 saptamani",
        condition: "minim invatamant gimnazial absovit",
        price: "1.000 lei",
        description: [
            "Sudorul realizeaza lucrari de imbinari nedemontabile prin diverse procedee de sudura pentru obtinerea unei game variate de produse, folosind utilajele şi echipamentele specifice tehnologiei de sudare indicate in documentatia tehnologica."
        ],
        notes: [
            "Dupa absolvirea cursului se elibereaza un certificat de calificare recunoscut de Ministerul Muncii si Ministerul Educatiei Nationale, insotit de suplimentul descriptiv care atesta competentele dobandite.",
            "Certificatul de calificare are recunoastere internationala daca este tradus si apostilat."
        ]

    },
    {
        id: 5,
        url: 'curs-electrician-medie-si-joasa-tensiune',
        short: 'electrician',
        name: "Electrician medie si joasa tensiune",
        image: "electrician-1.jpg",
        date: "23 august",
        documents: [
            "copie B.I./C.I.;",
            "copie certificat de nastere",
            "copie diploma de studii",
            "adeverinta medicala cu mentiunea apt de munca"
        ],
        type: "calificare",
        code: "7245.2.6",
        duration: "18 saptamani",
        condition: "minim invatamant gimnazial absolvit",
        price: "1.100 lei",
        description: [
            "Electricianul Exploatare Medie şi Joasa Tensiune efectueaza lucrari de explotare, intretinere, revizie si reparatie (limitat de competente si impreuna cu echipele de mentenanta) la instalatiile electrice si echipamentele tehnologice conectate la medie şi joasa tensiune cat si verificarea starii tehnice a utilajelor si mijloacelor de securitate si a dispozitivelor de lucru."
        ],
        notes: [
            "Dupa absolvirea cursului se elibereaza un certificat de calificare recunoscut de Ministerul Muncii si Ministerul Educatiei Nationale, insotit de suplimentul descriptiv care atesta competentele dobandite.",
            "Certificatul de calificare are recunoastere internationala daca este tradus si apostilat."
        ]

    },
    {
        id: 6,
        url: "curs-lacatus-mecanic-intretinere-si-reparatii-universale",
        short: "lacatus",
        name: "Lacatus mecanic intretinere si reparatii universale",
        image: "lacatus-1.jpg",
        date: "20 septembrie",
        documents: [
            "copie B.I./C.I.;",
            "copie certificat de nastere",
            "copie diploma de studii",
            "adeverinta medicala cu mentiunea apt de munca"
        ],
        type: "calificare",
        code: "7214.2.3",
        duration: "18 saptamani",
        conditions: "minim invatamant gimnazial absolvit",
        price: "1.000 lei",
        description: [
            "Lacatusul mecanic de intretinere si reparatii isi desfasoara activitatea in ateliere specializate in reparatii de masini unelte, utilaje sau instalatii industriale sau in locul in care masinile unelte, utilajele sau instalatiile industriale lucreaza in mod normal si necesita reparatii sau revizii pe loc, ca urmare a defectarii lor, executa lucrari de intretinere curenta si inlaturarea tuturor dereglarilor si defectiunilor aparute in timpul functionarii, controleaza periodic exploatarea corecta a masinilor si utilajelor in scopul prevenirii eventualelor avarieri accidentale si executa reparatii curente sau capitale, cunoaste tehnologia reparatiilor la masini unelte, instalatii sau utilaje, cunoaşte modul de funcţionare al acestora, lanţul cinematic la maşini unelte sau utilaje precum si schemele si desenele ce ilustreaza interdependenta ansamblurilor si subansamblurilor care compun masina unealta, utilajul sau instalatia.",
            "Pe baza acestora va diagnostica si remedia defectiunile intervenite la masinile unelte  , utilajele sau instalatiile defecte, va executa probele de functionare dupa efectuarea reparatiilor si repunerea in parametrii tehnici din documentatia masinii."
        ],
        notes: [
            "Dupa absolvirea cursului se elibereaza un certificat de calificare recunoscut de Ministerul Muncii si Ministerul Educatiei Nationale, insotit de suplimentul descriptiv care atesta competentele dobandite.",
            "Certificatul de calificare are recunoastere internationala daca este tradus si apostilat."
        ]
    },
    {
        id: 7,
        url: 'curs-instalator-instalatii-tehnico-sanitare-si-gaze',
        short: 'instalator',
        name: "Instalator instalatii tehnico-sanitare si gaze",
        image: "instalator-1.jpg",
        date: "1 noiembrie",
        documents: [
            "copie B.I./C.I.;",
            "copie certificat de nastere",
            "copie diploma de studii",
            "adeverinta medicala cu mentiunea apt de munca"
        ],
        type: "calificare",
        code: "7136.2.2",
        duration: "18 saptamani",
        condition: "minim invatamant gimnazial absolvit",
        price: "1.000 lei",
        description: [
            "Instalatorul tehnico-sanitar si gaze trebuie sa stie sa masoare, sa taie, sa pozeze si sa imbine conducte, sa realizeze treceri prin ziduri si plansee pentru conducte, sa monteze conducte, utilaje, aparate de utilizare, accesorii, sa puna in functiune instalatii, sa inlocuiasca, sa repare conductele, imbinarile si garniturile acestora, sa diagnosticheze si sa remedieze defectiunile constatate la toate tipurile de instalatii si utilaje/aparate de utilizare folosite pentru alimentarea cu apa, canalizare, ridicare a presiunii apei, stingere incendii, gaze naturale si sa efectueze lucrari de intretinere a acestora."
        ],
        notes: [
            "Dupa absolvirea cursului se elibereaza un certificat de calificare recunoscut de Ministerul Muncii si Ministerul Educatiei Nationale, insotit de suplimentul descriptiv care atesta competentele dobandite.",
            "Certificatul de calificare are recunoastere internationala daca este tradus si apostilat."
        ]
    },
    {
        id: 8,
        url: 'curs-zidar-pietrar-tencuitor',
        short: 'zidar',
        name: "Zidar, pietrar, tencuitor",
        image: "zidar-1.jpg",
        date: "1 noiembrie",
        documents: [
            "copie B.I./C.I.;",
            "copie certificat de nastere",
            "copie diploma de studii",
            "adeverinta medicala cu mentiunea apt de munca"
        ],
        type: "calificare",
        code: "7122.2.1",
        duration: "18 saptamani",
        condition: "minim invatamant gimnazial absolvit",
        price: "1.000 lei",
        description: [
            "Zidarul, pietrar, tencuitor executa elemente de constructii din zidarii de complexitati diferite folosind pietre naturale sau artificiale confectionate din materiale arse sau nearse sub forma de monolit sau de blocuri, prin asezarea lor in randuri orizontale si imbinarea lor dupa anumite reguli, folosind un liant (mortar) pentru legarea acestora, verifica si corecteaza defectele de executie, aprovizioneaza locul de munca cu materiale, scule, unelte, dispozitive si utilaje necesare, pregateste sculele, dispozitivele si utilajele pentru lucru, prepara mortarele pentru zidarii si tencuieli.",
            " Zidarul, pietrar, tencuitor executa de obicei constructii si elemente de constructii noi dar poseda si competentele necesare pentru a interveni la constructiile vechi, fie pentru demolarea lor in cazul cand nu se mai pot folosi fara risc, fie pentru reabilitarea, modernizarea si aducerea lor la o stare de functionare buna, prin lucrari de reparatii la zidarii si tencuieli, este capabil să evalueze calitatea şi eficienţa lucrării din punct de vedere tehnic şi economic."
        ],
        notes: [
            "Dupa absolvirea cursului se elibereaza un certificat de calificare recunoscut de Ministerul Muncii si Ministerul Educatiei Nationale, insotit de suplimentul descriptiv care atesta competentele dobandite.",
            "Certificatul de calificare are recunoastere internationala daca este tradus si apostilat."
        ]
    },
    {
        id: 10,
        name: "Ospatar, chelner, vanzator in unitati de alimentatie",
        short: 'ospatar',
        image: "ospatar-1.jpg",
        date: "1 noiembrie",
        documents: [
            "copie B.I./C.I.;",
            "copie certificat de nastere",
            "copie diploma de studii",
            "adeverinta medicala cu mentiunea apt de munca"
        ],
        type: "calificare",
        code: "5123.2.1",
        duration: "18 saptamani",
        condition: "minim invatamant gimnazial absolvit",
        price: "1.000 lei",
        description: [
            "Chelnerul asigura servirea consumatorilor cu produsele alimentare solicitate, in locatii de alimentatie publica. Serveste la cererea consumatorilor preparate culinare, bauturi si alte produse comestibile.Serviciul propriu-zis consta in primirea clientilor si stabilirea relatiei cu acestia (salutul, pronuntarea numelui clientului, daca este cazul informarea lor sugestiva, verbala si prin lista)",
            "In activitatea sa, chelnerul foloseste diverse materiale auxiliare: servet, blocnotes, creion, chibrit, carnet de plati, moneda divizionara, liste de preparate si bauturi, borderou de plati si bonuri de marcaj. Pentru serviciul propriu-zis sunt necesare: tacamuri, vesela, pahare, sticle, sifoane, platouri, clesti, masute pentru transportul preparatelor, masa de serviciu, mese pentru consumatori, scaune, flori, servetele etc."
        ],
        notes: [
            "Dupa absolvirea cursului se elibereaza un certificat de calificare recunoscut de Ministerul Muncii si Ministerul Educatiei Nationale, insotit de suplimentul descriptiv care atesta competentele dobandite.",
            "Certificatul de calificare are recunoastere internationala daca este tradus si apostilat."
        ]
    },
    {
        id: 12,
        name: "dulgher,tamplar, parchetar",
        image: "dulgher-1.jpeg",
        short: 'dulgher',
        documents: [
            "copie B.I./C.I.;",
            "copie certificat de nastere",
            "copie diploma de studii",
            "adeverinta medicala cu mentiunea apt de munca"
        ],
        type: "calificare",
        code: "7124.2.1",
        duration: "18 saptamani",
        condition: "minim invatamant gimnazial absolvit",
        price: "1.000 lei",
        description: [
            "Dulgherul – tamplar – parchetar este muncitorul din constructii – montaj a carui activitate se compune din: executarea schelelor necesare lucrului la inaltime pentru lucrarile de zidarie si finisaje la interior si exterior, executarea cofrajelor pentru diferitele elemente de rezistenta ale constructiilor (fundatii, stalpi, grinzi, planse, scari, pereti) din beton armat monolit, montarea elementelor prefabricate care alcatuiesc structura de rezistenta a cladirilor etajate, montarea pardoselilor din lemn (dusumele din scandura, parchet de diferite esente fag, stejar, foi de parchet laminat), executarea acoperisului tip sarpanta, incadrarea si ajustarea tamplariei."
        ],
        notes: [
            "Dupa absolvirea cursului se elibereaza un certificat de calificare recunoscut de Ministerul Muncii si Ministerul Educatiei Nationale, insotit de suplimentul descriptiv care atesta competentele dobandite.",
            "Certificatul de calificare are recunoastere internationala daca este tradus si apostilat."
        ]
    }],
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
        },
        {
            name: 'electrician',
            list: ['electrician-1.jpg']
        },
        {
            name: 'instalator',
            list: ['instalator-1.jpg']
        },
        {
            name: 'lacatus',
            list: ['lacatus-1.jpg']
        },
        {
            name: 'ospatar',
            list: ['ospatar-1.jpg']
        },
        {
            name: 'dulgher',
            list: ['dulgher-1.jpg']
        },
        {
            name: 'zidar',
            list: ['zidar-1.jpg']
        }
    ],
}

export default Enums;