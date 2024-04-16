import useOnlineStatus from "../utils/useOnlineStatus"
import Carousel from "./Carousel"
import Footer from "./Footer"
import Restaurent from "./Restaurent"

const Main = () =>{

    // const onlineStatus = useOnlineStatus();
    // if (onlineStatus === false){
    //    return <h1>Polaaaaa Internet on ak!!!!!!</h1>
    // }
    return(
        <>
        <main>
        <Carousel/>
        <Restaurent/>
        </main>
        <footer>
            <Footer/>
        </footer>
        </>
    )
}

export default Main