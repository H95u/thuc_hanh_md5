import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export default function Home() {
    const [tours, setTours] = useState([]);
    const getTours = () => {
        axios
            .get(`http://localhost:8080/api/tours`)
            .then((response) => {
                setTours(response.data);
            })

    };

    useEffect(() =>
        getTours(), []
    )

    return (
        <div>
            <div className={"container"}>
                <Link to={"/create"} className={"btn btn-primary"}>ADD</Link>
            </div>
            <hr/>
            <table className={"table table-bordered border-primary"} style={{textAlign: "center"}}>
                <thead>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
                <th>Action</th>
                </thead>
                <tbody>
                {tours.map(item =>
                    <tr>

                        <td>{item.id}</td>

                        <td>
                            <Link to={`/view/${item.id}`}>
                                {item.name}
                            </Link>
                        </td>

                        <td>{item.price}</td>

                        <td>
                            <Link to={`/update/${item.id}`} className={"btn btn-warning"}>Edit</Link>
                            <Link to={`/delete/${item.id}`} className={"btn btn-danger"}>Delete</Link>
                        </td>

                    </tr>
                )}
                </tbody>
            </table>
        </div>
    )
}