import { FieldText } from "../../../components/fields"  
import { FieldEmail } from "../../../components/fields"
import { MessageBox } from "../../../components/fields"
// import { FieldSubmit } from "../../../components/fields"

export const FormContact = () => {
   

    return (<>
        <div className="infos">
            <FieldText name="name"  text="Abc">Your name</FieldText>
            <FieldEmail name="email" text="Abc@def.com">Email Address</FieldEmail>
            <FieldText name="subject" text="This an optional">Subject</FieldText>
            <MessageBox name="input" text="Hi! I'd like to ask about...">Message</MessageBox>
			<button className="enregistrer">Submit</button>
		</div>
    </>)
}