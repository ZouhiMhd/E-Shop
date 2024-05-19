import {Photo} from "./components/Photo"
import shirt from '../../../public/img/Mixte/man.png'
import { InfoUser } from "./components/InfoUser"

export default function CompteUI() {
    return(<div id="conteneur">
        <Photo img = {shirt}/>
        <InfoUser/>
    </div>)
}