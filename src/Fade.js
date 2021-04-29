import { useEffect, useRef, useState } from "react";

function Fade(props) {
    const [showChildren, setshowChildren] = useState(props.visible) //state pour conditionner l'affichage de l'enfant dans le DOM
    const childRef = useRef(props.children) // permet de récupérer l'élément DOM avec childRef.current

// POUR RECUPERER LE TEMPS DE L'ANIMATION mais ne marche pas => eventListener transitionend appellé pleins de fois
//     let startTime = new Date();
//     console.log(childRef)
//     childRef.current.addEventListener('transitionend', (e) => {
//         let endTime = new Date();
//         let diffTime = endTime - startTime
//         console.log('Animation ended');
//         console.log(diffTime)
//         console.log(e.propertyName)
//   });

    //Ecouter le changement d'état de visible
    useEffect(() => {
        if (props.visible) {
            setshowChildren(true)
        } else {
            //attendre la fin de l'animation pour retirer l'élément du DOM
           const timer = setTimeout(() => {
                setshowChildren(false)
            }, 300)
            return () => {
                clearTimeout(timer)
            }
        }
    }, [props.visible])

    //variable pour déclencher le fade in/out (élément parent)
    let className = 'fade'
    if(!props.visible) {
        className += ' out'
    }
    return <div ref={childRef} className={className}>{showChildren && props.children}</div>
}

export default Fade;