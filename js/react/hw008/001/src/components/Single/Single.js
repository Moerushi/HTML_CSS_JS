import Product from './Elements/Product';
import Collection from './Elements/Collection';
import YouMayLike from './Elements/YouMayLike';
import Arrivals from '../Arrivals';

const Single = () => {
	return (
		<div>
			<Arrivals />
			<Product />
			<Collection />
			<YouMayLike />
		</div>
		
	)
}
 export default Single;