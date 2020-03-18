import styled from 'styled-components';
import colors from '../../../styles/colors';

export const Label = styled.label`
	display: flex;
	flex-direction: column;
	margin-bottom: 30px;
	position: relative;
`;

export const LabelContent = styled.div`
	padding: 10px 0;
`;

export const Input = styled.input`
	border-radius: 3px;
	border: 1px solid ${colors.gray};
	padding-left: 10px;
	height: 40px;

	&:hover {
		cursor: pointer;
	}

	&:focus {
		border-radius: 3px;
		outline: none;
		border: 1px solid ${colors.blueInput};
	}
`;

export const ErrorMessage = styled.div`
	color: ${colors.red};
	font-size: 14px;
	position: absolute;
	bottom: -20px;
	left: 0;
`;
