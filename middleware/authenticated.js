export default function({ store, route, redirect}){
    const user =  store.state.users.user
    const fav = /\/favorites\/*/g
    const menus = /\/menus\/*/g
    if(!user && route.path.match(fav)){
        alert("Login first to acces this page")
        redirect("/login")
    }else if(!user && route.path.match(menus)){
        alert("Login first to acces this page")
        redirect("/login")
    }
}