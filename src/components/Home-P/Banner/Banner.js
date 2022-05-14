import React from 'react';
import chair from '../../../assets/images/chair.png'

const Banner = () => {
     return (
          <div>
               <div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src={chair} class="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 class="text-5xl font-bold">Your new smile starts here!</h1>
      <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button class="btn uppercase text-white font-bold  bg-gradient-to-r from-purple-500 to-pink-500">Get Started</button>
    </div>
  </div>
</div>
          </div>
     );
};

export default Banner;