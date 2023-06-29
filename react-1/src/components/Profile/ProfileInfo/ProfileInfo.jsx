import React from "react"
import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
   if (!props.profile) {
      return <div>lol</div>
   }
   return(
      <div>
         
         <div>
            <img src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg' />
         </div>
         <div className={s.descriprion}>
           <img src={props.profile.photos.large}/>
            avatar + description
         </div>
      
      </div>
   )
}
export default ProfileInfo;