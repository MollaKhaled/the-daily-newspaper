import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
  return (
    <div>
      <h2>Terms and Conditions</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, non sed eos consequuntur aut pariatur quisquam quis dicta alias cumque? Consectetur molestiae voluptatem amet doloremque expedita aut maxime, praesentium commodi provident. Unde neque blanditiis voluptate quaerat aliquam placeat maxime! Iusto architecto ratione qui quibusdam hic!</p>
      <p>Go back to <Link to='/register'>Register</Link></p>
    </div>
  );
};

export default Terms;