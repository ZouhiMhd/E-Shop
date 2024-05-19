import Cart1 from "./components/Cart1";
import {Decor} from "../../components/decor";
import {MoreInfo} from "../../components/more-infos"

export default function CartUI() {
    return(
    <> 
        <Decor title="Cart" imgfond="../../../public/vendors/images/image1.jpg" imglogo="../../../public/vendors/images/sauver.png"/>
        <Cart1 /> 
        <MoreInfo /> 
    </>)
}