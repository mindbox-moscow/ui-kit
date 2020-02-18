import "./styles.scss";

import * as React from "react";
import * as ReactDOM from "react-dom";

import { ActionFilter } from "../src/ActionFilter/ActionFilter";
import { Button } from "../src/Button/Button";
import { DateField, Days, Months } from "../src/DateField/DateField";
import { Page } from "../src/Page/Page";
import { Row } from "../src/Row/Row";
import { SectionWrapper } from "../src/SectionWrapper/SectionWrapper";
import { Select } from "../src/Select/Select";
import { Text } from "../src/Text/Text";
import { COLORS } from "../src/utils/constants";

const months: Months = [
    "Янв",
    "Фев",
    "Мар",
    "Апр",
    "Май",
    "Июн",
    "Июл",
    "Авг",
    "Сен",
    "Окт",
    "Ноя",
    "Дек"
];

const days: Days = [
    "Пн",
    "Вт",
    "Ср",
    "Чт",
    "Пт",
    "Сб",
    "Вс",
];

class What extends React.Component<{}> {
    public state = { date1: new Date(2013, 12, 12), date2: new Date(), date3: new Date() };

    public handleChangeDate1 = (val: Date) => this.setState({date1: val});
    public handleChangeDate2 = (val: Date) => this.setState({date2: val});
    public handleChangeDate3 = (val: Date) => this.setState({date3: val});

