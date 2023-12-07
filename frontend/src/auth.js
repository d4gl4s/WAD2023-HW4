export default {
  user: { isAuthenticated: false },
  authenticated: async function () {
    await fetch("http://localhost:3000/auth/authenticate", {
      credentials: "include", // Specify this if you need cookies
    })
      .then((response) => response.json())
      .then((data) => {
        this.user.isAuthenticated = data.authenticated
      })
      .catch((e) => {
        console.log(e)
        console.log("error logout")
      })
    return this.user.isAuthenticated
  },
}
