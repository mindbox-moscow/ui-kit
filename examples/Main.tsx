import "./styles.scss";

import * as React from "react";
import * as ReactDOM from "react-dom";

import { Button } from "../src/Button/Button";
import { SectionWrapper } from "../src/SectionWrapper/SectionWrapper";
import { Row } from "../src/Row/Row";
import { Page } from "../src/Page/Page";
import { Text } from "../src/Text/Text";
import { RadioButton } from "../src/RadioButton/RadioButton";
import { Select } from "../src/Select/Select";

class Main extends React.Component<{}> {
    state = {
        whatEdit: false,
        whomEdit: false,
        whenEdit: false
    };

    toggleWhatState = (isEdit: boolean) => this.setState({ whatEdit: isEdit });
    toggleWhomState = (isEdit: boolean) => this.setState({ whomEdit: isEdit });
    toggleWhenState = (isEdit: boolean) => this.setState({ whenEdit: isEdit });

    public render() {
        const { whatEdit, whomEdit, whenEdit } = this.state;

        return (
            <Page
                title="Триггер №15"
                description="Добавьте короткое описание триггера"
                hasTag
                isDevelop
                cantPlaying
            >
                <SectionWrapper
                    title="Когда"
                    isEdit={whenEdit}
                    onChangeState={this.toggleWhenState}
                >
                    {whenEdit ? (
                        <>
                            <Row
                                isEdit
                                title="Период активности"
                                isControl
                                description="25 авг 2018 – 1 янв 2019"
                            >
                                <RadioButton name="group1" checked={true}>
                                    Триггер активен на протяжении всей кампании
                                </RadioButton>
                                <RadioButton name="group1">
                                    Запланировать период активности
                                </RadioButton>
                            </Row>
                            <Row isEdit title="Режим запуска" isControl>
                                <RadioButton name="group2" checked={true}>
                                    По событию
                                </RadioButton>
                                <RadioButton name="group2">
                                    По графику
                                </RadioButton>
                            </Row>
                            <Row isEdit title="Инициатор события" isControl>
                                <RadioButton name="group3" checked={true}>
                                    Любой
                                </RadioButton>
                                <RadioButton name="group3">
                                    Настроить фильтр по потребителям
                                </RadioButton>
                            </Row>
                            <Row isEdit title="Событие" isSelect>
                                <Select
                                    placeholder="Выберите событие"
                                    items={[
                                        { title: "Потребитель попал в БД" },
                                        null,
                                        {
                                            title:
                                                "Потребитель был сдедублицирован"
                                        },
                                        {
                                            title: "Потребитель попал в сегмент"
                                        },
                                        {
                                            title:
                                                "Потребитель вышел из сегментации"
                                        },
                                        { title: "Изменился статус подписки" },
                                        {
                                            title:
                                                "Первое подтверждение мобильного телефона"
                                        },
                                        null,
                                        { title: "Изменение email" },
                                        { title: "Первое подтверждение email" },
                                        {
                                            title:
                                                "Обновление данных потребителя"
                                        },
                                        {
                                            title:
                                                "Редактирование анкеты потребителем"
                                        },
                                        { title: "Потребитель вошел на сайт" },
                                        {
                                            title:
                                                "Активация секретного кода потребителем",
                                            disabled: true
                                        },
                                        { title: "Потребитель получил приз" },
                                        {
                                            title:
                                                "Изменение статуса FMCG заказа"
                                        },
                                        { title: "Создание FMCG заказа" }
                                    ]}
                                />
                            </Row>
                            <Row isEdit isFooter>
                                <Button
                                    color="gray"
                                    hasUnderline
                                    disabled
                                    size="large"
                                >
                                    Сохранить
                                </Button>
                                <Text mode="danger">
                                    Для сохранения изменений необходимо выбрать
                                    событие или настроить график
                                </Text>
                            </Row>
                        </>
                    ) : (
                        <>
                            <Row title="Период активности">
                                Триггер активен на протяжении всей кампании: 25
                                авг 2018 – 1 янв 2019
                            </Row>
                            <Row title="Инициатор события">Любой</Row>
                            <Row title="Запуск">
                                <Text mode="danger">
                                    Настройте режим запуска триггера
                                </Text>
                            </Row>
                        </>
                    )}
                </SectionWrapper>
                <SectionWrapper
                    title="Кому"
                    isEdit={whomEdit}
                    onChangeState={this.toggleWhomState}
                >
                    {whomEdit ? (
                        <>
                            <Row isEdit title="Период активности" isControl>
                                <RadioButton name="group21" checked>
                                    Каждый раз при попадании в фильтр триггера
                                </RadioButton>
                                <RadioButton name="group21">
                                    Периодически
                                </RadioButton>
                            </Row>
                            <Row isEdit title="Число срабатываний" isControl>
                                <RadioButton name="group22" checked>
                                    Неограничено
                                </RadioButton>
                                <RadioButton name="group22">
                                    Ограничить
                                </RadioButton>
                            </Row>
                            <Row
                                isEdit
                                title="Цель триггера"
                                isSelect
                                description="Триггер применится к конкретному потребителю"
                            >
                                <Select
                                    placeholder="Выберите цель триггера"
                                    defaultValue="Потребитель из события в блоке «Когда»"
                                    items={[
                                        {
                                            title:
                                                "Потребитель из события в блоке «Когда»"
                                        },
                                        {
                                            title:
                                                "Потребитель был сдедублицирован"
                                        },
                                        {
                                            title: "Потребитель попал в сегмент"
                                        },
                                        {
                                            title:
                                                "Потребитель вышел из сегментации"
                                        }
                                    ]}
                                />
                            </Row>
                            <Row isEdit isFooter>
                                <Button
                                    color="gray"
                                    hasUnderline
                                    disabled
                                    size="large"
                                >
                                    Сохранить
                                </Button>
                                <Text mode="danger">
                                    Для сохранения изменений необходимо выбрать
                                    событие в блоке «Когда»
                                </Text>
                            </Row>
                        </>
                    ) : (
                        <>
                            <Row title="Применять к потребителю">
                                Каждый раз при попадании в фильтр триггера
                            </Row>
                            <Row title="Число срабатываний">Неограничено</Row>
                            <Row title="Цель триггера">
                                Настройте потребителей, к которым будут
                                применяться действия триггера
                            </Row>
                        </>
                    )}
                </SectionWrapper>
                <SectionWrapper
                    title="Что"
                    isEdit={whatEdit}
                    onChangeState={this.toggleWhatState}
                >
                    {whatEdit ? (
                        <>
                            <Row isEdit title="Действие 1" isSelect>
                                <Select
                                    placeholder="Выберите действие"
                                    isFiltered
                                    items={[
                                        {
                                            title:
                                                "Потребитель из события в блоке «Когда»"
                                        },
                                        {
                                            title:
                                                "Потребитель был сдедублицирован"
                                        },
                                        {
                                            title: "Потребитель попал в сегмент"
                                        },
                                        {
                                            title:
                                                "Потребитель вышел из сегментации"
                                        },
                                        { title: "Изменился статус подписки" },
                                        {
                                            title:
                                                "Первое подтверждение мобильного телефона"
                                        },
                                        { title: "Изменение email" },
                                        { title: "Первое подтверждение email" },
                                        {
                                            title:
                                                "Обновление данных потребителя"
                                        },
                                        {
                                            title:
                                                "Редактирование анкеты потребителем"
                                        },
                                        { title: "Потребитель вошел на сайт" },
                                        {
                                            title:
                                                "Активация секретного кода потребителем"
                                        },
                                        { title: "Потребитель получил приз" },
                                        {
                                            title:
                                                "Изменение статуса FMCG заказа"
                                        },
                                        { title: "Создание FMCG заказа" }
                                    ]}
                                />
                            </Row>
                            <Row isEdit isFooter>
                                <Button
                                    color="gray"
                                    hasUnderline
                                    disabled
                                    size="large"
                                >
                                    Сохранить
                                </Button>
                                <Text mode="danger">
                                    Для сохранения изменений необходимо добавить
                                    хотя бы одно действие
                                </Text>
                            </Row>
                        </>
                    ) : (
                        <Row title="Действие">
                            Настройте одно или несколько действий триггера
                        </Row>
                    )}
                </SectionWrapper>
            </Page>
        );
    }
}

const entryElement = document.createElement("div");
document.body.appendChild(entryElement);

ReactDOM.render(<Main />, entryElement);
