import React from 'react';
import { Link } from 'react-router-dom'
import Menu from '../components/Menu';
import { Row, Col, Button } from 'react-bootstrap';
import TeaProducts from '../TeaProducts';

const TeaMenuScreen = () => {
	return (
		<>
			<Link to='/'>
				<Button className='mx-4 my-4 py-2' variant="secondary">Go Back</Button>
			</Link>

			<h1>Tea Menu</h1>
			
			<Row>
					{TeaProducts.map((item) => (
						<Col key={item.id}  sm={1} md={3} lg={3}>
							<Menu item={item}/>
						</Col>
					))}
			

			</Row>
		</>
	);
};

export default TeaMenuScreen;
