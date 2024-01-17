export const coloursTofilm = {
    'red': ['Romance', 'Drama', 'Action'],
    'blue': ['Drama', 'Mystery', 'Fantasy'],
    'green': ['Nature', 'Environmental Documentary', 'Adventure', 'Fantasy'],
    'yellow': ['Comedy', 'Adventure', 'Family'],  
    'purple': ['Fantasy', 'Science Fiction', 'Mystery'],
    'orange': ['Comedy', 'Adventure', 'Sports'],
    'black': ['Film Noir', 'Mystery', 'Thriller'],
    'white': ['Drama', 'Romance', 'Slice of Life'],
    'pink': ['Romance', 'Romantic Comedy', 'Drama'],
    'brown': ['Family', 'Drama', 'Historical'],
};

export const colorPaletteMap = {
    '#ff0034': 'red',
    '#3F51B5': 'blue',
    '#4CAF50': 'green',
    '#FFEB3B': 'yellow',  
    '#9C27B0': 'purple',
    '#FF5722': 'orange',
    '#000000': 'black',
    '#F3F3F3': 'white',
    '#F77791': 'pink',
    '#795548': 'brown'
};


export const genre = [
    "Action",
    "Adventure",
    "Animation",
    "Comedy",
    "Crime",
    "Documentary",
    "Drama",
    "Family",
    "Fantasy",
    "History",
    "Horror",
    "Music",
    "Mystery",
    "Romance",
    "Science Fiction",
    "TV Movie",
    "Thriller",
    "War",
    "Western",
];

export const genres = [
    {
        id: 28,
        name: "Action"
    },
    {
        id: 12,
        name: "Adventure"
    },
    {
        id: 16,
        name: "Animation"
    },
    {
        id: 35,
        name: "Comedy"
    },
    {
        id: 80,
        name: "Crime"
    },
    {
        id: 99,
        name: "Documentary"
    },
    {
        id: 18,
        name: "Drama"
    },
    {
        id: 10751,
        name: "Family"
    },
    {
        id: 14,
        name: "Fantasy"
    },
    {
        id: 36,
        name: "History"
    },
    {
        id: 27,
        name: "Horror"
    },
    {
        id: 10402,
        name: "Music"
    },
    {
        id: 9648,
        name: "Mystery"
    },
    {
        id: 10749,
        name: "Romance"
    },
    {
        id: 878,
        name: "Science Fiction"
    },
    {
        id: 10770,
        name: "TV Movie"
    },
    {
        id: 53,
        name: "Thriller"
    },
    {
        id: 10752,
        name: "War"
    },
    {
        id: 37,
        name: "Western"
    }
]

const genreis = genres.map(g => g.name);

console.log(genreis);
