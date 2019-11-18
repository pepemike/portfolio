import React from 'react';
import { Grid, Message, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Error404 = () => (
	<Wrapper container centered verticalAlign="middle">
		<Grid.Row>
			<Message size="massive" floating color="violet">
				<Message.Header>404 Error - Page not found</Message.Header>
				The page you were looking for doesn't exist. Are you sure you typed the address correctly?
				<div style={{marginTop: '2em'}}>
					<Button  basic color="violet" size="huge">
						<Link to="/" className="back">Return to homepage </Link>
					</Button>
				</div>
			</Message>
		</Grid.Row>
	</Wrapper>
);

export default Error404;

const Wrapper = styled(Grid)`
	min-height: 100vh;
	align-content: center;
	padding: 0 1em;	
`;