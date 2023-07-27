import {Link, useNavigate} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import axios from "axios";

export default function FormTour(props) {
    const navigate = useNavigate();
    const handleSubmit = (values) => {
        axios.post('http://localhost:8080/api/tours', values).then(() => {
            alert("Save success!!")
            navigate('/')
        })
    }

    return (
        <div>
            <Formik
                initialValues={props.tour}
                onSubmit={handleSubmit}
                enableReinitialize={true}
            >
                <Form>
                    <div className={'row'}>
                        <div className={'col-md-6'}>
                            <div className="mb-3">
                                <label htmlFor={'name'} className={'form-label'}>Name</label>
                                <Field name={'name'} type={'text'} className={'form-control'} id={'name'}
                                       placeholder={'Enter name'}/>

                            </div>
                            <div className="mb-3">
                                <label htmlFor={'price'} className={'form-label'}>Price</label>
                                <Field name={'price'} type={'number'} className={'form-control'} id={'price'}
                                       placeholder={'Enter price'}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor={'description'} className={'form-label'}>Description</label>
                                <Field name={'description'} as={"textarea"} className={'form-control'} id={'description'}
                                       placeholder={'Enter description'} />
                            </div>

                            <div className={"row"} style={{padding:10}}>
                                <div className={"col-lg-2"}>
                                    <button type={"submit"} className={"btn btn-primary"}>Save</button>
                                </div>

                                <div className={"col-lg-10"}>
                                    <Link to={"/"}  className={"btn btn-info"}>List</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Form>
            </Formik>
        </div>
    )

}