    public render() {
        const { date1, date2, date3 } = this.state;
        return (
            <Page
                title="Триггер №15"
                description="Добавьте короткое описание триггера"
                hasBadge={true}
                badgeTitle="Триггер активен"
                badgeBgColor={COLORS.Yellow}
                badgeDate="11 авг 2018"
            >
                <div
                    style={{
                        color: "#8b572a",
                        fontSize: "16px",
                        paddingBottom: "16px",
                        paddingLeft: "2px",
                        paddingTop: "28px",
                    }}
                >
                    1. Состояние по умолчанию. Пока не выбрано действие,
                    сохранить действие нельзя
                </div>
                <SectionWrapper title="Что" isEdit={true}>
                    <Row isEdit={true} isSelect={true} title="Действие 1" isAction={true}>
                        <Select
                            placeholder="Выберите действие"
                            items={[
                                {
                                    title:
                                        "Заполнить поле фиксированным значением"
                                },
                                { title: "Потребитель был сдедублицирован" },
                                { title: "Потребитель попал в сегмент" },
                                { title: "Потребитель вышел из сегментации" }
                            ]}
                        />
                    </Row>
                    <Row isEdit={true} isFooter={true}>
                        <Button color="gray" hasUnderline={true} disabled={true} size="large">
                            Сохранить
                        </Button>
                        <Text mode="danger">
                            Для сохранения изменений необходимо добавить хотя бы
                            одно действие
                        </Text>
                    </Row>
                </SectionWrapper>

                <div
                    style={{
                        color: "#8b572a",
                        fontSize: "16px",
                        paddingBottom: "16px",
                        paddingLeft: "2px",
                        paddingTop: "28px",
                    }}
                >
                    2. Выбрали действие, появилась возможность сохранить блок,
                    появилась строка для настройки еще одного действия
                </div>
                <SectionWrapper title="Что" isEdit={true}>
                    <Row
                        isEdit={true}
                        isSelect={true}
                        title="Действие 1"
                        isAction={true}
                        isRemovable={true}
                    >
                        <Select
                            placeholder="Выберите действие"
                            defaultValue="Заполнить поле фиксированным значением"
                            items={[
                                {
                                    title:
                                        "Заполнить поле фиксированным значением"
                                },
                                { title: "Потребитель был сдедублицирован" },
                                { title: "Потребитель попал в сегмент" },
                                { title: "Потребитель вышел из сегментации" }
                            ]}
                        />
                        <Select
                            placeholder="Выберите действие"
                            defaultValue="Дата рождения ребенка"
                            items={[
                                { title: "Дата рождения ребенка" },
                                { title: "Оставьте отзыв после покупки" },
                                { title: "Создать новую рассылку" }
                            ]}
                        />
                        <DateField onChange={this.handleChangeDate1} value={date1} months={months} days={days} />
                    </Row>
                    <Row isEdit={true} isSelect={true} title="Действие 2" isAction={true}>
                        <Select
                            placeholder="Выберите действие"
                            items={[
                                {
                                    title:
                                        "Заполнить поле фиксированным значением"
                                },
                                { title: "Потребитель был сдедублицирован" },
                                { title: "Потребитель попал в сегмент" },
                                { title: "Потребитель вышел из сегментации" }
                            ]}
                        />
                    </Row>
                    <Row isEdit={true} isFooter={true}>
                        <Button color="gray" hasUnderline={true} size="large">
                            Сохранить
                        </Button>
                    </Row>
                </SectionWrapper>

                <div
                    style={{
                        color: "#8b572a",
                        fontSize: "16px",
                        paddingBottom: "16px",
                        paddingLeft: "2px",
                        paddingTop: "28px",
                    }}
                >
                    3. Выбрали второе действие, появилась возможность добавить
                    еще одно. В качестве действия выбрали отправку рассылки.
                    Можно выбрать по названию из списка либо создать новую.
                </div>
                <SectionWrapper title="Что" isEdit={true}>
                    <Row
                        isEdit={true}
                        isSelect={true}
                        title="Действие 1"
                        isAction={true}
                        isRemovable={true}
                    >
                        <Select
                            placeholder="Выберите действие"
                            defaultValue="Заполнить поле фиксированным значением"
                            items={[
                                {
                                    title:
                                        "Заполнить поле фиксированным значением"
                                },
                                { title: "Отправить Email-рассылку" },
                                { title: "Потребитель попал в сегмент" },
                                { title: "Потребитель вышел из сегментации" }
                            ]}
                        />
                        <Select
                            placeholder="Выберите действие"
                            defaultValue="Дата рождения ребенка"
                            items={[
                                { title: "Дата рождения ребенка" },
                                { title: "Оставьте отзыв после покупки" },
                                { title: "Создать новую рассылку" }
                            ]}
                        />
                        <DateField months={months} days={days} onChange={this.handleChangeDate2} value={date2}  />
                    </Row>
                    <Row
                        isEdit={true}
                        isSelect={true}
                        title="Действие 2"
                        isAction={true}
                        isRemovable={true}
                    >
                        <Select
                            placeholder="Выберите действие"
                            defaultValue="Отправить Email-рассылку"
                            items={[
                                {
                                    title:
                                        "Заполнить поле фиксированным значением"
                                },
                                { title: "Потребитель был сдедублицирован" },
                                { title: "Потребитель попал в сегмент" },
                                { title: "Потребитель вышел из сегментации" }
                            ]}
                        />
                        <Select
                            placeholder="Выберите действие"
                            defaultValue="Оставьте отзыв после покупки"
                            items={[
                                { title: "Дата рождения ребенка" },
                                { title: "Оставьте отзыв после покупки" },
                                { title: "Создать новую рассылку" }
                            ]}
                        />
                        <Button color="gray" hasUnderline={true} size="xs">
                            Редактировать
                        </Button>
                    </Row>
                    <Row isEdit={true} isSelect={true} title="Действие 3" isAction={true}>
                        <Select
                            placeholder="Выберите действие"
                            items={[
                                {
                                    title:
                                        "Заполнить поле фиксированным значением"
                                },
                                { title: "Потребитель был сдедублицирован" },
                                { title: "Потребитель попал в сегмент" },
                                { title: "Потребитель вышел из сегментации" }
                            ]}
                        />
                    </Row>
                    <Row isEdit={true} isFooter={true}>
                        <Button color="gray" hasUnderline={true} size="large">
                            Сохранить
                        </Button>
                    </Row>
                </SectionWrapper>

                <div
                    style={{
                        color: "#8b572a",
                        fontSize: "16px",
                        paddingBottom: "16px",
                        paddingLeft: "2px",
                        paddingTop: "28px",
                    }}
                >
                    4. Выбрали создание новой рассылки, появилась возможность
                    задать тип и название рассылки, дальнейшее редактирование
                    новой рассылки происходит на экране деталей этой рассылки
                </div>
                <SectionWrapper title="Что" isEdit={true}>
                    <Row
                        isEdit={true}
                        isSelect={true}
                        title="Действие 1"
                        isAction={true}
                        isRemovable={true}
                    >
                        <Select
                            placeholder="Выберите действие"
                            defaultValue="Заполнить поле фиксированным значением"
                            items={[
                                {
                                    title:
                                        "Заполнить поле фиксированным значением"
                                },
                                { title: "Отправить Email-рассылку" },
                                { title: "Потребитель попал в сегмент" },
                                { title: "Потребитель вышел из сегментации" }
                            ]}
                        />
                        <Select
                            placeholder="Выберите действие"
                            defaultValue="Дата рождения ребенка"
                            items={[
                                { title: "Дата рождения ребенка" },
                                { title: "Оставьте отзыв после покупки" },
                                { title: "Создать новую рассылку" }
                            ]}
                        />
                        <DateField months={months} days={days} onChange={this.handleChangeDate3} value={date3}  />
                    </Row>
                    <Row
                        isEdit={true}
                        isSelect={true}
                        title="Действие 2"
                        isAction={true}
                        isRemovable={true}
                    >
                        <Select
                            placeholder="Выберите действие"
                            defaultValue="Отправить Email-рассылку"
                            items={[
                                {
                                    title:
                                        "Заполнить поле фиксированным значением"
                                },
                                { title: "Потребитель был сдедублицирован" },
                                { title: "Потребитель попал в сегмент" },
                                { title: "Потребитель вышел из сегментации" }
                            ]}
                        />
                        <Select
                            placeholder="Выберите действие"
                            defaultValue="Создать новую рассылку"
                            items={[
                                { title: "Дата рождения ребенка" },
                                { title: "Оставьте отзыв после покупки" },
                                { title: "Создать новую рассылку" }
                            ]}
                        />
                        <ActionFilter
                            defaultType="Email"
                            name="Новая рассылка №37"
                            types={[
                                { title: "Email" },
                                { title: "Email 2" },
                                { title: "Email 3" }
                            ]}
                        >
                            <Button color="gray" hasUnderline={true} size="normal">
                                Сохранить черновик рассылки
                            </Button>
                            <Button color="gray" hasUnderline={true} size="normal">
                                Сохранить и перейти к редактированию
                            </Button>
                        </ActionFilter>
                    </Row>
                    <Row isEdit={true} isSelect={true} title="Действие 3" isAction={true}>
                        <Select
                            placeholder="Выберите действие"
                            items={[
                                {
                                    title:
                                        "Заполнить поле фиксированным значением"
                                },
                                { title: "Потребитель был сдедублицирован" },
                                { title: "Потребитель попал в сегмент" },
                                { title: "Потребитель вышел из сегментации" }
                            ]}
                        />
                    </Row>
                    <Row isEdit={true} isFooter={true}>
                        <Button color="gray" hasUnderline={true} size="large">
                            Сохранить
                        </Button>
                    </Row>
                </SectionWrapper>
            </Page>
        );
    }
}

const entryElement = document.createElement("div");
document.body.appendChild(entryElement);

ReactDOM.render(<What />, entryElement);
