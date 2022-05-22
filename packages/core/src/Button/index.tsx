import React from "react";

import * as S from "./styles";

interface Props extends React.ParamHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
}

const Button: React.FC<Props> = ({ children, ...rest }) => {
	return (
		<S.Button {...rest}>
			{children}
		</S.Button>
	);
}

export default Button;