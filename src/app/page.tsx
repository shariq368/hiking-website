import Adventuresec from "./components/Adventuresec"
import Checkout from "./components/Checkout"
import Explore from "./components/Explore"
import Form from "./components/Form"
import Hero from "./components/Hero"
import Wild from "./components/Wild"
import Wonder from "./components/Wonder"


const page = () => {
  return (
    <div>
      <Hero/>
      <Adventuresec/>
      <Explore/>
      <Wild/>
      <Wonder/>
      <Checkout/>
      <Form/>

    </div>
  )
}

export default page