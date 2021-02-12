import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import TeaProducts from '../TeaProducts';

const Menu = ({ item }) => {
	return (
		<Card className='my-3 p-3'>
			<Link to={`/TeaProducts/${TeaProducts.id}`}>
				<Card.Img src={item.image} rounded/>
			</Link>

			<Card.Body>
				<Link to={`/TeaProducts/${TeaProducts.id}`}>
					<Card.Text as='div'>
						<strong>{item.name}</strong>
					</Card.Text>
				</Link>
				<Card.Text as='h5'>${item.price}</Card.Text>
				<Card.Text as='div'>{item.reviews} reviews</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default Menu;
