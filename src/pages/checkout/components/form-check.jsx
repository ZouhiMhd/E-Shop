import { FieldText } from "../../../components/fields"  
import { FieldEmail } from "../../../components/fields"
import { FieldPassword } from "../../../components/fields"
import { FieldSubmit } from "../../../components/fields"

export const FormCheckUI = () => {
   

    return ( 
        <div className="form">
            <h1>Billing Details</h1>
            <form action="#" className="identification" > 
                <div className="input-group-1">
                    <FieldText name="nom" >Nom</FieldText>
                    <FieldText name="prenom">Prenom</FieldText>
                </div>
                    <FieldText name="surnom">Surnom</FieldText>
                    <FieldText name="company">Company Name (Optional)</FieldText>
                    <FieldText name="country">Country / Region</FieldText>
                    <FieldText name="street">Street address</FieldText>
                    <FieldText name="city">Town / City</FieldText>
                    <FieldPassword name="code">Zip code</FieldPassword>
                    <FieldText name="phone">Phone</FieldText>
                    <FieldEmail name="email">Email address</FieldEmail>
                    <FieldText name="info"  text="Additionnal information"></FieldText>
                    {/* <FieldSubmit value="Continuer"/> */}
           
            </form> 
        </div>
    )
}