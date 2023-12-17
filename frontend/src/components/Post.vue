<template>
  <div class="post">
    <router-link :to="'/apost/' + post.id" class="nav-link">
      <div class="postHead">
        <img src="https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png" alt="Profiilipilt" />
        <strong>{{ formatDate(post.date_created) }}</strong>
      </div>

      <p>{{ post.body }}</p>
      <div class="likeComponents">
        <button @click="() => callParentMethod(post.id)">👍</button>
        <span>{{ post.like_count }} likes</span>
      </div>
    </router-link>
    <!--  <a :href="'/apost:' + post.id">
      <div class="postHead">
        <img src="https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png" alt="Profiilipilt" />
        <strong>{{ formatDate(post.date_created) }}</strong>
      </div>

      <p>{{ post.body }}</p>
      <div class="likeComponents">
        <button @click="() => callParentMethod(post.id)">👍</button>
        <span>{{ post.like_count }} likes</span>
      </div>
    </a> -->
  </div>
</template>

<script>
export default {
  name: "getData",
  props: ["post"],
  methods: {
    callParentMethod(postId) {
      // Emit an event to call the parent method
      this.$emit("callParentMethod", postId)
    },
    formatDate(dateString) {
      const options = { year: "numeric", month: "long", day: "numeric" }
      const formattedDate = new Date(dateString).toLocaleDateString(undefined, options)
      return formattedDate
    },
  },
}
</script>

<style scoped>
.post {
  border-radius: 10px;
  background-color: rgb(238, 237, 243);
  width: 100%;
  margin-bottom: 2em;
}
a {
  width: 100%;
  border-radius: 10px;
  padding: 1em;
  background-color: antiquewhite;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: start;
  text-decoration: none;
}

.postHead {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1em;
}

img {
  width: 100%;
  border-radius: 10px;
}

.postHead > img {
  width: 100%;
  width: 35px;
  height: 35px;
}

.likeComponents {
  margin-top: 2em;
  width: 100%;
  display: flex;
  justify-items: end;
  align-items: center;
}

.likeComponents > button {
  margin-right: 0.5em;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  border: none;
  font-size: 1.5em;
  background-color: transparent;
}
</style>
