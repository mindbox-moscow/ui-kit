import * as React from "react";

interface Props {
    color?: string
}

export default class Trashcan extends React.Component<Props> {
    public render() {
        return (
            <svg width="18px" height="20px" viewBox="0 0 18 20" version="1.1">
                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
                    <g id="12-—-Set-actions" transform="translate(-1112.000000, -1238.000000)" stroke="#A12E1E" strokeWidth="2">
                        <g id="Group-5-Copy-7" transform="translate(1113.000000, 1239.000000)">
                            <polyline id="Shape" points="0 3.55555556 1.77777778 3.55555556 16 3.55555556"></polyline>
                            <path d="M14.2222222,3.55555556 L14.2222222,16 C14.2222222,16.9818396 13.426284,17.7777778 12.4444444,17.7777778 L3.55555556,17.7777778 C2.573716,17.7777778 1.77777778,16.9818396 1.77777778,16 L1.77777778,3.55555556 M4.44444444,3.55555556 L4.44444444,1.77777778 C4.44444444,0.795938223 5.24038267,0 6.22222222,0 L9.77777778,0 C10.7596173,0 11.5555556,0.795938223 11.5555556,1.77777778 L11.5555556,3.55555556" id="Shape"></path>
                            <path d="M6.22222222,8 L6.22222222,13.3333333" id="Shape"></path>
                            <path d="M9.77777778,8 L9.77777778,13.3333333" id="Shape"></path>
                        </g>
                    </g>
                </g>
            </svg>
        );
    }
}
