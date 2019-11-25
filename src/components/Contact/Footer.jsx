import React from 'react';
import styled from 'styled-components';
import { Grid, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Footer = () => (
	<Grid.Row className="footer-wrapper">
		<Grid.Column textAlign="right" width="16">
			<LinkWrapper>
				<ExternalLink href="mailto:info@alex-codes.com"><Icon name="mail" /> info@alex-codes.com</ExternalLink>
			</LinkWrapper>
		</Grid.Column>
		<Grid.Column textAlign="right" width="16">
			<LinkWrapper>
				Icons provided by <ExternalLink href="https://icons8.com" target="_blank">Icons8</ExternalLink> and <ExternalLink href="https://worldvectorlogo.com" target="_blank">Worldvectorlogo</ExternalLink>
			</LinkWrapper>
		</Grid.Column>
		<Grid.Column textAlign="right" width="16">
			<LinkWrapper>
				<RouterLink to="/privacypolicy">Privacy policy / Datenschutzerklärung</RouterLink>
			</LinkWrapper>
		</Grid.Column>
	</Grid.Row>
);

export default Footer;

const CustomLink = (link) => styled(link)`
	display: inline-block;
	font-size: 1.1em;
	color: grey;
	margin-top: 1em;

	:hover, :focus, :active {
		color: grey;
		text-decoration: underline;
	}
`;

const RouterLink = CustomLink(Link);
const ExternalLink = CustomLink('a');

const LinkWrapper = styled.span`
	@media only screen and (min-width: 768px) {
		padding-right: 2rem;
	}
`;