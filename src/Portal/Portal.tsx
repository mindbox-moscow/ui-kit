import * as React from "react";
import { createPortal } from "react-dom";
import { usePortalContainer } from "../HOOKs";

interface IPortalProps {
	id?: string;
	insertPosition?: InsertPosition;
}

const Portal: React.FC<IPortalProps> = props => {
	const { id, insertPosition = "beforeend", children } = props;

	const container = usePortalContainer(id, insertPosition);

	return createPortal(children, container);
};

export { Portal };
