import { Card } from './Card'
import { ElementCompte} from './eltCompte'
import { FaHeart } from 'react-icons/fa'
import { FaShop } from 'react-icons/fa6'
import { FaMessage} from 'react-icons/fa6'
import { FaIdCard } from 'react-icons/fa'
import { FaBook } from 'react-icons/fa'

export const Activites = ({user}) => {
  return (
    <div style = {
      {
        alignItems:"start",
        padding:"50px 20px",
        width : "80%",
        display : "inline-block",
        marginBottom : "20px"
      }
    }>
      <Card>
      {user.map((user) =>(
          <>
              <h3>Activités</h3>
              <ElementCompte icon={FaShop} titre="Vos Achats"  lien="/cart">{user.achats}</ElementCompte>
              <ElementCompte icon={FaHeart} titre="Vos Favoris"  lien="/favoris"></ElementCompte>
              <ElementCompte icon={FaBook}titre="Votre Carte " lien="/cart"></ElementCompte>
              <ElementCompte icon={FaMessage} titre="Donnez votre avis" lien="/contact"></ElementCompte>
              <ElementCompte icon={FaIdCard}titre="Modes de payement"  lien="/checkout"></ElementCompte>
          </>
        ))}
      </Card>
   
   </div>
  )
}

