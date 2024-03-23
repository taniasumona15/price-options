import PropTypes from 'prop-types'; // ES6
import Feature from '../Feature/Feature';
const PriceOption = ({option1111}) => {
    const {name,price,features}=option1111;
    return (
        <div className='bg-red-300 px-4 pt-7 pb-8 rounded flex flex-col gap-2'>
            <h2 className='text-center mb-4'>
                <span className='text-7xl'>
                    {price}
                    <span className='text-2xl'>/mon</span>
                </span>
            </h2>
            <h4 className='text-3xl text-center'>
                {name}
            </h4>
           <div className='mt-6 flex-grow'>
           {
                features.map((feature,idx)=> <Feature key={idx} feature1111={feature}></Feature> )
            }
           </div>
           <button className='btn w-full mt-6'>Buy Now</button>
        </div>
    );
};

PriceOption.propTypes={
    option1111:PropTypes.object
    
}

export default PriceOption;