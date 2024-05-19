import { Decor } from "../../components/decor.jsx"
import { MoreInfo } from "../../components/more-infos.jsx"
import { FormRegister } from "./components/form-register.jsx"

export default function RegisterUI() {

    return<> 
    <Decor title="Register" imgfond="../../../public/vendors/images/image1.jpg" imglogo="../../../public/vendors/images/sauver.png"/>
    <FormRegister/>
    <MoreInfo/>
    </>
}