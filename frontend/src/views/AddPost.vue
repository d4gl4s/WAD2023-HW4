<template>
  <div class="postform">
    <h3>Add Post</h3>
    <label for="post-body">Body</label> 
     <textarea name="body" rows="4" cols="50" id="body" required v-model="post.body"></textarea>


    <button @click="addPost" class="addPost">Add Post</button>
  </div>
</template>

<script>
export default {
  name: "AddPost",
  data() {
   return {
      post: {
        body: "",
      },
    };
  },
  methods: {
    addPost() {
      console.log(this.post)
      var data = {
        body: this.post.body,
        // date: this.date,
      };
      
      fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    
      })
      .then((response) => {
        console.log(response.data);
        this.$router.push("/");
      })
      .catch((e) => {
        console.log(e);
        console.log("error");
      });
    },
  },
};
</script>

<style scoped>
.postform {
  max-width: 420px;
  margin: 30px auto;
  background: rgb(167, 154, 154);
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}

button {
  background: rgb(8, 110, 110);
  border: 0;
  padding: 10px 20px;
  margin: 20px 20px 20px 20px;
  color: white;
  border-radius: 20px;
  align-items: center;
  text-align: center;
}

h3 {
  text-align: center;
  color: rgb(8, 110, 110);
}

textarea {
    border-radius: 10px;
}
</style>
