import React from "react";
import Layout from "../../components/Layout";
import { getParams } from "../../utils";
import ProductTypeList from './ProductTypeList';
import ProductTypePage from './ProductTypePage';
import ProductTypeStore from "./ProductTypeStore";

/**
 * @author
 * @function ProductPage
 **/

const ProductPage = (props) => {
    const renderProduct = () => {
        const params = getParams(props.location.search);
        let content = null;
        switch(params.type){
            case 'store': 
                content = <ProductTypeStore {...props} />
                break;
            case 'page':
                content = <ProductTypePage {...props} />
                break;
            default:
                content = <ProductTypeList {...props} />
        }
        return content
    };
    return (
        <Layout>
            {renderProduct()}
        </Layout>
    );
};

export default ProductPage;
