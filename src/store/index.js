import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { 
    moviedata: [
      {
        "page": 1,
        "total_results": 10000,
        "total_pages": 500,
        "results": [
          {
            "popularity": 2139.868,
            "vote_count": 189,
            "video": false,
            "poster_path": "/rUAztxhGWKPeXZFrqjzaFk1uQir.jpg",
            "id": 671039,
            "adult": false,
            "backdrop_path": "/gnf4Cb2rms69QbCnGFJyqwBWsxv.jpg",
            "original_language": "fr",
            "original_title": "Bronx",
            "genre_ids": [
              53,
              28,
              18,
              80
            ],
            "title": "Rogue City",
            "vote_average": 6.1,
            "overview": "Caught in the crosshairs of police corruption and Marseille’s warring gangs, a loyal cop must protect his squad by taking matters into his own hands.",
            "release_date": "2020-10-30"
          },
          {
            "popularity": 1821.631,
            "vote_count": 143,
            "video": false,
            "poster_path": "/ugZW8ocsrfgI95pnQ7wrmKDxIe.jpg",
            "id": 724989,
            "adult": false,
            "backdrop_path": "/86L8wqGMDbwURPni2t7FQ0nDjsH.jpg",
            "original_language": "en",
            "original_title": "Hard Kill",
            "genre_ids": [
              28,
              53
            ],
            "title": "Hard Kill",
            "vote_average": 5.1,
            "overview": "The work of billionaire tech CEO Donovan Chalmers is so valuable that he hires mercenaries to protect it, and a terrorist group kidnaps his daughter just to get it.",
            "release_date": "2020-10-23"
          },
          {
            "popularity": 1743.741,
            "vote_count": 1346,
            "video": false,
            "poster_path": "/jlJ8nDhMhCYJuzOw3f52CP1W8MW.jpg",
            "id": 400160,
            "adult": false,
            "backdrop_path": "/wu1uilmhM4TdluKi2ytfz8gidHf.jpg",
            "original_language": "en",
            "original_title": "The SpongeBob Movie: Sponge on the Run",
            "genre_ids": [
              14,
              16,
              12,
              35,
              10751
            ],
            "title": "The SpongeBob Movie: Sponge on the Run",
            "vote_average": 8.1,
            "overview": "When his best friend Gary is suddenly snatched away, SpongeBob takes Patrick on a madcap mission far beyond Bikini Bottom to save their pink-shelled pal.",
            "release_date": "2020-08-14"
          },
          {
            "popularity": 1514.38,
            "vote_count": 322,
            "video": false,
            "poster_path": "/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg",
            "id": 528085,
            "adult": false,
            "backdrop_path": "/5UkzNSOK561c2QRy2Zr4AkADzLT.jpg",
            "original_language": "en",
            "original_title": "2067",
            "genre_ids": [
              878,
              53,
              18
            ],
            "title": "2067",
            "vote_average": 4.8,
            "overview": "A lowly utility worker is called to the future by a mysterious radio signal, he must leave his dying wife to embark on a journey that will force him to face his deepest fears in an attempt to change the fabric of reality and save humankind from its greatest environmental crisis yet.",
            "release_date": "2020-10-01"
          },
          {
            "popularity": 1497.123,
            "vote_count": 698,
            "video": false,
            "poster_path": "/betExZlgK0l7CZ9CsCBVcwO1OjL.jpg",
            "id": 531219,
            "adult": false,
            "backdrop_path": "/8rIoyM6zYXJNjzGseT3MRusMPWl.jpg",
            "original_language": "en",
            "original_title": "Roald Dahl's The Witches",
            "genre_ids": [
              14,
              10751,
              12,
              35,
              27
            ],
            "title": "Roald Dahl's The Witches",
            "vote_average": 6.9,
            "overview": "In late 1967, a young orphaned boy goes to live with his loving grandma in the rural Alabama town of Demopolis. As the boy and his grandmother encounter some deceptively glamorous but thoroughly diabolical witches, she wisely whisks him away to a seaside resort. Regrettably, they arrive at precisely the same time that the world's Grand High Witch has gathered.",
            "release_date": "2020-10-26"
          },
          {
            "popularity": 1022.641,
            "vote_count": 156,
            "video": false,
            "poster_path": "/elZ6JCzSEvFOq4gNjNeZsnRFsvj.jpg",
            "id": 741067,
            "adult": false,
            "backdrop_path": "/mc48QVtMhohMFrHGca8OHTB6C2B.jpg",
            "original_language": "en",
            "original_title": "Welcome to Sudden Death",
            "genre_ids": [
              28,
              53,
              12,
              18
            ],
            "title": "Welcome to Sudden Death",
            "vote_average": 6.3,
            "overview": "Jesse Freeman is a former special forces officer and explosives expert now working a regular job as a security guard in a state-of-the-art basketball arena. Trouble erupts when a tech-savvy cadre of terrorists kidnap the team's owner and Jesse's daughter during opening night. Facing a ticking clock and impossible odds, it's up to Jesse to not only save them but also a full house of fans in this highly charged action thriller.",
            "release_date": "2020-09-29"
          },
          {
            "popularity": 939.953,
            "vote_count": 675,
            "video": false,
            "poster_path": "/xrI4EnZWftpo1B7tTvlMUXVOikd.jpg",
            "id": 340102,
            "adult": false,
            "backdrop_path": "/eCIvqa3QVCx6H09bdeOS8Al2Sqy.jpg",
            "original_language": "en",
            "original_title": "The New Mutants",
            "genre_ids": [
              28,
              878,
              27,
              12
            ],
            "title": "The New Mutants",
            "vote_average": 6.3,
            "overview": "Five young mutants, just discovering their abilities while held in a secret facility against their will, fight to escape their past sins and save themselves.",
            "release_date": "2020-08-26"
          },
          {
            "popularity": 934.453,
            "vote_count": 144,
            "video": false,
            "poster_path": "/hddzYJtfYYeMDOQVcH58n8m1W3A.jpg",
            "id": 741074,
            "adult": false,
            "backdrop_path": "/DA7gzvlBoxMNL0XmGgTZOyv67P.jpg",
            "original_language": "en",
            "original_title": "Once Upon a Snowman",
            "genre_ids": [
              16,
              10751,
              35,
              14
            ],
            "title": "Once Upon a Snowman",
            "vote_average": 7,
            "overview": "The previously untold origins of Olaf, the innocent and insightful, summer-loving snowman are revealed as we follow Olaf’s first steps as he comes to life and searches for his identity in the snowy mountains outside Arendelle.",
            "release_date": "2020-10-23"
          },
          {
            "popularity": 894.494,
            "vote_count": 2594,
            "video": false,
            "poster_path": "/riYInlsq2kf1AWoGm80JQW5dLKp.jpg",
            "id": 497582,
            "adult": false,
            "backdrop_path": "/kMe4TKMDNXTKptQPAdOF0oZHq3V.jpg",
            "original_language": "en",
            "original_title": "Enola Holmes",
            "genre_ids": [
              80,
              18,
              9648
            ],
            "title": "Enola Holmes",
            "vote_average": 7.5,
            "overview": "While searching for her missing mother, intrepid teen Enola Holmes uses her sleuthing skills to outsmart big brother Sherlock and help a runaway lord.",
            "release_date": "2020-09-23"
          },
          {
            "popularity": 885.441,
            "vote_count": 1831,
            "video": false,
            "poster_path": "/kiX7UYfOpYrMFSAGbI6j1pFkLzQ.jpg",
            "id": 613504,
            "adult": false,
            "backdrop_path": "/6hgItrYQEG33y0I7yP2SRl2ei4w.jpg",
            "original_language": "en",
            "original_title": "After We Collided",
            "genre_ids": [
              10749,
              18
            ],
            "title": "After We Collided",
            "vote_average": 7.3,
            "overview": "Tessa finds herself struggling with her complicated relationship with Hardin; she faces a dilemma that could change their lives forever.",
            "release_date": "2020-09-02"
          },
          {
            "popularity": 858.451,
            "vote_count": 61,
            "video": false,
            "poster_path": "/k8Q9ulyRE8fkvZMkAM9LPYMKctb.jpg",
            "id": 618353,
            "adult": false,
            "backdrop_path": "/kU7ZiyeUwcpTkYj3UcxSqGdZmxY.jpg",
            "original_language": "en",
            "original_title": "Batman: Death in the Family",
            "genre_ids": [
              28,
              16
            ],
            "title": "Batman: Death in the Family",
            "vote_average": 8.1,
            "overview": "Tragedy strikes the Batman's life again when Robin Jason Todd tracks down his birth mother only to run afoul of the Joker. An adaptation of the 1988 comic book storyline of the same name.",
            "release_date": "2020-10-13"
          },
          {
            "popularity": 840.364,
            "vote_count": 2897,
            "video": false,
            "poster_path": "/aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg",
            "id": 337401,
            "adult": false,
            "backdrop_path": "/zzWGRw277MNoCs3zhyG3YmYQsXv.jpg",
            "original_language": "en",
            "original_title": "Mulan",
            "genre_ids": [
              28,
              12,
              18,
              14
            ],
            "title": "Mulan",
            "vote_average": 7.2,
            "overview": "When the Emperor of China issues a decree that one man per family must serve in the Imperial Chinese Army to defend the country from Huns, Hua Mulan, the eldest daughter of an honored warrior, steps in to take the place of her ailing father. She is spirited, determined and quick on her feet. Disguised as a man by the name of Hua Jun, she is tested every step of the way and must harness her innermost strength and embrace her true potential.",
            "release_date": "2020-09-04"
          },
          {
            "popularity": 812.678,
            "vote_count": 33,
            "video": false,
            "poster_path": "/e98dJUitAoKLwmzjQ0Yxp1VQrnU.jpg",
            "id": 571384,
            "adult": false,
            "backdrop_path": "/5HahZPsGGaDgnFb68J49ZwdwU0b.jpg",
            "original_language": "en",
            "original_title": "Come Play",
            "genre_ids": [
              27
            ],
            "title": "Come Play",
            "vote_average": 6.5,
            "overview": "A lonely young boy feels different from everyone else. Desperate for a friend, he seeks solace and refuge in his ever-present cell phone and tablet. When a mysterious creature uses the boy’s devices against him to break into our world, his parents must fight to save their son from the monster beyond the screen.",
            "release_date": "2020-10-28"
          },
          {
            "popularity": 791.593,
            "vote_count": 12,
            "video": false,
            "poster_path": "/AnVD7Gn14uOTQhcc5xYZGQ9DRvS.jpg",
            "id": 624779,
            "adult": false,
            "backdrop_path": "/h5sUE9jqoYrjsFjANJXL0gpZGye.jpg",
            "original_language": "en",
            "original_title": "VFW",
            "genre_ids": [
              28,
              53,
              27
            ],
            "title": "VFW",
            "vote_average": 4.9,
            "overview": "A typical night for veterans at a VFW turns into an all-out battle for survival when a desperate teen runs into the bar with a bag of stolen drugs. When a gang of violent punks come looking for her, the vets use every weapon at their disposal to protect the girl and themselves from an unrelenting attack.",
            "release_date": "2020-10-14"
          },
          {
            "popularity": 782.376,
            "id": 635302,
            "video": false,
            "vote_count": 69,
            "vote_average": 6.2,
            "title": "Demon Slayer: Kimetsu no Yaiba - The Movie: Mugen Train",
            "release_date": "2020-10-16",
            "original_language": "ja",
            "original_title": "劇場版「鬼滅の刃」無限列車編",
            "genre_ids": [
              16,
              28,
              36,
              12,
              14,
              18
            ],
            "backdrop_path": "/xoqr4dMbRJnzuhsWDF3XNHQwJ9x.jpg",
            "adult": false,
            "overview": "Tanjirō Kamado, joined with Inosuke Hashibira, a boy raised by boars who wears a boar's head, and Zenitsu Agatsuma, a scared boy who reveals his true power when he sleeps, boards the Infinity Train on a new mission with the Fire Hashira, Kyōjurō Rengoku, to defeat a demon who has been tormenting the people and killing the demon slayers who oppose it!",
            "poster_path": "/h8Rb9gBr48ODIwYUttZNYeMWeUU.jpg"
          },
          {
            "popularity": 771.804,
            "vote_count": 187,
            "video": false,
            "poster_path": "/6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
            "id": 694919,
            "adult": false,
            "backdrop_path": "/pq0JSpwyT2URytdFG0euztQPAyR.jpg",
            "original_language": "en",
            "original_title": "Money Plane",
            "genre_ids": [
              28
            ],
            "title": "Money Plane",
            "vote_average": 5.9,
            "overview": "A professional thief with $40 million in debt and his family's life on the line must commit one final heist - rob a futuristic airborne casino filled with the world's most dangerous criminals.",
            "release_date": "2020-09-29"
          },
          {
            "popularity": 742.647,
            "vote_count": 620,
            "video": false,
            "poster_path": "/qzA87Wf4jo1h8JMk9GilyIYvwsA.jpg",
            "id": 539885,
            "adult": false,
            "backdrop_path": "/54yOImQgj8i85u9hxxnaIQBRUuo.jpg",
            "original_language": "en",
            "original_title": "Ava",
            "genre_ids": [
              28,
              80,
              18,
              53
            ],
            "title": "Ava",
            "vote_average": 5.7,
            "overview": "A black ops assassin is forced to fight for her own survival after a job goes dangerously wrong.",
            "release_date": "2020-07-02"
          },
          {
            "popularity": 689.866,
            "vote_count": 402,
            "video": false,
            "poster_path": "/lQfdytwN7eh0tXWjIiMceFdBBvD.jpg",
            "id": 560050,
            "adult": false,
            "backdrop_path": "/htBUhLSS7FfHtydgYxUWjL3J1Q1.jpg",
            "original_language": "en",
            "original_title": "Over the Moon",
            "genre_ids": [
              16,
              12,
              10751,
              14
            ],
            "title": "Over the Moon",
            "vote_average": 7.7,
            "overview": "A girl builds a rocket to travel to the moon in hopes of meeting the legendary Moon Goddess.",
            "release_date": "2020-10-16"
          },
          {
            "popularity": 686.036,
            "vote_count": 768,
            "video": false,
            "poster_path": "/sy6DvAu72kjoseZEjocnm2ZZ09i.jpg",
            "id": 581392,
            "adult": false,
            "backdrop_path": "/gEjNlhZhyHeto6Fy5wWy5Uk3A9D.jpg",
            "original_language": "ko",
            "original_title": "반도",
            "genre_ids": [
              28,
              27,
              53
            ],
            "title": "Peninsula",
            "vote_average": 7,
            "overview": "A soldier and his team battle hordes of post-apocalyptic zombies in the wastelands of the Korean Peninsula.",
            "release_date": "2020-07-15"
          },
          {
            "popularity": 660.191,
            "vote_count": 888,
            "video": false,
            "poster_path": "/6agKYU5IQFpuDyUYPu39w7UCRrJ.jpg",
            "id": 740985,
            "adult": false,
            "backdrop_path": "/hbrXbVoE0NuA1ORoSGGYNASagrl.jpg",
            "original_language": "en",
            "original_title": "Borat Subsequent Moviefilm",
            "genre_ids": [
              35
            ],
            "title": "Borat Subsequent Moviefilm",
            "vote_average": 6.7,
            "overview": "14 years after making a film about his journey across the USA, Borat risks life and limb when he returns to the United States with his young daughter, and reveals more about the culture, the COVID-19 pandemic, and the political elections.",
            "release_date": "2020-10-23"
          }
        ]
      }
    ]
  },
  // mutations: {
  // },
  // actions: {
  // },
  // modules: {
  // }
})
