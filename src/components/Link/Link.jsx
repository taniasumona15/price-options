import PropTypes from 'prop-types'; // ES6
const Link = ({route1111}) => {
    return (
        <li className="mr-10 hover:bg-slate-200 rounded p-2"><a href={route1111.path}>{route1111.name}</a> </li>
    );
};

Link.propTypes={
    route1111:PropTypes.object
}
export default Link;