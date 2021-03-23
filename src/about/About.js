import { useParams } from "react-router"

const About = () => {
    let id = useParams();
    return (
        <div id="about">
            <h1>About me! id:{id}</h1>
        </div>
    )
}

export const About1 = () => {
    let body =useParams();
    return (
        <div id="about1">
            <h1>About me1! body:{body}</h1>
        </div>
    )
}
export default About;