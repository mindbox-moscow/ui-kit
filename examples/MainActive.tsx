import * as React from "react";
import * as ReactDOM from "react-dom";

import { Button } from "../src/Button/Button";
import { SectionWrapper } from "../src/SectionWrapper/SectionWrapper";
import { Row } from "../src/Row/Row";
import { Page } from "../src/Page/Page";
import { Text } from "../src/Text/Text";
import { RadioButton } from "../src/RadioButton/RadioButton";
import { Select } from "../src/Select/Select";
import { DateField } from "../src/DateField/DateField";

class MainActive extends React.Component<{}> {
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
                title="Повторное Welcome письмо"
                description="Триггер для обработки регистрации новых пользователей через сайт или другие каналы"
                hasTag
                tagDate="12 авг 2018"
                cantPlaying
                isPlaying
            >
                <SectionWrapper
                    title="Когда"
                    isActive
                    isEdit={whenEdit}
                    onChangeState={this.toggleWhenState}
                >
                    {whenEdit ? (
                        <>
                            <Row
                                isEdit
                                isControl
                                description="25 авг 2018 – 1 янв 2019"
                                title="Период активности"
                            >
                                <RadioButton name="whenBlock3-group1" checked>
                                    Триггер активен на протяжении всей кампании
                                </RadioButton>
                                <RadioButton name="whenBlock3-group1">
                                    Запланировать период активности
                                </RadioButton>
                            </Row>
                            <Row isEdit isControl title="Режим запуска">
                                <RadioButton name="whenBlock3-group2" checked>
                                    По событию
                                </RadioButton>
                                <RadioButton name="whenBlock3-group2">
                                    По графику
                                </RadioButton>
                            </Row>
                            <Row isEdit isCustom title="Инициатор события">
                                <div className="row__control">
                                    <RadioButton name="whenBlock3-group3">
                                        Любой
                                    </RadioButton>
                                </div>
                                <RadioButton name="whenBlock3-group3" checked>
                                    Настроить фильтр по потребителям
                                </RadioButton>
                                <div className="row__small-filter row__small-filter_bottom">
                                    <div className="row__filter-inner">
                                        <Select
                                            placeholder="Выберите событие"
                                            size="small"
                                            items={[
                                                {
                                                    title:
                                                        "Потребитель попал в БД"
                                                },
                                                null,
                                                {
                                                    title:
                                                        "Потребитель был сдедублицирован"
                                                },
                                                {
                                                    title:
                                                        "Потребитель попал в сегмент"
                                                },
                                                {
                                                    title:
                                                        "Потребитель вышел из сегментации"
                                                },
                                                {
                                                    title:
                                                        "Изменился статус подписки"
                                                },
                                                {
                                                    title:
                                                        "Первое подтверждение мобильного телефона"
                                                },
                                                null,
                                                { title: "Изменение email" },
                                                {
                                                    title:
                                                        "Первое подтверждение email"
                                                },
                                                {
                                                    title:
                                                        "Обновление данных потребителя"
                                                },
                                                {
                                                    title:
                                                        "Редактирование анкеты потребителем"
                                                },
                                                {
                                                    title:
                                                        "Потребитель вошел на сайт"
                                                },
                                                {
                                                    title:
                                                        "Активация секретного кода потребителем",
                                                    disabled: true
                                                },
                                                {
                                                    title:
                                                        "Потребитель получил приз"
                                                },
                                                {
                                                    title:
                                                        "Изменение статуса FMCG заказа"
                                                },
                                                {
                                                    title:
                                                        "Создание FMCG заказа"
                                                }
                                            ]}
                                        />
                                    </div>
                                </div>
                            </Row>
                            <Row isEdit isSelect title="Событие">
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
                                <Row title="Инициатор события">
                                    Потребители из фильтра&nbsp;
                                    <Button color="lightgray" inheritFont size="xs">
                                        Условия фильтрации
                                    </Button>
                                </Row>
                                <Row title="Запуск по событию">
                                    Активация секретного кода потребителем&nbsp;
                                    <Button color="lightgray" inheritFont size="xs">
                                        Условия фильтрации
                                    </Button>
                                </Row>
                            </>
                        )}
                </SectionWrapper>
                <SectionWrapper
                    isActive
                    title="Кому"
                    isEdit={whomEdit}
                    onChangeState={this.toggleWhomState}
                >
                    {whomEdit ? (
                        <>
                            <Row isEdit title="Период активности" isControl>
                                <RadioButton name="rgroup13" checked>
                                    Каждый раз при попадании в фильтр триггера
                                </RadioButton>
                                <RadioButton name="rgroup13">
                                    Периодически
                                </RadioButton>
                            </Row>
                            <Row isEdit title="Число срабатываний" isControl>
                                <div className="row__segment">
                                    <RadioButton name="rgroup23" checked>
                                        Неограничено
                                    </RadioButton>
                                </div>
                                <RadioButton name="rgroup23">
                                    Ограничить
                                </RadioButton>
                            </Row>
                            <Row
                                title="Цель триггера"
                                description="Триггер применится к группе потребителей, которая попадет под выбранный сегмент"
                                isSelect
                                isDanger
                                isEdit
                            >
                                <Select
                                    placeholder="Выберите цель триггера"
                                    defaultValue="Потребители из фильтра (массовая отправка)"
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
                            <Row isEdit title="Сегмент" isSelect>
                                <Select
                                    placeholder="Выберите сегмент"
                                    defaultValue="Обеспеченная молодежь"
                                    items={[
                                        { title: "Обеспеченная молодежь" },
                                        { title: "Бедная молодежь" }
                                    ]}
                                />
                            </Row>
                            <Row isEdit isFooter>
                                <Button color="gray" hasUnderline size="large">
                                    Сохранить
                                </Button>
                            </Row>
                        </>
                    ) : (
                            <>
                                <Row title="Применять к потребителю">
                                    Периодически: Максимум один раз за календарный
                                    месяц
                                </Row>
                                <Row title="Число срабатываний">
                                    Ограничить 5 разами или меньше
                                </Row>
                                <Row title="Цель триггера">
                                    Потребители из фильтра&nbsp;
                                    <Button color="lightgray" inheritFont size="xs">
                                        Условия фильтрации
                                    </Button>
                                </Row>
                            </>
                        )}
                </SectionWrapper>
                <SectionWrapper
                    title="Что"
                    isActive
                    isEdit={whatEdit}
                    onChangeState={this.toggleWhatState}
                >
                    {whatEdit ? (
                        <>
                            <Row
                                isEdit
                                isSelect
                                title="Действие 1"
                                isAction
                                isRemovable
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
                                        {
                                            title: "Потребитель попал в сегмент"
                                        },
                                        {
                                            title:
                                                "Потребитель вышел из сегментации"
                                        }
                                    ]}
                                />
                                <Select
                                    placeholder="Выберите действие"
                                    defaultValue="Дата рождения ребенка"
                                    items={[
                                        { title: "Дата рождения ребенка" },
                                        {
                                            title:
                                                "Оставьте отзыв после покупки"
                                        },
                                        { title: "Создать новую рассылку" }
                                    ]}
                                />
                                <DateField defaultDate={new Date()} />
                            </Row>
                            <Row
                                isEdit
                                isSelect
                                title="Действие 2"
                                isAction
                                isRemovable
                            >
                                <Select
                                    placeholder="Выберите действие"
                                    defaultValue="Отправить Email-рассылку"
                                    items={[
                                        {
                                            title:
                                                "Заполнить поле фиксированным значением"
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
                                <Select
                                    placeholder="Выберите действие"
                                    defaultValue="Оставьте отзыв после покупки"
                                    items={[
                                        { title: "Дата рождения ребенка" },
                                        {
                                            title:
                                                "Оставьте отзыв после покупки"
                                        },
                                        { title: "Создать новую рассылку" }
                                    ]}
                                />
                                <Button color="gray" hasUnderline size="xs">
                                    Редактировать
                                </Button>
                            </Row>
                            <Row
                                isEdit
                                isSelect
                                title="Действие 3"
                                isAction
                                isRemovable
                            >
                                <Select
                                    placeholder="Выберите действие"
                                    defaultValue="Отправить Email-рассылку"
                                    items={[
                                        {
                                            title:
                                                "Заполнить поле фиксированным значением"
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
                                <Select
                                    placeholder="Выберите действие"
                                    defaultValue="Оставьте отзыв после покупки"
                                    items={[
                                        { title: "Дата рождения ребенка" },
                                        {
                                            title:
                                                "Оставьте отзыв после покупки"
                                        },
                                        { title: "Создать новую рассылку" }
                                    ]}
                                />
                                <Button color="gray" hasUnderline size="xs">
                                    Редактировать
                                </Button>
                            </Row>
                            <Row isEdit isSelect title="Действие 4" isAction>
                                <Select
                                    placeholder="Выберите действие"
                                    items={[
                                        {
                                            title:
                                                "Заполнить поле фиксированным значением"
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
                                <Button color="gray" hasUnderline size="large">
                                    Сохранить
                                </Button>
                            </Row>
                        </>
                    ) : (
                            <>
                                <Row title="Действие 1">
                                    Отправить email-рассылку&nbsp;
                                <a href="#">Повторное welcome-письмо</a>
                                </Row>
                                <Row title="Действие 2">
                                    Заполнить поле фиксированным значением:
                                    Предпочитаемый размер кровати:&nbsp;
                                <strong>King Size</strong>
                                </Row>
                                <Row title="Действие 3">
                                    Отправить SMS-рассылку&nbsp;
                                <a href="#">
                                        Напоминание о необходимости подтвердить
                                        регистрацию
                                </a>
                                </Row>
                            </>
                        )}
                </SectionWrapper>
            </Page>
        );
    }
}

const entryElement = document.createElement("div");
document.body.appendChild(entryElement);

ReactDOM.render(<MainActive />, entryElement);
