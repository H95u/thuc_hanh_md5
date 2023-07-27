import {useState} from "react";
import {useNavigate} from "react-router-dom";

import FormTour from "./FormTour";
import {Tour} from "./Tour";

export default function Create() {
    const [tour] = useState(new Tour())
    const navigate = useNavigate()

    return (
        <>
            <h1>
                ADD tour
            </h1>
            <FormTour tour={tour} naviage={navigate}/>
        </>
    )
}