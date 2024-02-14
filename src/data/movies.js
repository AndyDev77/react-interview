const movies = [
  {
    id: "1",
    title: "Oceans 8",
    category: "Comedy",
    images: "https://fr.web.img3.acsta.net/pictures/18/05/14/12/19/5676009.jpg",
    likes: 4,
    dislikes: 1,
  },
  {
    id: "2",
    title: "Midnight Sun",
    category: "Comedy",
    images: "https://fr.web.img3.acsta.net/pictures/18/05/04/13/15/4943524.jpg",
    likes: 2,
    dislikes: 0,
  },
  {
    id: "3",
    title: "Les indestructibles 2",
    images: "https://fr.web.img6.acsta.net/pictures/18/04/13/15/09/0323902.jpg",
    category: "Animation",
    likes: 3,
    dislikes: 1,
  },
  {
    id: "4",
    title: "Sans un bruit",
    images: "https://fr.web.img3.acsta.net/pictures/18/03/22/16/48/2454348.jpg",
    category: "Thriller",
    likes: 6,
    dislikes: 6,
  },
  {
    id: "5",
    title: "Creed II",
    images: "https://fr.web.img5.acsta.net/pictures/18/11/27/14/25/1451897.jpg",
    category: "Drame",
    likes: 16,
    dislikes: 2,
  },
  {
    id: "6",
    title: "Pulp Fiction",
    images:
      "https://fr.web.img4.acsta.net/medias/nmedia/18/36/02/52/18846059.jpg",
    category: "Thriller",
    likes: 11,
    dislikes: 3,
  },
  {
    id: "7",
    title: "Seven",
    images:
      "https://fr.web.img2.acsta.net/medias/nmedia/18/35/91/33/19255605.jpg",
    category: "Thriller",
    likes: 2,
    dislikes: 1,
  },
  {
    id: "8",
    title: "Inception",
    images:
      "https://fr.web.img2.acsta.net/medias/nmedia/18/72/34/14/19476654.jpg",
    category: "Thriller",
    likes: 2,
    dislikes: 1,
  },
  {
    id: "9",
    title: "Gone Girl",
    images:
      "https://cinevoraces.fr/_next/image?url=http%3A%2F%2Fcinevoraces_api%3A3005%2Fpublic%2Fposter%2F97&w=384&q=75",
    category: "Thriller",
    likes: 22,
    dislikes: 12,
  },
  {
    id: "10",
    title: "Pauvres créatures",
    images:
      "https://fr.web.img5.acsta.net/c_310_420/pictures/23/11/28/11/03/2973866.jpg",
    category: "Comedy",
    likes: 655,
    dislikes: 33,
  },
  {
    id: "11",
    title: "Dune",
    images:
      "https://fr.web.img5.acsta.net/c_310_420/pictures/21/08/10/12/20/4633954.jpg",
    category: "Drame",
    likes: 2,
    dislikes: 1,
  },
  {
    id: "12",
    title: "Oppenheimer",
    images:
      "https://fr.web.img3.acsta.net/c_310_420/pictures/23/05/26/16/52/2793170.jpg",
    category: "Drame",
    likes: 222,
    dislikes: 11,
  },
  {
    id: "13",
    title: "Wish",
    images: "https://fr.web.img6.acsta.net/pictures/23/11/02/16/59/5607521.jpg",
    category: "Animation",
    likes: 240,
    dislikes: 1,
  },
];

export const movies$ = new Promise((resolve, reject) =>
  setTimeout(resolve, 100, movies)
);
