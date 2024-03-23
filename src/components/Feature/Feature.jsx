import PropTypes from 'prop-types'; // ES6
import { BiRadioCircleMarked } from "react-icons/bi";


const Feature = ({feature1111}) => {
    return (
        <div>
            <p> <BiRadioCircleMarked className='inline text-white'></BiRadioCircleMarked> {feature1111}</p>
        </div>
    );
};
Feature.propTypes={
    feature1111:PropTypes.string
    
}
export default Feature;