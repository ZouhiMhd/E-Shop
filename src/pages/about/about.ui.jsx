import Content4 from "../home/components/Content4"

export default function AboutUI() {
    return(
    <div id = "conteneur"> 
    <div className="titre-about">
     <h1>Bienvenue sur E-Shop</h1>
    </div>
    <div className = "text-about">
    <p> Notre site de e-commerce vous propose une expérience de shopping pratique et agréable. Que vous cherchiez des vêtements, des produits électroniques, des articles pour la maison ou des cadeaux, nous avons ce qu’il vous faut. </p>
    <p>Nos avantages :</p>
    <ul>
        <li>Large sélection de produits : Parcourez notre catalogue pour trouver des articles de qualité dans différentes catégories. Des vêtements tendance aux gadgets high-tech, nous avons tout ce dont vous avez besoin.</li>  
        <li>Facilité de navigation : Notre interface conviviale vous permet de trouver rapidement ce que vous cherchez. Utilisez notre fonction de recherche pour trouver des produits spécifiques ou explorez nos différentes sections.</li>  
        <li>Sécurité des paiements : Nous utilisons des méthodes de paiement sécurisées pour garantir la confidentialité de vos informations. Payez en toute tranquillité avec votre carte de crédit, votre carte de débit Interac ou PayPal.</li>
        <li>Livraison rapide : Nous expédions vos commandes rapidement pour que vous puissiez profiter de vos achats sans attendre.</li>
        <li>Service clientèle réactif : Notre équipe est là pour répondre à vos questions et résoudre tout problème éventuel. Contactez-nous par téléphone, e-mail ou chat en direct.</li>
    </ul> 
    <h2>Explorez notre boutique en ligne dès maintenant et découvrez une nouvelle façon de faire du shopping !"</h2>
    </div>
    <Content4/>
    </div>)
}