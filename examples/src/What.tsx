import * as React from "react";
import * as ReactDOM from "react-dom";

import { SectionWrapper } from "@mindbox/ui-kit/components/SectionWrapper";
import { Button } from "@mindbox/ui-kit/components/Button";
import { Page } from "@mindbox/ui-kit/components/Page";
import { Row } from "@mindbox/ui-kit/components/Row";
import { DateField } from "@mindbox/ui-kit/components/DateField";
import { Select } from "@mindbox/ui-kit/components/Select";
import { Text } from "@mindbox/ui-kit/components/Text";

const entryElement = document.createElement("div");
document.body.appendChild(entryElement);

class What extends React.Component<{}> {
    public render() {
        return (
            <Page
                title='Триггер №15'
                description='Добавьте короткое описание триггера'
                hasTag
                isDevelop
                cantPlaying
            >
                <div style={{color: '#8b572a', fontSize: '16px;', paddingTop: '28px', paddingLeft: '2px', paddingBottom: '16px'}}>
                    1. Состояние по умолчанию. Пока не выбрано действие, сохранить действие нельзя
                </div>
                <SectionWrapper title='Что' isEdit>
                    <Row isEdit isSelect title='Действие 1' isAction>
                        <Select
                            placeholder='Выберите действие'
                            items={[
                                { title: 'Заполнить поле фиксированным значением' },
                                { title: 'Потребитель был сдедублицирован' },
                                { title: 'Потребитель попал в сегмент' },
                                { title: 'Потребитель вышел из сегментации' },
                            ]}
                        />
                    </Row>
                    <Row isEdit isFooter>
                        <Button color='gray' hasUnderline disabled size='large' >Сохранить</Button>
                        <Text mode='danger'>Для сохранения изменений необходимо добавить хотя бы одно действие</Text>
                    </Row>
                </SectionWrapper>

                <div style={{color: '#8b572a', fontSize: '16px;', paddingTop: '28px', paddingLeft: '2px', paddingBottom: '16px'}}>
                    2. Выбрали действие, появилась возможность сохранить блок, появилась строка для настройки еще одного действия
                </div>
                <SectionWrapper title='Что' isEdit>
                    <Row isEdit isSelect title='Действие 1' isAction isRemovable>
                        <Select
                            placeholder='Выберите действие'
                            defaultValue='Заполнить поле фиксированным значением'
                            items={[
                                { title: 'Заполнить поле фиксированным значением' },
                                { title: 'Потребитель был сдедублицирован' },
                                { title: 'Потребитель попал в сегмент' },
                                { title: 'Потребитель вышел из сегментации' },
                            ]}
                        />
                        <Select
                            placeholder='Выберите действие'
                            defaultValue='Дата рождения ребенка'
                            items={[
                                { title: 'Дата рождения ребенка' },
                                { title: 'Оставьте отзыв после покупки' },
                                { title: 'Создать новую рассылку' },
                            ]}
                        />
                        <DateField defaultDate={new Date()} />
                    </Row>
                    <Row isEdit isSelect title='Действие 2' isAction>
                        <Select
                            placeholder='Выберите действие'
                            items={[
                                { title: 'Заполнить поле фиксированным значением' },
                                { title: 'Потребитель был сдедублицирован' },
                                { title: 'Потребитель попал в сегмент' },
                                { title: 'Потребитель вышел из сегментации' },
                            ]}
                        />
                    </Row>
                    <Row isEdit isFooter>
                        <Button color='gray' hasUnderline size='large' >Сохранить</Button>
                    </Row>
                </SectionWrapper>

                <div style={{color: '#8b572a', fontSize: '16px;', paddingTop: '28px', paddingLeft: '2px', paddingBottom: '16px'}}>
                    3. Выбрали второе действие, появилась возможность добавить еще одно. В качестве действия выбрали отправку рассылки. Можно выбрать по названию из списка либо создать новую.
                </div>
                <SectionWrapper title='Что' isEdit>
                    <Row isEdit isSelect title='Действие 1' isAction isRemovable>
                        <Select
                            placeholder='Выберите действие'
                            defaultValue='Заполнить поле фиксированным значением'
                            items={[
                                { title: 'Заполнить поле фиксированным значением' },
                                { title: 'Отправить Email-рассылку' },
                                { title: 'Потребитель попал в сегмент' },
                                { title: 'Потребитель вышел из сегментации' },
                            ]}
                        />
                        <Select
                            placeholder='Выберите действие'
                            defaultValue='Дата рождения ребенка'
                            items={[
                                { title: 'Дата рождения ребенка' },
                                { title: 'Оставьте отзыв после покупки' },
                                { title: 'Создать новую рассылку' },
                            ]}
                        />
                        <DateField defaultDate={new Date()} />
                    </Row>
                    <Row isEdit isSelect title='Действие 2' isAction isRemovable>
                        <Select
                            placeholder='Выберите действие'
                            defaultValue='Отправить Email-рассылку'
                            items={[
                                { title: 'Заполнить поле фиксированным значением' },
                                { title: 'Потребитель был сдедублицирован' },
                                { title: 'Потребитель попал в сегмент' },
                                { title: 'Потребитель вышел из сегментации' },
                            ]}
                        />
                        <Select
                            placeholder='Выберите действие'
                            defaultValue='Оставьте отзыв после покупки'
                            items={[
                                { title: 'Дата рождения ребенка' },
                                { title: 'Оставьте отзыв после покупки' },
                                { title: 'Создать новую рассылку' },
                            ]}
                        />
                        <Button color='gray' hasUnderline size='xs'>Редактировать</Button>
                    </Row>
                    <Row isEdit isSelect title='Действие 3' isAction>
                        <Select
                            placeholder='Выберите действие'
                            items={[
                                { title: 'Заполнить поле фиксированным значением' },
                                { title: 'Потребитель был сдедублицирован' },
                                { title: 'Потребитель попал в сегмент' },
                                { title: 'Потребитель вышел из сегментации' },
                            ]}
                        />
                    </Row>
                    <Row isEdit isFooter>
                        <Button color='gray' hasUnderline size='large'>Сохранить</Button>
                    </Row>
                </SectionWrapper>

                <div style={{color: '#8b572a', fontSize: '16px;', paddingTop: '28px', paddingLeft: '2px', paddingBottom: '16px'}}>
                    4. Выбрали создание новой рассылки, появилась возможность задать тип и название рассылки, дальнейшее редактирование новой рассылки происходит на экране деталей этой рассылки
                </div>
                <SectionWrapper title='Что' isEdit>
                    <Row isEdit isSelect title='Действие 1' isAction isRemovable>
                        <Select
                            placeholder='Выберите действие'
                            defaultValue='Заполнить поле фиксированным значением'
                            items={[
                                { title: 'Заполнить поле фиксированным значением' },
                                { title: 'Отправить Email-рассылку' },
                                { title: 'Потребитель попал в сегмент' },
                                { title: 'Потребитель вышел из сегментации' },
                            ]}
                        />
                        <Select
                            placeholder='Выберите действие'
                            defaultValue='Дата рождения ребенка'
                            items={[
                                { title: 'Дата рождения ребенка' },
                                { title: 'Оставьте отзыв после покупки' },
                                { title: 'Создать новую рассылку' },
                            ]}
                        />
                        <DateField defaultDate={new Date()} />
                    </Row>
                    <Row isEdit isSelect title='Действие 2' isAction isRemovable>
                        <Select
                            placeholder='Выберите действие'
                            defaultValue='Отправить Email-рассылку'
                            items={[
                                { title: 'Заполнить поле фиксированным значением' },
                                { title: 'Потребитель был сдедублицирован' },
                                { title: 'Потребитель попал в сегмент' },
                                { title: 'Потребитель вышел из сегментации' },
                            ]}
                        />
                        <Select
                            placeholder='Выберите действие'
                            defaultValue='Создать новую рассылку'
                            items={[
                                { title: 'Дата рождения ребенка' },
                                { title: 'Оставьте отзыв после покупки' },
                                { title: 'Создать новую рассылку' },
                            ]}
                        />
                        <div className='row__action-filter'></div>
                    </Row>
                    <Row isEdit isSelect title='Действие 3' isAction>
                        <Select
                            placeholder='Выберите действие'
                            items={[
                                { title: 'Заполнить поле фиксированным значением' },
                                { title: 'Потребитель был сдедублицирован' },
                                { title: 'Потребитель попал в сегмент' },
                                { title: 'Потребитель вышел из сегментации' },
                            ]}
                        />
                    </Row>
                    <Row isEdit isFooter>
                        <Button color='gray' hasUnderline size='large'>Сохранить</Button>
                    </Row>
                </SectionWrapper>
            </Page>
        );
    }
}


ReactDOM.render(
    <What />,
    entryElement
)
