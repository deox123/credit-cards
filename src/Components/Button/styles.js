import styled, { css } from 'styled-components';
import colors from '../../styles/colors';

const Container = styled.div`
	height: 40px;
	background-color: ${colors.blueLight};
	border-radius: 3px;
	color: white;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 20px;

	&:hover {
		cursor: pointer;
		background-color: ${colors.blueDarker};
	}

	${({ disabled }) =>
		disabled &&
		css`
			cursor: not-allowed;
			opacity: 0.6;
			&:hover {
				cursor: not-allowed;
				background-color: ${colors.blueLight};
			}
		`}
`;

export default Container;
