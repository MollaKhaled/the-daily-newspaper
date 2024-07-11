import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import EditorsInsight from '../../pages/News/EditorsInsight/EditorsInsight';
import Editors from '../../pages/Home/Editors/Editors';

const LeftNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:3000/categories')
    .then(res =>res.json())
    .then(data =>setCategories(data))
    .catch(error => console.log(error))
  },[])
  return (
    <div>
      <h2>All Category</h2>
      <div className='ps-4'>
        {
          categories.map(category => <p key={category.id}>
            <Link to={`/category/${category.id}`} className='text-decoration-none text-black'>{category.name}</Link>
          </p>)
        }
      </div>
      <Editors></Editors>
    </div>
  );
};
export default LeftNav;