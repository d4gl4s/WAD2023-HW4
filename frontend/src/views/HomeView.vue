<template>
  <h1>Posts</h1>
  <button class="styledButton" v-on:click="LogOut">Log Out</button>

  <div v-if="posts.length > 0">
    <ul>
      <li v-for="post in posts" :key="post.id">
        <post :post="post" @callParentMethod="IncreaseLikeCount"></post>
      </li>
    </ul>
  </div>
  <div v-else>
    <p>No posts available.</p>
  </div>

  <div id="buttonsDiv">
    <button class="styledButton" v-on:click="AddPost">Add Post</button>
    <button class="styledButton" v-on:click="DeleteAll">Delete All</button>
  </div>
</template>

<script>
import Post from "@/components/Post.vue"
export default {
  name: "home",
  components: { Post },
  data: function () {
    return {
      posts: [],
      //authResult: auth.authenticated()
    }
  },
  mounted() {
    fetch("http://localhost:3000/posts")
      .then((response) => response.json())
      .then((data) => {
        this.posts = data.posts.rows
      })
      .catch((err) => console.log(err.message))
  },
  methods: {
    LogOut() {
      fetch("http://localhost:3000/auth/logout", {
        credentials: "include", // Specify this if you need cookies
      })
        .then((response) => response.json())
        .then((data) => {
          this.$router.push("/login")
        })
        .catch((e) => {
          console.log(e)
          console.log("error logout")
        })
    },
    IncreaseLikeCount: function (postId) {
      fetch("http://localhost:3000/increaseLikeCount", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ postId }),
      }).catch((e) => {
        console.log(e)
        console.log("error")
      })
      this.posts = this.posts.map((post) => {
        if (post.id == postId) {
          return { ...post, like_count: post.like_count + 1 }
        }
        return post
      })
    },
    AddPost: function () {
      // Redirect to AddPost page
      this.$router.push("/addpost")
    },
    DeleteAll: function () {
      fetch("http://localhost:3000/deleteAll")
        .then((response) => response.json())
        .then((this.posts = []))
        .catch((e) => {
          console.log(e)
          console.log("error logout")
        })
    },
  },
}
</script>
<style scoped>
li {
  text-decoration: none;
  list-style-type: none;
  width: 100%;
  margin-left: 0;
}
ul {
  width: 70%;
  margin: auto;
  margin-top: 3em;
  max-width: 600px;
  margin-bottom: 3em;
  padding-left: 0;
}
#buttonsDiv {
  margin: auto;
  display: flex;
  justify-content: space-around;
  width: 50%;
  margin-bottom: 5em;
}

.styledButton {
  background-color: rgb(169, 169, 255);
  padding: 1em 3em;
  border-radius: 50px;
  cursor: pointer;
  border: none;
}
.styledButton:hover {
  background-color: rgb(163, 163, 253);
}

@media screen and (max-width: 992px) {
  ul {
    width: 90%;
  }
}
</style>
