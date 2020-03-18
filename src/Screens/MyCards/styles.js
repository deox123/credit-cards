import styled from 'styled-components';

import CreditCard from '../../Components/CreditCard';
import { NumberPart, Details } from '../../Components/CreditCard/styles';

export const CardList = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;

export const StyledCard = styled(CreditCard)`
	width: 400px;
	flex: 1 0 auto;
	zoom: 0.7;

	${NumberPart} {
		font-size: 26px;
	}

	${Details} > span {
		font-size: 20px;
	}
`;
