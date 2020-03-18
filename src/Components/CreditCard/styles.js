import styled, { css } from 'styled-components';

export const Container = styled.div`
	height: 250px;
	max-width: 500px;
	background: linear-gradient(90deg, rgba(123, 133, 155, 1) 0%, rgba(211, 218, 230, 1) 94%);
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 20px 30px 30px;
	margin: 10px;
	position: relative;
	overflow-y: hidden;

	&:hover {
		transform: scale(1.02);
	}

	${({ isNew }) =>
		isNew &&
		css`
			justify-content: center;
			align-items: center;

			&:hover {
				border: 3px dotted black;
				cursor: pointer;

				div {
					opacity: 1;
				}
			}
		`}

	${({ isViewMode }) =>
		!isViewMode &&
		css`
			&:hover {
				transform: none;
			}
		`}
`;

export const LogoContainer = styled.div`
	text-align: right;
	padding-bottom: 20px;
`;

export const NumberContainer = styled.div`
	display: flex;
	align-items: flex-start;
	color: black;
`;

export const Details = styled.div`
	display: flex;
	justify-content: space-between;
	color: black;

	span {
		font-size: 24px;
		font-weight: 500;

		text-transform: uppercase;
	}
`;

export const AddNew = styled.div`
	position: relative;
	width: 60px;
	height: 60px;
	opacity: 0.3;

	&:before,
	&:after {
		position: absolute;
		left: 25px;
		content: ' ';
		height: 60px;
		width: 10px;
		background-color: #333;
	}

	&:before {
		transform: rotate(0);
	}
	&:after {
		transform: rotate(90deg);
	}
`;

export const NumberPart = styled.div`
	padding-right: 25px;
	font-size: 34px;
	font-weight: 600;

	&:hover {
		cursor: pointer;
	}
`;
