

export const openPopup = ()=>
{
    let popup =document.getElementById("popup");
    let body =document.getElementById("conteneur")
    body.classList.add("shadow");
    popup.classList.add("open-popup");
    document.body.style.overflow = 'hidden';
}
export const closePopup = () =>
{
    let popup =document.getElementById("popup");
    let body =document.getElementById("conteneur")
    popup.classList.remove("open-popup");
    body.classList.remove("shadow");
    document.body.style.overflow = 'auto';
}