import { Manga } from '../interfaces/manga';


export const initialState: Manga[] = [

  {
    mal_id: 44347,
    url: 'https://myanimelist.net/manga/44347/One_Punch-Man',
    image_url:
      'https://cdn.myanimelist.net/images/manga/3/80661.jpg?s=3eb9cd0c329dacd00f6c318ee0f5945f',
    title: 'One Punch-Man',
    publishing: true,
    synopsis:
      'After rigorously training for three years, the ordinary Saitama has gained immense strength which allows him to take out anyone and anything with just one punch. He decides to put his new skill to goo...',
    type: 'Manga',
    chapters: 0,
    volumes: 0,
    score: 8.8,
    start_date: new Date('2012-06-14T00:00:00+00:00'),
    end_date: null,
    members: 212771
  },
  {
    mal_id: 788,
    url: 'https://myanimelist.net/manga/788/Punch',
    image_url: 'https://cdn.myanimelist.net/images/manga/3/154484.jpg?s=62b145a9c562dd7a4f8a9efa476c5fa3',
    title: 'Punch!',
    publishing: false,
    synopsis: 'Elle Nagahara is a first year in high school. Her grandfather and his rival, later friend made a promise, that their kids would get married. But they both had sons, so now the promise falls for the gr...',
    type: 'Manga',
    chapters: 15,
    volumes: 3,
    score: 7.41,
    start_date: new Date('2006-11-07T00:00:00+00:00'),
    end_date: new Date('2007-03-06T00:00:00+00:00'),
    members: 2538
  },
  {
    mal_id: 98270,
    url: 'https://myanimelist.net/manga/98270/Fire_Punch',
    image_url: 'https://cdn.myanimelist.net/images/manga/2/180430.jpg?s=36b484b7a7048e5d588db9f0fb3d452d',
    title: 'Fire Punch',
    publishing: false,
    synopsis: 'In the not-too-distant past, the Ice Witch blanketed the world in snow, starvation and madness, leading the inhabitants to seek their salvation in fire. With that, an unusual destiny unfolds for two y...',
    type: 'Manga',
    chapters: 83,
    volumes: 8,
    score: 7.3,
    start_date: new Date('2016-04-18T00:00:00+00:00'),
    end_date: new Date('2018-01-01T00:00:00+00:00'),
    members: 19442
  }

]
