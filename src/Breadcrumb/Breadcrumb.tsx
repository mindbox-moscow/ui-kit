import * as React from "react";
import { BreadcrumbList } from "./components/BreadcrumbList/BreadcrumbList";
import { BreadcrumbItem } from "./components/BreadcrumbItem/BreadcrumbItem";

interface Props {
    text: string;
}

export class Breadcrumb extends React.Component<Props> {
    public render() {
        const { text } = this.props;
        return (
            <BreadcrumbList>
                <BreadcrumbItem text={text}/>
            </BreadcrumbList>
        );
    }
}
