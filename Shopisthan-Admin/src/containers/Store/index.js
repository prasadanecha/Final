import React, { useState } from 'react'
import { Layout } from '../../components/Layout'
import { Container, Row, Col, Table } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import {Link, NavLink} from 'react-router-dom'
import Input from '../../components/UI/Input';

/**
* @author
* @function Store
**/

const Store = (props) => {

    const store = useSelector(state => state.store);
    const [searchTerm,setSearchTerm] = useState("");
    const [categoryType,setCategoryType] = useState("");
    const [startDate,setStartDate] = useState("");
    const [endDate,setEndDate] = useState("");
    // const storeCategory  =  Array.from(store.stores.reduce((map,obj)=> map.set(obj.shopCategory._id,obj),new Map()).values());
    // const storeTime = Array.from(store.stores.reduce((map,obj)=> map.set(obj.createdAt,obj),new Map()).values());
    // const storedData = store.stores.filter((obj)=>{
    //     return obj.createdAt >= startDate && obj.createdAt <= endDate;
    // })
    
    // console.log("StoredData:",storedData);


    const renderStores = () => {
        return (
            <Table style={{ fontSize: 12 , marginTop:"10px"}} responsive="sm">
                <thead>
                    <tr>
                   
                        <th>#</th>
                        <th>Store Name</th>
                        <th>Store Phno.</th>
                        <th>Store Email</th>
                        <th>Store Add </th>
                        <th>Store Category</th>
                    
                        <th>Created By</th>

                    </tr>
                    
                </thead>
                <tbody>
                 
             

                {
                    store.stores.length > 0  ?
                    store.stores.filter((store)=>{
                        if(searchTerm ==="" || searchTerm == null){
                            if(categoryType === "" || categoryType === null){
                                return store
                            }else if(store.shopCategory._id.includes(categoryType)){
                                 return store
                            }
                            {/* else if(store.createdAt >= startDate && store.createdAt <= endDate){
                                 return store
                            } */}
                            
                            
                        } 
                        
                        else if(store.shopEmail.toLowerCase().split(" ").join("").includes(searchTerm.toLowerCase().split(" ").join(""))
                        || store.shopName.toLowerCase().split(" ").join("").includes(searchTerm.toLowerCase().split(" ").join(""))
                        )
                        {
                            return store
                        }
                        
                        {/* else if(store.shopCategory._id.includes(categoryType)){
                                  return store
                        } */}
                    }).map((store,index)=>
                       
                       <tr key={store._id}>

                       
                           <td>{index + 1}</td>
                          
                           <td> {store.shopName}</td>
                           <td>{store.shopPhoneNo}</td>
                           <td>{store.shopEmail}</td>
                           <td>{store.shopAddress}</td>
                     
                           <td>{store.shopCategory.name}</td>
                           <td>{store.createdBy.username}</td>
                           <td> <Link to={`/${store._id}/store`}style={{ textDecoration: 'none' }}>View</Link></td>
           
                           
                       </tr>
                      
                   ):null
                

               }

               {/* {
                   storedData.map((store,index)=>
                    <tr key={store._id}>

                                        
                    <td>{index + 1}</td>

                    <td> {store.shopName}</td>
                    <td>{store.shopPhoneNo}</td>
                    <td>{store.shopEmail}</td>
                    <td>{store.shopAddress}</td>

                    <td>{store.shopCategory.name}</td>
                    <td>{store.createdBy.username}</td>
                    <td> <Link to={`/${store._id}/store`}style={{ textDecoration: 'none' }}>View</Link></td>


                    </tr>
                   )
               } */}
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
                        justifyContent: 'space-between' 
                         
                        }}>
                            <h3>Store</h3>
                            <Input type="text" 
                                placeholder="Search by Store Name, Store Email"
                                onChange={(e)=>{
                                 setSearchTerm(e.target.value)
                                }}
                                style={{width: "370px",marginTop:"5px"}}
                            />
                             <select  className="form-control" 
                               style={{width:"200px",marginTop:"5px"}}
                                    value={categoryType}
                                onChange = {(e)=>{ 
                                const selectedStoreCategory = e.target.value;
                                setCategoryType(selectedStoreCategory);
                                
                                }}
             
                               >
                             <option value="">Category (All)</option>
                                {/* {
                                   storeCategory.map(value =>
                                            <option key={value.shopCategory._id} value={value.shopCategory._id}>{value.shopCategory.name}</option>
                                        )
                              
                                    } */}
                                </select>
                                {/* <select  className="form-control" 
                               style={{width:"200px",marginTop:"5px"}}
                                    value={startDate}
                                onChange = {(e)=>{ 
                                const selectedStoreDate = e.target.value;
                                setStartDate(selectedStoreDate);
                                
                                }}
             
                               > */}
                             {/* <option value="">StartDate</option>
                                {
                                   storeTime.map(value =>
                                            <option key={value.createdAt} value={value.createdAt}>{value.createdAt.split("T")[0]}</option>
                                        )
                              
                                    }
                                </select>
                                <select  className="form-control" 
                               style={{width:"200px",marginTop:"5px"}}
                                    value={endDate}
                                onChange = {(e)=>{ 
                                const selectedStoreEndDate = e.target.value;
                                setEndDate(selectedStoreEndDate);
                                
                                }}
             
                               >
                             <option value="">EndDate</option>
                             {
                                startDate ? 
                                    storeTime.filter((value)=>{
                                       if(startDate<=value.createdAt){
                                           return value
                                       }else return null;

                                   }).map(value =>
                                            <option key={value.createdAt} value={value.createdAt}>{value.createdAt.split("T")[0] }</option>
                                        )
                              
                                     : null
                             }
                                
                                </select> */}
                            <NavLink to={`/addStore`} ><button>Add Store </button></NavLink>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        {renderStores()}
                    </Col>
                </Row>
            </Container>
        </Layout>

    )

}

export default Store