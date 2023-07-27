import {Link, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

export default function Delete() {
    const [tour, setTour] = useState({})
    const navigate = useNavigate()
    const {id} = useParams()
    useEffect(() => {
        axios.get(`http://localhost:8080/api/tours/${id}`).then((res) => {
            setTour(res.data)
        })
    }, [id])

    const deleteTour = (id) => {
        if (window.confirm("Sure?")) {
            axios.delete(`http://localhost:8080/api/tours/${id}`).then((res) => {
                alert("Delete success")
                navigate("/")
            })
        }
    }
    return (
        <>
            <div style={{textAlign: "center"}}>
                <h1>Delete tour</h1>
                <hr/>
                {
                    <div>
                        <div>
                            <div>
                                <h4>Name :{tour.name}</h4>
                                <br/>
                            </div>
                        </div>
                        <p>Price : {tour.price} </p>
                        <p>Description : {tour.description}</p>

                    </div>

                }
                <div className={"row"}>
                    <div className={"col-lg-6"}>
                        <button className={"btn btn-danger"} onClick={() => deleteTour(tour.id)}>Delete</button>
                    </div>

                    <div className={"col-lg-6"}>
                        <Link to={"/"} className={"btn btn-info"}>List</Link>
                    </div>
                </div>
            </div>

        </>
    )
}