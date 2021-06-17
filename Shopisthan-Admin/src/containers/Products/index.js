import React,{useState} from 'react'
import { Layout } from '../../components/Layout'
import { Container, Row, Col, Table } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import './style.css';
import Input from '../../components/UI/Input';


/**
* @author
* @function Products
**/

const Products = (props) => {

    const product = useSelector(state => state.product);
    const [searchTerm,setSearchTerm] = useState("");
    const [categoryType,setCategoryType] = useState("");

     const productCategory  = Array.from(product.products.reduce((map,obj)=> map.set(obj.category._id,obj),new Map()).values());

    const renderProducts = () => {
        return (
            <Table style={{ fontSize: 12, marginTop:"10px" }} responsive="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quanitiy </th>
                        <th>Category</th>
                        <th>Shop Name</th>

                    </tr>
                </thead>
                <tbody>

                    {
                        product.products.length > 0 ?
                            product.products.filter((product)=>{
                        if(searchTerm ==="" || searchTerm ==null ){
                            if(categoryType === "" || categoryType == null){
                                return product       
                            }else if(product.category._id.includes(categoryType)) {
                                    return product
                            }
                           
                        }else if(product.name.toLowerCase().split(" ").join("").includes(searchTerm.toLowerCase().split(" ").join(""))
                        || product.createdBy.shopName.toLowerCase().split(" ").join("").includes(searchTerm.toLowerCase().split(" ").join(""))
                        ){
                            return product
                        } 
                        {/* else if(categoryType !=="" || product.category._id.includes(categoryType)){
                            return product
                            
                        } */}
                    }).map((product,index)=>
                                <tr key={product._id}>
                                    <td>{index + 1}</td>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td>{product.quantity}</td>
                                    <td>{product.category.name}</td>
                                    <td>{product.createdBy.shopName}</td>
                                </tr>
                            ):null
                    }



                </tbody>
            </Table>
        )

    }


    return (
        <Layout sidebar>

            <Container>
                <Row>
                    <Col md={12}>
                        <div style={{ display: 'flex',
                        //  justifyContent: 'space-between' 
                         }}>
                            <h3>Products</h3>
                            <Input 
                                type="text" 
                                placeholder="Search by Product Name, Shop Name"
                                onChange={(e)=>{
                                setSearchTerm(e.target.value)
                                }}
                                style={{width: "370px", marginLeft:"120px",marginTop:"5px"}}
                             />
                               <select  className="form-control" 
                               style={{width:"200px", marginLeft:"20px",marginTop:"5px"}}
                                    value={categoryType}
                                onChange = {(e)=>{ 
                                const selectedProductCategory = e.target.value;
                                setCategoryType(selectedProductCategory);
                                
                                }}
             
                               >
                             <option value="">Category</option>
                                {
                                    productCategory.map(value =>
                                            <option key={value.category._id} value={value.category._id}>{value.category.name}</option>
                                        )
                                    }
                                </select>
                                </div>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        {renderProducts()}
                    </Col>
                </Row>
            </Container>

        </Layout>
    )

}

export default Products