export default function({ store, route, redirect}){
    const user =  store.state.users.user
    const blocked = /\/favorites\/*/g
    if(!user && route.path.match(blocked)){
        redirect("/login")
    }
}