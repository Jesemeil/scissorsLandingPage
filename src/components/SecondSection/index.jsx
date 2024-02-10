import { Card } from "./Card";
import {OutlineButton} from "../Button/OutlinedButton/OutlineButton"
import {FilledButton} from "../Button/FilledButton"
import style from './index.module.css'



export function SecondSection(){

  return(

    <div className={style.secondSection}>
      <div className={style.firstSecondSection}>
        <h4>A <span>price perfect </span>for your needs.</h4>
        <p>
          From catering for your personal, business, event, socials needs, you can be rest assured we have you in mind in our pricing.
        </p>
      </div>

      <div className={style.secondSecondSection}>
        <Card 
          title={"Basic"} 
          charge={"Free"} 
          chargeText={"Free Plan for all users"}
          info={[
            "Unlimited URL shortening", 
            "Basic Link Analytics",
            "Customizable Short Links",
            "Standard Support",
            "Ad-supported"
          ]}  
          />

          <Card 
            title={"Professional"} 
            charge={"$15/month"} 
            chargeText={"Ideal for business creators"}
            info={[
              "Enhanced Link Analytics", 
              "Custom Branded Domains",
              "Advanced Link Customization",
              "Priority Support",
              "Ad-free Experience"
            ]}  
          />

          <Card 
            title={"Teams"} 
            charge={"$25/month"} 
            chargeText={"Share with up to 10 users"}
            info={[
              "Team Collaboration", 
              "User Roles and Permissions",
              "Enhanced Security",
              "API Access",
              "Dedicated Account Manager"
            ]}  
          />

      </div>

      <div>
        <OutlineButton text={"Get Custom Pricing"} borderColor={"#0065FE"}/>
        <FilledButton text={"Select Pricing"}/>
      </div>

    </div>
  )
}