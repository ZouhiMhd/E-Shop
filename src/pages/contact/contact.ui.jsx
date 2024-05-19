import { Decor } from "../../components/decor.jsx"
import { MoreInfo } from "../../components/more-infos.jsx"
import { InfoUtil } from "./components/info-util.jsx"
import { FormContact } from "./components/form-contact.jsx"
import { Desc } from "./components/desc.jsx"

export default function ContactUI() {
    return<> 
        <Decor title="Contact" imgfond="../../../public/vendors/images/image1.jpg" imglogo="../../../public/vendors/images/sauver.png"/>
        <Desc/>
        <div className="formulaire">
            <div>
                <InfoUtil impath="../../../../public/vendors/images/localization.png" title="Address" text1="3896 25th SE Avenue, Yaounde Cameroon"/>
                <InfoUtil impath="../../../../public/vendors/images/phone.jpg" title="Phone" text1="Mobile:+(237)654667891" text2="Mobile:+(237)254678196"/>
                <InfoUtil impath="../../../../public/vendors/images/horloge.jpeg" title="Working Time" text1="Monday-Friday;9:00-22:00" text2="Saturday-Sunday;9:00-21:00"/>
            </div>
            <FormContact/>
        </div>
        <MoreInfo/>
    </>
}

	