import styled from 'styled-components';

export const Image = styled.div`
	height: ${({ isMaster }) => (isMaster ? '40px' : '30px')};
	background-image: url(${({ src }) => src});
	background-size: contain;
	background-repeat: no-repeat;
	background-position: 100% 100%;
`;

export const Placeholder = styled.div`
	height: 100px;
	width: 100px;
`;
