<template>
  <header>
    <nav>
      <ul>
        <li id="home"><router-link to="/" class="nav-link">Home</router-link></li>
        <li id="addPost"><router-link to="/contact" class="nav-link">Contact</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
#home,
#addPost {
  font-size: 20px;
}

.nav-link {
  display: block;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.nav-link:hover {
  background-color: #71b5ff;
}

.profile-picture {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
}

.profile-picture img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #dddddd;
}

li {
  float: left;
}
</style>
