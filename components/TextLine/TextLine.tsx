import * as React from "react";
import './TextLine.scss';

interface Props {
    text: string;
    isTitle?: boolean;
    isEditing: boolean;
}

export class TextLine extends React.Component<Props> {
    public render() {
        const {isTitle, isEditing, text} = this.props
        let Tag = isTitle ? 'h2' : 'p';
        return (
            <div className="textLine">
                {isEditing 
                    ? <div className="textLine__input-box">
                        <input className="textLine__input" type="text" defaultValue={text} />
                        <span className="textLine__signature">Сохранить: нажмите Enter</span>
                    </div>
                    : <Tag className={(Tag === 'h2' ? 'textLine__title' : 'textLine__description')}>{text}</Tag>
                }
                
            </div>
        );
    }
}