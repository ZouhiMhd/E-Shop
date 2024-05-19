import { Decor } from "../../components/decor"
import { MoreInfo } from "../../components/more-infos"
import { FieldText } from "../../components/fields"
import { FieldPassword } from "../../components/fields"

export default function LoginUI() {
    return<>
        <Decor title="Login" imgfond="../../../public/vendors/images/image1.jpg" imglogo="../../../public/vendors/images/sauver.png"/>
        <div className="register">
            <form>
                <h1>Login</h1>
                <FieldText name= "name">Username or email address</FieldText>
                <FieldPassword name= "password">Password</FieldPassword>
                <div className="checkbox1"><input type="checkbox" className="checkbox"/><p>Remember me</p></div>
                <p><button class="enregistrer"> Log In </button> Lost your password?</p>
            </form>
        </div>
        <MoreInfo/>
    </>
}