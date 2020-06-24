"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "dogs",
      [
        {
          name: "Hope",
          age: "11 months",
          imageUrl:
            "https://lh5.ggpht.com/_yOV8dhzN4jk/SWKIixpf_dI/AAAAAAAAFTc/mfly_nE8x6Q/s400/P1010002.JPG",
          aboutMe:
            "My names Hope! I'm a bundle of fun who's ready to find my new family.I think a house with just grown ups would be best for me, so I can keep learning lots of new things from you as I grow up.I think a house with just grown ups would be best for me, so I can keep learning lots of new things from you as I grow up.I'm a super smart and active girl and I love learning cool new skills. Taking me for lots of walks and working on some fun training will really help me gain confidence with the world.If you have a Hope-sized whole in your heart, please come in to meet me!",
          breed: "Kelpie / Staffy",
          gender: "Female",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Rain",
          age: "3 years",
          imageUrl:
            "https://www.dogbreedinfo.com/images32/GermanShepherdAdultDogLayInGrassOutside.jpg",
          aboutMe:
            "When it Rain's - it pours! I know I look like a big cuddly bear and you're half right. Although I do love a good calm snuggle from time to time I'm also looking for a home that is going to continue my training. I really enjoy tumbling around with other dogs and get so wound up when I see them that I just can't contain myself! I need to learn to control my approach when meeting other canine friends.",
          breed: "German Shepherd",
          gender: "Male",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Buff",
          age: "9 months",
          imageUrl:
            "https://canineperspectivechicago.com/wp-content/uploads/2018/08/American-Bulldog-Dog-Breed-e1536255280590.jpg",
          aboutMe:
            "Hi I am Buff! I am a very big boy looking for a very big heart to welcome me into their home. I may weigh a tonne, but I am a lovable, gentle giant who is suitable to live with young kids, dogs and maybe even a cat if you think yours would like to play with me!It is very important that my new owners are willing to provide me with joint supplements for the rest of my life. Being such a big dog, my hips aren't in the best shape. The good news is that this is very manageable with appropriate exercise, weight management and a good quality diet. Unfortunately this means I cannot go to a home that has a staircase.",
          breed: "American Bulldog",
          gender: "Male",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Dalia",
          age: "3 years",
          imageUrl:
            "https://smds-9tby2u0p.stackpathdns.com/wp-content/uploads/2019/11/Jack-Rusell-Terrier-Shedding.jpeg",
          aboutMe:
            "Hello, I'm Dalia, and I'm just as sweet as I sound. I would love a quiet home with just adults where I can be the only dog for you to shower with love. New places and people take me a little time to get used to so I'll need to take new things slowly, I'd love a family that's ready to take the extra time to continue helping me build my confidence. I might be a little shy at first but once I get to know you we will be best friends for life. I really love to run around with my friends and toys are my favourite thing in the whole world. If you have a quiet home with plenty of patience and love to give (and plenty of toys too) and you think I might be the dog for you.",
          breed: "Jack Russell Terrier",
          gender: "Female",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Snow",
          age: "2 years",
          imageUrl:
            "https://i.pinimg.com/originals/e6/0c/c1/e60cc168bf19d4d6d42d2382e65f6b69.jpg",
          aboutMe:
            "Hey I'm Snow. I am a very shy girl who is looking for a home where everyone is above the age of 16. I would like to be the only dog in the home.I need very slow exposure to the world, as I have missed out on some very important socialisation when I was younger.I will need my humans to take it slow, be very gentle and understanding with me. I would love to go to some training too, so humans that can commit to that would be ideal!",
          breed: "Bull Arab",
          gender: "Female",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Jethro",
          age: "11 months",
          imageUrl:
            "https://www.houdenvanhonden.nl/globalassets/rassen/fci-5/alaska-malamute/ala-ou-0010.jpg",
          aboutMe:
            "Hey I'm Jethro. I am a young, playful and bouncy dog, who will need daily exercise, enrichment and training. True to my breed, I can be very aloof, so I would prefer go to an adults only home, as I am pretty worried about people over-handling me.I'd like to be the only dog in the home, while I very slowly work on my confidence around them. It would be best for my new parents to work with a trainer to help socialise me and assist with force-free training techniques.I will need secure fencing and a large yard, plus a home where I am allowed to spend time indoors.",
          breed: "Alaskan Malamute",
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("dogs", null, {});
  },
};
