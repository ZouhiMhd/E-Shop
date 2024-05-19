import { FieldSubmit, RadioBox } from "../../../components/fields"

export const PlaceOrder = () =>{
    return(
       
        <div className="info-payment">
            <span>
                <p className="active">Payer par :</p>
            </span>
             <form>
            <RadioBox name='choice-bank-more'>Carte Visa</RadioBox>
            <RadioBox name='choice-bank-more'>Orange Money</RadioBox>
            <RadioBox name='choice-bank-mode' >Mobile Money</RadioBox>
            <span>
                <p className="active">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <strong>privacy policy</strong>.</p>
            </span>
            <span className="btn">
                <FieldSubmit value="valider"/>
            </span> 
            </form>
        </div>
        )
            
}