import { RadioBox } from "../../../components/fields"

export const PlaceOrder = () =>{
    return(
       
        <div className="info-payment">
             <form>
            <RadioBox name='choice-bank' classe="active">Direct Bank Tranfer</RadioBox>
            <span>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero unde minima illo vitae ad reprehenderit architecto quo, iste beatae praesentium. Ex doloribus pariatur ab nemo harum, porro temporibus aperiam tenetur.</p>
            </span>
            <RadioBox name='choice-bank-more'>Direct Bank Tranfer</RadioBox>
            <RadioBox name='choice-bank-mode' >Cash On Delivery</RadioBox>
            <span>
                <p className="active">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <strong>privacy policy</strong>.</p>
            </span>
            <span className="btn">
                <button>Place order</button>
            </span> 
            </form>
        </div>
        )
            
}