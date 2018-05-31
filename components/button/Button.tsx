import * as React from "react";

interface Props {
    /**
     * Give me a pizza!
     */
    pizza: string;

    /**
     * testoo
     */
    test: (value: string) => void;
}

export class Button extends React.Component<Props> {
    public render() {
        return (
            <button>Hello button: {this.props.pizza}</button>
        );
    }
}