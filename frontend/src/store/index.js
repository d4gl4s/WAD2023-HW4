import { createStore } from "vuex"

export default createStore({
  state: {
    posts: [
      {
        id: 1,
        body: "🍕 Enjoying a delicious pizza for lunch today! 😋 #FoodieFriday #PizzaLover",
        dateCreated: "22-10-2022",
        userId: 1,
        image: "https://upload.wikimedia.org/wikipedia/commons/c/c0/Pizza_with_tomatoes.jpg",
        likes: 0,
      },
      {
        id: 2,
        body: "🥗 Just had a healthy salad for dinner. Trying to stay on track! 💪 #HealthyEating",
        dateCreated: "23-10-2022",
        userId: 1,
        image: "",
        likes: 0,
      },
      {
        id: 3,
        body: "Indulging in some ice cream on this hot day! 🌞 #SummerTreat",
        dateCreated: "24-10-2022",
        userId: 1,
        image: "https://images.rawpixel.com/image_social_landscape/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcHg2OTg4NTEtaW1hZ2Uta3d2eGkwc3ouanBn.jpg",
        likes: 0,
      },
      {
        id: 4,
        body: "🍔 Just had the most amazing burger! 🤤 Food coma level: 💯 #FoodieFriday #BurgerLove",
        dateCreated: "25-10-2022",
        userId: 1,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/NCI_Visuals_Food_Hamburger.jpg/1920px-NCI_Visuals_Food_Hamburger.jpg",
        likes: 0,
      },
      {
        id: 5,
        body: "Dinner is served - a plate of delicious spaghetti! 🍝 #FoodieDelight",
        dateCreated: "26-10-2022",
        userId: 1,
        image: "",
        likes: 0,
      },
      {
        id: 6,
        body: "Enjoying a cozy cup of coffee this morning. Perfect start to the day! ☕ #CoffeeLover",
        dateCreated: "27-10-2022",
        userId: 1,
        image: "https://upload.wikimedia.org/wikipedia/commons/6/68/Cup_of_Coffee_with_Whipped_Cream.jpg",
        likes: 0,
      },
      {
        id: 7,
        body: "🥪 Just made a tasty sandwich for lunch. Simple and satisfying! 😄 #LunchTime",
        dateCreated: "28-10-2022",
        userId: 1,
        image: "",
        likes: 0,
      },
      {
        id: 8,
        body: "Had a double scoop of my favorite ice cream. Life is sweet! 🍨 #IceCreamLove",
        dateCreated: "29-10-2022",
        userId: 1,
        image: "",
        likes: 0,
      },
      {
        id: 9,
        body: "Grilled some delicious chicken for dinner. The grill master is in action! 🔥 #Grilling",
        dateCreated: "23-10-2022",
        userId: 1,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/%28332-365%29_Majam_%286205386194%29.jpg/1920px-%28332-365%29_Majam_%286205386194%29.jpg",
        likes: 0,
      },
      {
        id: 10,
        body: "🍣 Tried some fresh sushi today. A taste of Japan right here! 🍣 #SushiLover",
        dateCreated: "30-10-2022",
        userId: 1,
        image: "https://upload.wikimedia.org/wikipedia/commons/0/00/Chef_sushi.jpg",
        likes: 0,
      },
    ],
  },
  getters: {},
  mutations: {
    IncreaseLikeCount: (state, postId) => {
      const post = state.posts.find((post) => post.id === postId)
      if (post) post.likes += 1
    },
    ResetLikes: (state) => {
      state.posts.forEach((post) => {
        post.likes = 0
      })
    },
  },
  actions: {
    IncreaseLikeCountAct: (act, postId) => {
      setTimeout(function () {
        act.commit("IncreaseLikeCount", postId)
      }, 100)
    },
    ResetLikesAct: (act) => {
      setTimeout(function () {
        act.commit("ResetLikes")
      }, 100)
    },
  },
  modules: {},
})
