const login=(username, password)=>{
    console.log(`welcome -${username}`)
}
const likes = 123
// commonjs
// module.exports = login

// ESMODULES - exportar una cosa
// export default login

// varias cosas
export{
    login,
    likes
}