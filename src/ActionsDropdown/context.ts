import { createContext, useContext } from "react";

export interface IMethods {
	closeDropdown: () => void;
}

const initialMethods: IMethods = {
	closeDropdown: () => {
		return;
	}
};

const ActionsDropdownContext = createContext<IMethods>(initialMethods);
ActionsDropdownContext.displayName = "ActionsDropdownContext";
const { Provider: MethodsProvider } = ActionsDropdownContext;

export const useActionsDropdownContext = () =>
	useContext(ActionsDropdownContext);

export { MethodsProvider };
