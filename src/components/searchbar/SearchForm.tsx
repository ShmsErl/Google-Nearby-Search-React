import React, { useState } from 'react';
import "./searchForm.css";
import { useNavigate } from 'react-router';
import GetLocation from '../../models/GetLocation';
import { number, object } from 'yup';
import PostNearbySearch from '../../models/PostNearbySearch';
import GooglePlaceApiService from '../../services/GooglePlaceApiService';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setValue } from '../../store/slice/PlaceSlice';
import { AppState, setLocation } from '../../store/slice/searchSlice';
import { toast, ToastContainer } from 'react-toastify';
import SessionStorage from '../../services/SessionStorage';
import Map from '../../pages/map/Map';





const SearchForm: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [places, setPlaces] = useState<GetLocation[]>([]);
    const [search, setSearch] = useState<PostNearbySearch>({
        latitude: 0,
        longitude: 0,
        radius: 1,
    });






    const searchSchema = object({
        latitude: number()
            .min(-90, 'Latitude must be at least -90')
            .max(90, 'Latitude must be at most 90')
            .required('Latitude is required'),
        longitude: number()
            .min(-180, 'Longitude must be at least -180')
            .max(180, 'Longitude must be at most 180')
            .required('Longitude is required'),
        radius: number()
            .min(1, 'Radius must be at least 1')
            .required('Radius is required'),
    });

    const searchRequest = async (
        values: PostNearbySearch,
    ) => {
        try {
            const response = await GooglePlaceApiService.nearbySearch(values);
            setPlaces(response.data.results)
            setSearch(values);
            dispatch(setValue(response.data.results));
            dispatch(setLocation(values));
            SessionStorage.setItem("search", JSON.stringify(values));
            response.data.results.length > 0 ? toast.success("Convenient location found") : toast.warning("No suitable location found");


        } catch (error: any) {
            console.error(error.response?.data.message);
            alert(error.response?.data.message);
        }
    };

    return (
        <React.Fragment>
            <div className="container-fluid">
                <Formik
                    initialValues={{
                        latitude: 0,
                        longitude: 0,
                        radius: 0
                    }}

                    onSubmit={searchRequest}
                    validationSchema={searchSchema}
                    validateOnBlur={true}
                    validateOnChange={true}
                >
                    <Form>
                        <div className="row p-4">
                            <div className="col-12 text-center mb-4">
                                <h4>Nearby Search</h4>
                            </div>
                        </div>
                        <div className='row justify-content-evenly '>

                            <div className="col-3">
                                <label htmlFor="latitude" className='h6'>Latitude</label>
                                <Field type="text" id="latitude" className="form-control" name="latitude" placeholder="Enter latitude (e.g., 40.98700592287734)" />
                                <ErrorMessage name="latitude" component="div" className="error-message" />
                            </div>
                            <div className="col-3">
                                <label htmlFor="longitude" className='h6'>Longitude</label>
                                <Field type="text" id="longitude" className="form-control" name="longitude" placeholder="Enter longitude (e.g., 29.052219428984184)" />
                                <ErrorMessage name="longitude" component="div" className="error-message" />
                            </div>
                            <div className="col-3">
                                <label htmlFor="radius" className='h6'>Radius</label>
                                <Field type="text" id="radius" className="form-control" name="radius" placeholder="Enter radius in meters (e.g., 200)" />
                                <ErrorMessage name="radius" component="div" className="error-message" />
                            </div>
                        </div>


                        <div className='d-flex justify-content-center mt-5'>
                            <button type="submit" className="btn btn-primary ">Search</button>

                        </div>



                    </Form>
                </Formik>
                <Map values={search} />

            </div>
        </React.Fragment>
    );
};

export default SearchForm;
