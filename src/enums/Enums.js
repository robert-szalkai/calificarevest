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
            "Lacatusul mecanic de intretinere si reparatii isi desfasoara activitatea in ateliere specializate in reparatii de masini unelte, utilaje sau instalatii industriale sau in locul in care masinile unelte, utilajele sau instalatiile industriale lucreaza in mod normal si necesita reparatii sau revizii pe loc, ca urmare a defectarii lor, executa lucrari de intretinere curenta si inlaturarea tuturor dereglarilor si defectiunilor aparute in timpul functionarii, controleaza periodic exploatarea corecta a masinilor si utilajelor in scopul prevenirii eventualelor avarieri accidentale si executa reparatii curente sau capitale, cunoaste tehnologia reparatiilor la masini unelte, instalatii sau utilaje, cunoaşte modul de funcţionare al acestora, lanţul cinematic la maşini unelte sau utilaje precum si schemele si desenele ce ilustreaza interdependenta ansamblurilor si subansamblurilor care compun masina unealta, utilajul sau instalatia.",
            "Pe baza acestora va diagnostica si remedia defectiunile intervenite la masinile unelte  , utilajele sau instalatiile defecte, va executa probele de functionare dupa efectuarea reparatiilor si repunerea in parametrii tehnici din documentatia masinii."
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
        date: "1 noiembrie"
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
        type: "specializare, cod COR 834403",
        duration: "4 saptamani (56 ore pregatire teoretica si 44 ore pregatire practica)",
        price: "1.200 lei, cu posibilitate de plata in 2 transe \n *Tariful include taxa ISCIR pentru autorizarea dumneavoastra ca stivuitorist, nu se percep taxe suplimentare.",
    },
    {
        id: 2,
        url: 'curs-stagiu-stivuitorist',
        short: 'stagiu-stivuitorist',
        name: "Stagiu Stivuitorist",
        image: "stagiu-stivuitorist-1.jpg",
        date: "23 mai"
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