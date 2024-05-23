import {Photo} from "./components/Photo"
import { InfoUser } from "./components/InfoUser"
import { User } from "./components/user"
import { Activites } from "./components/activites"
import { Politique } from "./components/politique"

const Me = [
    {
    nom:"Username",
    email:"username@gmail.com",
    adresse:"123 Main St, Cityville",
    date:"JJ/MM/AAAA",
    achats:2,
    status:"Ancien",
}
];


export default function CompteUI({user}) {
    return(<div id="conteneur">
        
        <section> 
        <User user={Me}  ></User>
        <div style={
            {display:"flex",
            alignItems: "start",
            justifyContent:"space-around",
            "@media (max-width: 468px)": {
                flexWrap:"wrap",
                flexDirection: "column",
                alignItems: "center", 
              }
            }}>
            <InfoUser user={Me} />
            <Activites user={Me} /> 
        </div>
       
        <Politique/>
        
        </section>
    </div>)
}