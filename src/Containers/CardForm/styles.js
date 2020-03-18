import styled from 'styled-components';
import Input from '../../Components/FormFields/InputDefault';
import colors from '../../styles/colors';

export const Container = styled.div`
	max-width: 500px;
	margin: 0 auto;
`;

export const CardNumberContainer = styled.div`
	display: flex;
	align-items: flex-end;
	margin-bottom: 30px;

	input {
		width: 100%;
		flex: 1;
		box-sizing: border-box;
		height: 40px;
	}
	label {
		padding-left: 20px;
		margin-bottom: 0;
		height: 40px;

		&:first-child {
			padding-left: 0px;
		}
	}
`;

export const ErrorMessage = styled.div`
	color: ${colors.red};
	margin-top: -20px;
	font-size: 14px;
	/*TODO Should improve this, message is jumping all around */
`;

export const Label = styled.div`
	padding-bottom: 10px;
`;

export const Box = styled.input`
	height: 100px;
	background-color: red;
	flex: 1;
	border: 1px solid blue;
`;

export const CardNumberInput = styled(Input)`
	width: 50px;
`;
