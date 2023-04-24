import React from 'react';
import { Link } from 'react-router-dom';
import './product.css'
import Chart from '../../components/chart/Chart'
import { productData } from '../../dummyData';
import { Publish } from '@mui/icons-material';

const Product = () => {
    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
                <Link to="/newProduct">
                    <button className="productAddButton">Create Product</button>
                </Link>
            </div>
            <div className="productTop">
                <div className="productTopLeft">
                    <Chart data={productData} dataKey="Sales" title="Sales Performance"/>
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src="data:image/jpeg;base64,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" alt="" className="productInfoImg" />
                        <span className="productName">Apple Airpods</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">id:</span>
                            <span className="productInfoValue">123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">sales:</span>
                            <span className="productInfoValue">5123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">active:</span>
                            <span className="productInfoValue">yes</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">In stock:</span>
                            <span className="productInfoValue">no</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form className="productForm">
                    <div className="productFormLeft">
                        <label>Product Name</label>
                        <input type="text" placeholder='Apple Airpods' />
                        <label>In Stock</label>
                        <select name="instock" id="instock">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        <label>Active</label>
                        <select name="active" id="active">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src="data:image/jpeg;base64,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" alt="" className="productImg" />
                            <label htmlFor="file">
                                <Publish/>
                                <input type="file" id='file' className='inputNone'/>
                            </label>
                        </div>
                        <button className="productButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Product;
