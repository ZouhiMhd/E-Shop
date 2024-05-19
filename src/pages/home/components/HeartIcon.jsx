import React, { useState, useContext } from 'react';
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FavorisContext } from '../../favoris/components/FavorisContext';


const HeartIcon = ({article}) => {
 
  const [isFavorited, setIsFavorited] = useState(false);
  const { favoris, ajouterDansFavoris, retirerDansFavoris} = useContext(FavorisContext)

  const handleAddTofavoris = () => {

      if (!favoris.includes(article)) {
          ajouterDansFavoris(article)
          console.log('Article ajouté aux favoris', article.nom);
          console.log(favoris)
          
      } else {
          console.log('Article retiré aux favoris', article.nom);
          retirerDansFavoris(article)
          console.log(favoris)
      } 
  };
  const handleClick = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <div onClick={handleClick} style={{ cursor: 'pointer' }}>
      {isFavorited ? (
        <FaHeart  size={20} color="black" onClick={handleAddTofavoris} />
      ) : (
        <FaRegHeart  size={20} color="black" onClick={handleAddTofavoris}/>
      )}
    </div>
  );
};

export default HeartIcon;