import { useEffect, useState } from "react";


import { useNavigate } from "react-router";
import * as service from "../../service/apiService";

// import {getAll} from "../service/ProductService";
import { Field, Form, Formik } from "formik";
import { FormattedNumber } from "react-intl";
import { Link } from "react-router-dom";
// import {Select} from '@chakra-ui/react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui';

import { Box } from '@chakra-ui/react';



export function ProductList() {

    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [productTypes, setTypeProducts] = useState([]);
    const [page, setPage] = useState(0);

    const [sortBy, setSortBy] = useState('highToLow');
    const [price, setPrice] = useState('');
    const [typeProduct, setTypeProduct] = useState('');
    const [nameProduct, setNameProduct] = useState('');

    const getAllProducts = async () => {
        const res = await service.getAll();
        setProducts(res.content)
    }

    useEffect(() => {
        const getType = async () => {
            const res = await service.getAllType();
            setTypeProducts(res)
        }

        getType();
    }, [])


    useEffect(() => {
        getAllProducts();

    }, [page])

    if (!products) {
        return null;
    }
    if (!productTypes) {
        return null;
    }

    return (
        <>

            <div className={'toggle-header'}>


                <div className={'menu'}>

                    <div className="dropdown">
                        <button
                            style={{ border: "none" }} className=" dropdown-toggle"
                            type="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Type Product
                        </button>
                        <ul className="dropdown-menu dropdown-menu-light">
                            <li><span className={`dropdown-item ${typeProduct === '' ? 'active' : ''}`} onClick={() => setTypeProduct('')} >All</span></li>
                            {
                                productTypes && productTypes.map((product: any) => (

                                    <li key={product.id}>
                                        <span onClick={() => setTypeProduct(product.name)}
                                            className={`dropdown-item ${typeProduct === product.name ? 'active' : ''}`}>
                                            {product.name}
                                        </span>
                                    </li>
                                ))

                            }


                        </ul>
                    </div>

                    <div className="dropdown">
                        <button
                            style={{ border: "none" }}
                            className=" dropdown-toggle"
                            type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Price
                        </button>
                        <ul className="dropdown-menu dropdown-menu-light">
                            <li>
                                <span onClick={() => setPrice('0-500')} className="dropdown-item active">
                                    0$ - 500$
                                </span>
                            </li>
                            <li>

                            </li>
                            <li>
                                <a onClick={() => setPrice('500-1000')} className="dropdown-item">
                                    500$-1000$
                                </a>
                            </li>
                            <li>

                            </li>
                            <li>
                                <a onClick={() => setPrice('1001')} className="dropdown-item">
                                    1000$
                                </a>
                            </li>


                        </ul>
                    </div>
                </div>


                <div className="dropdown">
                    <button
                        style={{ border: "none" }}
                        className=" dropdown-toggle"
                        type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Sort
                    </button>
                    <ul className="dropdown-menu dropdown-menu-light">
                        <li>
                            <span onClick={() => setSortBy('lowToHigh')} className="dropdown-item active">
                                Low To High
                            </span>
                        </li>
                        <li>

                        </li>
                        <li>
                            <span onClick={() => setSortBy('highToLow')} className="dropdown-item">
                                High To Low
                            </span>
                        </li>

                    </ul>
                </div>
            </div>


            <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem>
                    <h2>
                        <AccordionButton style={{ padding: "7px 36px" }}>
                            <Box as="span" flex='1' textAlign='left'>
                                Search
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>

                        <Formik initialValues={{
                            nameProduct: ""
                        }}
                            onSubmit={(values) => {

                            }}>

                            <Form className="d-flex"
                                style={{ marginTop: "20px", marginBottom: "20px", justifyContent: "flex-end" }}>
                                <Field
                                    style={{ backgroundColor: "white", width: " 30%", marginRight: "20px" }}
                                    className="form-control" type="text" placeholder="Search by name product"
                                    name='nameProduct' />

                                <button type="submit">
                                    <i className="fa-sharp fa-solid fa-magnifying-glass" />
                                </button>
                            </Form>

                        </Formik>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>


            <div className="carousel-containers">


                {products?.length === 0 && nameProduct !== "" ? (
                    <div>
                        <h4 className={"text-danger"}>
                            No products found
                        </h4>
                    </div>
                ) :
                    (

                        products && products.map((p: any, index) => (

                            <div key={p.id} className="card">

                                <div className="card-img-top">
                                    <Link to={`/detail/${p.id}/`}>
                                        <img src={p.images} />

                                    </Link>
                                </div>
                                <div className="card-body">
                                    <p className="card-text">
                                        {p.name}
                                    </p>
                                    <p>$
                                        <FormattedNumber
                                            value={p?.price}
                                            currency="USD"
                                            minimumFractionDigits={0}>
                                        </FormattedNumber>

                                    </p>
                                </div>
                            </div>
                        ))
                    )}
            </div>


            <div style={{ textAlign: "center" }}>

                <button onClick={() => setPage(prevState => prevState + 1)}
                    style={{
                        backgroundColor: "whiteSmoke",
                        fontSize: "20px",
                        border: "1px solid",
                        width: "95%",
                        margin: "20px 0px"
                    }}>Load more
                </button>
            </div>


        </>

    )
}