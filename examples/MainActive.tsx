import "./styles.scss";

import * as React from "react";
import * as ReactDOM from "react-dom";

import { Button as NewButton } from "@mindbox-moscow/ui-components";

import { DateField } from "../src/DateField/DateField";
import { Page } from "../src/Page/Page";
import { RadioButton } from "../src/RadioButton/RadioButton";
import { Row } from "../src/Row/Row";
import { SectionWrapper } from "../src/SectionWrapper/SectionWrapper";
import { Select } from "../src/Select/Select";
import { Text } from "../src/Text/Text";
import { COLORS } from "../src/utils/constants";

class MainActive extends React.Component<{}> {
    public state = {
        date: new Date(),
        whatEdit: false,
        whenEdit: false,
        whomEdit: false,
    };

    public toggleWhatState = (isEdit: boolean) => this.setState({ whatEdit: isEdit });
    public toggleWhomState = (isEdit: boolean) => this.setState({ whomEdit: isEdit });
    public toggleWhenState = (isEdit: boolean) => this.setState({ whenEdit: isEdit });
    public handleChangeDate = (val: Date) => this.setState({ date: val });

    public render() {
        const { whatEdit, whomEdit, whenEdit, date } = this.state;

        return (
            <Page
                title="Повторное Welcome письмо"
                description="Триггер для обработки регистрации новых пользователей через сайт или другие каналы"
                hasBadge={true}
                badgeTitle="Триггер активен"
                badgeDate="12 авг 2018"
                badgeBgColor={COLORS.Purple}
            >
                <SectionWrapper
                    title="Когда"
                    isActive={true}
                    isEdit={whenEdit}
                    onChangeState={this.toggleWhenState}
                >
                    {whenEdit ? (
                        <>
                            <Row
                                isEdit={true}
                                isControl={true}
                                description="25 авг 2018 – 1 янв 2019"
                                title="Период активности"
                            >
                                <RadioButton name="whenBlock3-group1" checked={true}>
                                    Триггер активен на протяжении всей кампании
                                </RadioButton>
                                <RadioButton name="whenBlock3-group1">
                                    Запланировать период активности
                                </RadioButton>
                            </Row>
                            <Row isEdit={true} isControl={true} title="Режим запуска">
                                <RadioButton name="whenBlock3-group2" checked={true}>
                                    По событию
                                </RadioButton>
                                <RadioButton name="whenBlock3-group2">
                                    По графику
                                </RadioButton>
                            </Row>
                            <Row isEdit={true} isCustom={true} title="Инициатор события">
                                <div className="kit-row__control">
                                    <RadioButton name="whenBlock3-group3">
                                        Любой
                                    </RadioButton>
                                </div>
                                <RadioButton name="whenBlock3-group3" checked={true}>
                                    Настроить фильтр по потребителям
                                </RadioButton>
                                <div className="kit-row__small-filter kit-row__small-filter_bottom">
                                    <div className="kit-row__filter-inner">
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
                                                    disabled: true,
                                                    title:
                                                        "Активация секретного кода потребителем",
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
                            <Row isEdit={true} isSelect={true} title="Событие">
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
                                            disabled: true,
                                            title:
                                                "Активация секретного кода потребителем",
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
                            <Row isEdit={true} isFooter={true}>
                                <NewButton
                                    disabled
                                    size="large"
                                    type="primary"
                                >
                                    Сохранить
                                </NewButton>

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
                                <NewButton
                                        type="tertiary"
                                        size="small"
                                    >
                                        Условия фильтрации
                                </NewButton>
                                </Row>
                                <Row title="Запуск по событию">
                                    Активация секретного кода потребителем&nbsp;
                                <NewButton
                                        type="tertiary"
                                        size="small"
                                    >
                                        Условия фильтрации
                                </NewButton>
                                </Row>
                            </>
                        )}
                </SectionWrapper>
                <SectionWrapper
                    isActive={true}
                    title="Кому"
                    isEdit={whomEdit}
                    onChangeState={this.toggleWhomState}
                >
                    {whomEdit ? (
                        <>
                            <Row isEdit={true} title="Период активности" isControl={true}>
                                <RadioButton name="rgroup13" checked={true}>
                                    Каждый раз при попадании в фильтр триггера
                                </RadioButton>
                                <RadioButton name="rgroup13">
                                    Периодически
                                </RadioButton>
                            </Row>
                            <Row isEdit={true} title="Число срабатываний" isControl={true}>
                                <div className="kit-row__segment">
                                    <RadioButton name="rgroup23" checked={true}>
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
                                isSelect={true}
                                isDanger={true}
                                isEdit={true}
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
                            <Row isEdit={true} title="Сегмент" isSelect={true}>
                                <Select
                                    placeholder="Выберите сегмент"
                                    defaultValue="Обеспеченная молодежь"
                                    items={[
                                        { title: "Обеспеченная молодежь" },
                                        { title: "Бедная молодежь" }
                                    ]}
                                />
                            </Row>
                            <Row isEdit={true} isFooter={true}>
                                <NewButton
                                    size="large"
                                    type="primary"
                                >
                                    Сохранить
                                </NewButton>
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
                                <NewButton
                                        type="tertiary"
                                        size="small"
                                    >
                                        Условия фильтрации
                                </NewButton>
                                </Row>
                            </>
                        )}
                </SectionWrapper>
                <SectionWrapper
                    title="Что"
                    isActive={true}
                    isEdit={whatEdit}
                    onChangeState={this.toggleWhatState}
                >
                    {whatEdit ? (
                        <>
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
                                <DateField
                                    onChange={this.handleChangeDate}
                                    value={date}
                                    days={[
                                        "Пн",
                                        "Вт",
                                        "Ср",
                                        "Чт",
                                        "Пт",
                                        "Сб",
                                        "Вс",
                                    ]}
                                    months={[
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
                                    ]}
                                />
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
                                <NewButton
                                    size="small"
                                    type="primary"
                                >
                                    Редактировать
                                </NewButton>
                            </Row>
                            <Row
                                isEdit={true}
                                isSelect={true}
                                title="Действие 3"
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
                                <NewButton
                                    size="small"
                                    type="primary"
                                >
                                    Редактировать
                                </NewButton>
                            </Row>
                            <Row isEdit={true} isSelect={true} title="Действие 4" isAction={true}>
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
                            <Row isEdit={true} isFooter={true}>
                                <NewButton
                                    size="large"
                                    type="primary"
                                >
                                    Сохранить
                                </NewButton>
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
