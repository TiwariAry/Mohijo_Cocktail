import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from 'gsap'

// Activate the plugins
gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
    return (
        <div className={"flex-center"}>Hello</div>
    )
}

export default App