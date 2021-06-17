import React, {useEffect, useState} from 'react'
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from "react-router-dom";
import { addProduct } from '../../../actions/store.product.action';
import { Layout } from '../../../components/Layout';
import Input from '../../../components/UI/Input';








const AddProduct = (props) =>{

 
    const [parCategoryId, setParCategoryId] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [productPictures, setProductPictures] = useState([]);

    


    const store = useSelector(state=> state.storeauth.store)
    const category = useSelector(state => state.category);
    const product = useSelector(state => state.product);
    const dispatch = useDispatch();

    if (product.loading) {
      return <Redirect to={`/storeProduct`} />;
     
    }

    
   const storeCategory = store.shopCategory._id;

 
 
    
   

  const handleProductPictures = (e) => {

    setProductPictures([
        ...productPictures,
        e.target.files[0]
    ]);
}




const createProduct = (e)=>{
    e.preventDefault();
       if(
       name ==="" || quantity === "" || price ==="" || 
       description === "" || productPictures.length === 0 || categoryId ==="" ||
       parCategoryId ==="" 
       ){
         return (alert("Fill all the details"))
       }
    

       const from = new FormData();
       from.append('name', name);
       from.append('quantity', quantity);
       from.append('price', price);
       from.append('description', description);
       from.append('category', categoryId);
       from.append('ParCategory',parCategoryId)

       for (let pic of productPictures) {
           from.append('productPictures', pic); 
       }
   
   
       dispatch(addProduct(from))

  

  }



    


    return(

       
        <Layout sidebar>
           
           

     <Row>
         <Col 
          // md={{ span: 3, offset: 1 }}
        md={10}
          >

          <Form 
          onSubmit={createProduct}
          >

         <Row>
             <Col>
             <Input  label="Product Name"
                placeholder="Product Name"
                value = {name}
                onChange = {(e) => setName(e.target.value)}
              type="text" />
               
             </Col>
             <Col>
             <Input  label="Product Price"
                placeholder="Product Price"
                value = {price}
                onChange = {(e) => setPrice(e.target.value)}
              type="text" />
               
             </Col>
            
         </Row>


         {/* //2 */}

         <Row>
             <Col md ={4} >
             <Input  label="Product Quantity"
                placeholder="Product Quantity"
                value = {quantity}
                onChange = {(e) => setQuantity(e.target.value)}
              type="text" />
               
             </Col>
             <Col md ={8} >
             <Input  label="Product Description"
                placeholder="Product Description"
                value = {description}
                onChange = {(e) => setDescription(e.target.value)}
              type="text" />
               
             </Col>
            
         </Row>

         <Row  style={{marginTop:"10px"}}>
             <Col md={4}>
           
             <select  className="form-control" 
             value={parCategoryId}
            onChange={(e) => setParCategoryId(e.target.value)}
           >
                            <option>Product Pre-Category</option>
                 

     {
        category.categories.filter(category => category.parentId === storeCategory )
        .map(filterCategory =>(
            <option key={filterCategory._id} value={filterCategory._id}>{filterCategory.name}</option>
        ))
     }

                         </select>

                         

             </Col>
            

             <Col md={4}>
           
           <select  className="form-control" 
             value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
           >
                            <option>Product category</option>
                   
     {
        category.categories.filter(category => category.parentId === parCategoryId )
        .map(filterCategory =>(
            <option key={filterCategory._id} value={filterCategory._id}>{filterCategory.name}</option>
        ))
     }

                         </select>

                        
           </Col>
            
         </Row>

         {
                    productPictures.length > 0 ?
                        productPictures.map((pic, index) => <div key={index}>{pic.name}</div>) : null
                }

                <input type="file" name="productPicture" onChange={handleProductPictures} />

         <Button variant="primary" type="submit" >
                Submit
              </Button>

              </Form>
            
         </Col>
     </Row>

     {/* </Container> */}
        
        </Layout>
    );
}

export default AddProduct;


