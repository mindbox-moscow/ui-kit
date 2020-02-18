import "./styles.scss";

import * as React from "react";
import * as ReactDOM from "react-dom";

import { Button } from "../src/Button/Button";
import { Checkbox } from "../src/Checkbox/Checkbox";
import { DateField, Days, Months } from "../src/DateField/DateField";
import { Input } from "../src/Input/Input";
import { Page } from "../src/Page/Page";
import { Period } from "../src/Period/Period";
import { RadioButton } from "../src/RadioButton/RadioButton";
import { Row } from "../src/Row/Row";
import { SectionWrapper } from "../src/SectionWrapper/SectionWrapper";
import { Select } from "../src/Select/Select";
import { Text } from "../src/Text/Text";
import { TimeField } from "../src/TimeField/TimeField";
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

class When extends React.Component<{}> {
    public state = { dateFrom: new Date(2013, 12, 12), dateTo: new Date() };

    public handleChangeDateFrom = (val: Date) => this.setState({dateFrom: val});
    public handleChangeDateTo = (val: Date) => this.setState({dateTo: val});
    
    public render() {
        const { dateTo, dateFrom } = this.state;
        return (
            <Page
                title="Триггер №15"
                description="Добавьте короткое описание триггера"
                hasBadge={true}
                badgeTitle="Триггер в разработке"
                badgeBgColor={COLORS.Gray}
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
                    1. Состояние по умолчанию. Пока не выбрано событие,
                    сохранить правило нельзя.
                </div>
                <SectionWrapper title="Когда" isEdit={true}>
                    <Row
                        isEdit={true}
                        isControl={true}
                        description="25 авг 2018 – 1 янв 2019"
                        title="Период активности"
                    >
                        <RadioButton name="whenBlock1-group1" checked={true}>
                            Триггер активен на протяжении всей кампании
                        </RadioButton>
                        <RadioButton name="whenBlock1-group1">
                            Запланировать период активности
                        </RadioButton>
                    </Row>
                    <Row isEdit={true} isControl={true} title="Режим запуска">
                        <RadioButton name="whenBlock1-group2" checked={true}>
                            По событию
                        </RadioButton>
                        <RadioButton name="whenBlock1-group2">
                            По графику
                        </RadioButton>
                    </Row>
                    <Row isEdit={true} isControl={true} title="Инициатор события">
                        <RadioButton name="whenBlock1-group3" checked={true}>
                            Любой
                        </RadioButton>
                        <RadioButton name="whenBlock1-group3">
                            Настроить фильтр по потребителям
                        </RadioButton>
                    </Row>
                    <Row isEdit={true} isSelect={true} title="Событие">
                        <Select
                            placeholder="Выберите событие"
                            isFiltered={true}
                            items={[
                                { title: "Потребитель попал в БД" },
                                { title: "Потребитель был сдедублицирован" },
                                { title: "Потребитель попал в сегмент" },
                                { title: "Потребитель вышел из сегментации" },
                                { title: "Изменился статус подписки" },
                                {
                                    title:
                                        "Первое подтверждение мобильного телефона"
                                },
                                { title: "Изменение email" },
                                { title: "Первое подтверждение email" },
                                { title: "Обновление данных потребителя" },
                                { title: "Редактирование анкеты потребителем" },
                                { title: "Потребитель вошел на сайт" },
                                {
                                    title:
                                        "Активация секретного кода потребителем"
                                },
                                { title: "Потребитель получил приз" },
                                { title: "Изменение статуса FMCG заказа" },
                                { title: "Создание FMCG заказа" }
                            ]}
                        />
                    </Row>
                    <Row isEdit={true} isFooter={true}>
                        <Button color="gray" hasUnderline={true} disabled={true} size="large">
                            Сохранить
                        </Button>
                        <Text mode="danger">
                            Для сохранения изменений необходимо выбрать событие
                            или настроить график
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
                    2. Переключились в планирование периода активности
                </div>
                <SectionWrapper title="Когда" isEdit={true}>
                    <Row
                        isEdit={true}
                        isControl={true}
                        title="Период активности"
                        description="25 авг 2018 – 1 янв 2019"
                    >
                        <RadioButton name="whenBlock2-group1">
                            Триггер активен на протяжении всей кампании
                        </RadioButton>
                        <RadioButton name="whenBlock2-group1" checked={true}>
                            Запланировать период активности
                        </RadioButton>
                    </Row>
                    <Row isEdit={true} isControl={true} title="Дата и время старта">
                        <DateField onChange={this.handleChangeDateFrom} days={days} months={months} value={dateFrom}  />
                        <TimeField hours={12} minutes={23}  />
                    </Row>
                    <Row isEdit={true} isControl={true} title="Дата окончания">
                        <DateField
                            months={months}
                            days={days}
                            onChange={this.handleChangeDateTo}
                            disabled={true}
                            value={dateTo}

                        />
                        <TimeField disabled={true} hours={12} minutes={20}  />
                        <Checkbox
                            checked={true}
                            text="Триггер активен до конца кампании"
                        />
                    </Row>
                    <Row isEdit={true} isControl={true} title="Режим запуска">
                        <RadioButton name="whenBlock2-group2" checked={true}>
                            По событию
                        </RadioButton>
                        <RadioButton name="whenBlock2-group2">
                            По графику
                        </RadioButton>
                    </Row>
                    <Row isEdit={true} isControl={true} title="Инициатор события">
                        <RadioButton name="whenBlock2-group3" checked={true}>
                            Любой
                        </RadioButton>
                        <RadioButton name="whenBlock2-group3">
                            Настроить фильтр по потребителям
                        </RadioButton>
                    </Row>
                    <Row isEdit={true} isSelect={true} title="Событие">
                        <Select
                            placeholder="Выберите событие"
                            isFiltered={true}
                            items={[
                                { title: "Потребитель попал в БД" },
                                { title: "Потребитель был сдедублицирован" },
                                { title: "Потребитель попал в сегмент" },
                                { title: "Потребитель вышел из сегментации" },
                                { title: "Изменился статус подписки" },
                                {
                                    title:
                                        "Первое подтверждение мобильного телефона"
                                },
                                { title: "Изменение email" },
                                { title: "Первое подтверждение email" },
                                { title: "Обновление данных потребителя" },
                                { title: "Редактирование анкеты потребителем" },
                                { title: "Потребитель вошел на сайт" },
                                {
                                    title:
                                        "Активация секретного кода потребителем"
                                },
                                { title: "Потребитель получил приз" },
                                { title: "Изменение статуса FMCG заказа" },
                                { title: "Создание FMCG заказа" }
                            ]}
                        />
                    </Row>
                    <Row isEdit={true} isFooter={true}>
                        <Button color="gray" hasUnderline={true} disabled={true} size="large">
                            Сохранить
                        </Button>
                        <Text mode="danger">
                            Для сохранения изменений необходимо выбрать событие
                            или настроить график
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
                    3. Инициатор события: переключились в настройку фильтра по
                    потребителям
                </div>
                <SectionWrapper title="Когда" isEdit={true}>
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
                            </div>
                        </div>
                    </Row>
                    <Row isEdit={true} isSelect={true} title="Событие">
                        <Select
                            placeholder="Выберите событие"
                            isFiltered={true}
                            items={[
                                { title: "Потребитель попал в БД" },
                                { title: "Потребитель был сдедублицирован" },
                                { title: "Потребитель попал в сегмент" },
                                { title: "Потребитель вышел из сегментации" },
                                { title: "Изменился статус подписки" },
                                {
                                    title:
                                        "Первое подтверждение мобильного телефона"
                                },
                                { title: "Изменение email" },
                                { title: "Первое подтверждение email" },
                                { title: "Обновление данных потребителя" },
                                { title: "Редактирование анкеты потребителем" },
                                { title: "Потребитель вошел на сайт" },
                                {
                                    title:
                                        "Активация секретного кода потребителем"
                                },
                                { title: "Потребитель получил приз" },
                                { title: "Изменение статуса FMCG заказа" },
                                { title: "Создание FMCG заказа" }
                            ]}
                        />
                    </Row>
                    <Row isEdit={true} isFooter={true}>
                        <Button color="gray" hasUnderline={true} disabled={true} size="large">
                            Сохранить
                        </Button>
                        <Text mode="danger">
                            Для сохранения изменений необходимо выбрать событие
                            или настроить график
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
                    4. Настроили фильтр по инициатору события
                </div>
                <SectionWrapper title="Когда" isEdit={true}>
                    <Row
                        isEdit={true}
                        isControl={true}
                        title="Период активности"
                        description="25 авг 2018 – 1 янв 2019"
                    >
                        <RadioButton name="whenBlock41-group1" checked={true}>
                            Триггер активен на протяжении всей кампании
                        </RadioButton>
                        <RadioButton name="whenBlock41-group1">
                            Запланировать период активности
                        </RadioButton>
                    </Row>
                    <Row isEdit={true} isControl={true} title="Режим запуска">
                        <RadioButton name="whenBlock41-group2" checked={true}>
                            По событию
                        </RadioButton>
                        <RadioButton name="whenBlock41-group2">
                            По графику
                        </RadioButton>
                    </Row>
                    <Row isEdit={true} isCustom={true} title="Инициатор события">
                        <div className="kit-row__control">
                            <RadioButton name="whenBlock41-group3">
                                Любой
                            </RadioButton>
                        </div>
                        <RadioButton name="whenBlock41-group3" checked={true}>
                            Настроить фильтр по потребителям
                        </RadioButton>
                        <div className="kit-row__filter kit-row__filter_bottom" />
                    </Row>
                    <Row isEdit={true} isSelect={true} title="Событие">
                        <Select
                            placeholder="Выберите событие"
                            isFiltered={true}
                            items={[
                                { title: "Потребитель попал в БД" },
                                { title: "Потребитель был сдедублицирован" },
                                { title: "Потребитель попал в сегмент" },
                                { title: "Потребитель вышел из сегментации" },
                                { title: "Изменился статус подписки" },
                                {
                                    title:
                                        "Первое подтверждение мобильного телефона"
                                },
                                { title: "Изменение email" },
                                { title: "Первое подтверждение email" },
                                { title: "Обновление данных потребителя" },
                                { title: "Редактирование анкеты потребителем" },
                                { title: "Потребитель вошел на сайт" },
                                {
                                    title:
                                        "Активация секретного кода потребителем"
                                },
                                { title: "Потребитель получил приз" },
                                { title: "Изменение статуса FMCG заказа" },
                                { title: "Создание FMCG заказа" }
                            ]}
                        />
                    </Row>
                    <Row isEdit={true} isFooter={true}>
                        <Button color="gray" hasUnderline={true} disabled={true} size="large">
                            Сохранить
                        </Button>
                        <Text mode="danger">
                            Для сохранения изменений необходимо выбрать событие
                            или настроить график
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
                    5. Выбираем событие для правила запуска
                </div>
                <SectionWrapper title="Когда" isEdit={true}>
                    <Row
                        isEdit={true}
                        isControl={true}
                        title="Период активности"
                        description="25 авг 2018 – 1 янв 2019"
                    >
                        <RadioButton name="whenBlock4-group1" checked={true}>
                            Триггер активен на протяжении всей кампании
                        </RadioButton>
                        <RadioButton name="whenBlock4-group1">
                            Запланировать период активности
                        </RadioButton>
                    </Row>
                    <Row isEdit={true} isControl={true} title="Режим запуска">
                        <RadioButton name="whenBlock4-group2" checked={true}>
                            По событию
                        </RadioButton>
                        <RadioButton name="whenBlock4-group2">
                            По графику
                        </RadioButton>
                    </Row>
                    <Row isEdit={true} isCustom={true} title="Инициатор события">
                        <div className="kit-row__control">
                            <RadioButton name="whenBlock4-group3">
                                Любой
                            </RadioButton>
                        </div>
                        <RadioButton name="whenBlock4-group3" checked={true}>
                            Настроить фильтр по потребителям
                        </RadioButton>
                        <div className="kit-row__filter kit-row__filter_bottom" />
                    </Row>
                    <Row isEdit={true} isSelect={true} title="Событие">
                        <Select
                            placeholder="Выберите событие"
                            isFiltered={true}
                            items={[
                                { title: "Потребитель попал в БД" },
                                { title: "Потребитель был сдедублицирован" },
                                { title: "Потребитель попал в сегмент" },
                                { title: "Потребитель вышел из сегментации" },
                                { title: "Изменился статус подписки" },
                                {
                                    title:
                                        "Первое подтверждение мобильного телефона"
                                },
                                { title: "Изменение email" },
                                { title: "Первое подтверждение email" },
                                { title: "Обновление данных потребителя" },
                                { title: "Редактирование анкеты потребителем" },
                                { title: "Потребитель вошел на сайт" },
                                {
                                    title:
                                        "Активация секретного кода потребителем"
                                },
                                { title: "Потребитель получил приз" },
                                { title: "Изменение статуса FMCG заказа" },
                                { title: "Создание FMCG заказа" }
                            ]}
                        />
                    </Row>
                    <Row isEdit={true} isFooter={true}>
                        <Button color="gray" hasUnderline={true} disabled={true} size="large">
                            Сохранить
                        </Button>
                        <Text mode="danger">
                            Для сохранения изменений необходимо выбрать событие
                            или настроить график
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
                    6. Выбрали событие — появились дополнительные блоки и
                    возможность сохранить правило. По умолчанию правило
                    применяется для всех событий выбранного типа, блок настройки
                    фильтра не выводится, пока не отмечен чекбокс «Настроить
                    фильтр по этому событию».
                </div>
                <SectionWrapper title="Когда" isEdit={true}>
                    <Row
                        isEdit={true}
                        isControl={true}
                        title="Период активности"
                        description="25 авг 2018 – 1 янв 2019"
                    >
                        <RadioButton name="whenBlock5-group1" checked={true}>
                            Триггер активен на протяжении всей кампании
                        </RadioButton>
                        <RadioButton name="whenBlock5-group1">
                            Запланировать период активности
                        </RadioButton>
                    </Row>
                    <Row isEdit={true} isControl={true} title="Режим запуска">
                        <RadioButton name="whenBlock5-group2" checked={true}>
                            По событию
                        </RadioButton>
                        <RadioButton name="whenBlock5-group2">
                            По графику
                        </RadioButton>
                    </Row>
                    <Row isEdit={true} isCustom={true} isFilter={true} title="Инициатор события">
                        <div className="kit-row__control">
                            <RadioButton name="whenBlock5-group3">
                                Любой
                            </RadioButton>
                        </div>
                        <RadioButton name="whenBlock5-group3" checked={true}>
                            Настроить фильтр по потребителям
                        </RadioButton>
                        <div className="kit-row__filter kit-row__filter_bottom" />
                    </Row>
                    <Row isEdit={true} isSelectChecked={true} title="Событие">
                        <Select
                            placeholder="Выберите событие"
                            isFiltered={true}
                            items={[
                                { title: "Потребитель попал в БД" },
                                { title: "Потребитель был сдедублицирован" },
                                { title: "Потребитель попал в сегмент" },
                                { title: "Потребитель вышел из сегментации" },
                                { title: "Изменился статус подписки" },
                                {
                                    title:
                                        "Первое подтверждение мобильного телефона"
                                },
                                { title: "Изменение email" },
                                { title: "Первое подтверждение email" },
                                { title: "Обновление данных потребителя" },
                                { title: "Редактирование анкеты потребителем" },
                                { title: "Потребитель вошел на сайт" },
                                {
                                    title:
                                        "Активация секретного кода потребителем"
                                },
                                { title: "Потребитель получил приз" },
                                { title: "Изменение статуса FMCG заказа" },
                                { title: "Создание FMCG заказа" }
                            ]}
                        />
                        <Checkbox text="Настроить фильтр по этому событию" />
                    </Row>
                    <Row
                        help="Текст подсказки"
                        isEdit={true}
                        isControl={true}
                        title="Время от события"
                    >
                        Активировать триггер
                        <Select
                            placeholder="Выберите"
                            items={[
                                { title: "сразу" },
                                { title: "через неделю" },
                                { title: "через месяц" }
                            ]}
                        />
                        после события
                    </Row>
                    <Row
                        help="Текст подсказки"
                        isEdit={true}
                        isControl={true}
                        title="Срок актуальности"
                    >
                        Допускается запоздание срабатывания триггера не более,
                        чем на
                        <div style={{ width: "40px" }}>
                            <Input value="10" maxLength={2} />
                        </div>
                        <Select
                            placeholder="Выберите"
                            items={[
                                { title: "минут" },
                                { title: "часов" },
                                { title: "дней" }
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
                    7. Отметили чекбокс «Настроить фильтр по этому событию»,
                    появился блок настройки фильтра для выбраного события.
                </div>
                <SectionWrapper title="Когда" isEdit={true}>
                    <Row
                        isEdit={true}
                        isControl={true}
                        title="Период активности"
                        description="25 авг 2018 – 1 янв 2019"
                    >
                        <RadioButton name="whenBlock6-group1" checked={true}>
                            Триггер активен на протяжении всей кампании
                        </RadioButton>
                        <RadioButton name="whenBlock6-group1">
                            Запланировать период активности
                        </RadioButton>
                    </Row>
                    <Row isEdit={true} isControl={true} title="Режим запуска">
                        <RadioButton name="whenBlock6-group2" checked={true}>
                            По событию
                        </RadioButton>
                        <RadioButton name="whenBlock6-group2">
                            По графику
                        </RadioButton>
                    </Row>
                    <Row isEdit={true} isCustom={true} title="Инициатор события">
                        <div className="kit-row__control">
                            <RadioButton name="whenBlock6-group3">
                                Любой
                            </RadioButton>
                        </div>
                        <RadioButton name="whenBlock6-group3" checked={true}>
                            Настроить фильтр по потребителям
                        </RadioButton>
                        <div className="kit-row__filter kit-row__filter_bottom" />
                    </Row>
                    <Row isEdit={true} isSelectChecked={true} title="Событие">
                        <Select
                            placeholder="Выберите событие"
                            isFiltered={true}
                            items={[
                                { title: "Потребитель попал в БД" },
                                { title: "Потребитель был сдедублицирован" },
                                { title: "Потребитель попал в сегмент" },
                                { title: "Потребитель вышел из сегментации" },
                                { title: "Изменился статус подписки" },
                                {
                                    title:
                                        "Первое подтверждение мобильного телефона"
                                },
                                { title: "Изменение email" },
                                { title: "Первое подтверждение email" },
                                { title: "Обновление данных потребителя" },
                                { title: "Редактирование анкеты потребителем" },
                                { title: "Потребитель вошел на сайт" },
                                {
                                    title:
                                        "Активация секретного кода потребителем"
                                },
                                { title: "Потребитель получил приз" },
                                { title: "Изменение статуса FMCG заказа" },
                                { title: "Создание FMCG заказа" }
                            ]}
                        />
                        <Checkbox
                            checked={true}
                            text="Настроить фильтр по этому событию"
                        />
                    </Row>
                    <Row
                        isEdit={true}
                        isSmallFilter={true}
                        title="Триггер сработает при попадании под фильтр по активации кодов"
                    >
                        <Select
                            placeholder="Выберите условия фильтрации"
                            items={[
                                { title: "Потребитель попал в БД" },
                                null,
                                { title: "Потребитель был сдедублицирован" },
                                { title: "Потребитель попал в сегмент" },
                                { title: "Потребитель вышел из сегментации" },
                                { title: "Изменился статус подписки" },
                                {
                                    title:
                                        "Первое подтверждение мобильного телефона"
                                },
                                null,
                                { title: "Изменение email" },
                                { title: "Первое подтверждение email" },
                                { title: "Обновление данных потребителя" },
                                { title: "Редактирование анкеты потребителем" },
                                { title: "Потребитель вошел на сайт" },
                                {
                                    disabled: true,
                                    title:
                                        "Активация секретного кода потребителем",
                                },
                                { title: "Потребитель получил приз" },
                                { title: "Изменение статуса FMCG заказа" },
                                { title: "Создание FMCG заказа" }
                            ]}
                        />
                    </Row>
                    <Row
                        help="Текст подсказки"
                        isEdit={true}
                        isControl={true}
                        title="Время от события"
                    >
                        Активировать триггер
                        <Select
                            placeholder="Выберите"
                            items={[
                                { title: "сразу" },
                                { title: "через неделю" },
                                { title: "через месяц" }
                            ]}
                        />
                        после события
                    </Row>
                    <Row
                        help="Текст подсказки"
                        isEdit={true}
                        isControl={true}
                        title="Срок актуальности"
                    >
                        Допускается запоздание срабатывания триггера не более,
                        чем на
                        <div className="kit-row__input">
                            <Input value="10" maxLength={2} />
                        </div>
                        <Select
                            placeholder="Выберите"
                            items={[
                                { title: "минут" },
                                { title: "часов" },
                                { title: "дней" }
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
                        fontSize: "16px;",
                        paddingBottom: "16px",
                        paddingLeft: "2px",
                        paddingTop: "28px",
                    }}
                >
                    8. Настроили фильтр для выбраного события, отредактировали
                    время от события и срок актуальности.
                </div>
                <SectionWrapper title="Когда" isEdit={true}>
                    <Row isEdit={true} isControl={true} title="Период активности">
                        <RadioButton name="whenBlock7-group1" checked={true}>
                            Триггер активен на протяжении всей кампании
                        </RadioButton>
                        <RadioButton name="whenBlock7-group1">
                            Запланировать период активности
                        </RadioButton>
                    </Row>
                    <Row isEdit={true} isControl={true} title="Режим запуска">
                        <RadioButton name="whenBlock7-group2" checked={true}>
                            По событию
                        </RadioButton>
                        <RadioButton name="whenBlock7-group2">
                            По графику
                        </RadioButton>
                    </Row>
                    <Row isEdit={true} isCustom={true} title="Инициатор события">
                        <div className="kit-row__control">
                            <RadioButton name="whenBlock7-group3">
                                Любой
                            </RadioButton>
                        </div>
                        <RadioButton name="whenBlock7-group3" checked={true}>
                            Настроить фильтр по потребителям
                        </RadioButton>
                        <div className="kit-row__filter kit-row__filter_bottom" />
                    </Row>
                    <Row isEdit={true} isSelectChecked={true} title="Событие">
                        <Select
                            placeholder="Выберите событие"
                            isFiltered={true}
                            items={[
                                { title: "Потребитель попал в БД" },
                                { title: "Потребитель был сдедублицирован" },
                                { title: "Потребитель попал в сегмент" },
                                { title: "Потребитель вышел из сегментации" },
                                { title: "Изменился статус подписки" },
                                {
                                    title:
                                        "Первое подтверждение мобильного телефона"
                                },
                                { title: "Изменение email" },
                                { title: "Первое подтверждение email" },
                                { title: "Обновление данных потребителя" },
                                { title: "Редактирование анкеты потребителем" },
                                { title: "Потребитель вошел на сайт" },
                                {
                                    title:
                                        "Активация секретного кода потребителем"
                                },
                                { title: "Потребитель получил приз" },
                                { title: "Изменение статуса FMCG заказа" },
                                { title: "Создание FMCG заказа" }
                            ]}
                        />
                        <Checkbox
                            checked={true}
                            text="Настроить фильтр по этому событию"
                        />
                    </Row>
                    <Row
                        isEdit={true}
                        isFilter={true}
                        title="Триггер сработает при попадании под фильтр по активации кодов"
                    >
                        &nbsp;
                    </Row>
                    <Row
                        help="Текст подсказки"
                        isEdit={true}
                        isControl={true}
                        title="Время от события"
                    >
                        Активировать триггер
                        <Select
                            placeholder="Выберите"
                            items={[{ title: "через" }]}
                        />
                        <div className="kit-row__input">
                            <Input value="10" maxLength={2} />
                        </div>
                        <Select
                            placeholder="Выберите"
                            items={[{ title: "часа" }, { title: "недели" }]}
                        />
                        после события
                    </Row>
                    <Row
                        help="Текст подсказки"
                        isEdit={true}
                        isControl={true}
                        title="Срок актуальности"
                    >
                        Допускается запоздание срабатывания триггера не более,
                        чем на
                        <div className="kit-row__input">
                            <Input value="10" maxLength={2} />
                        </div>
                        <Select
                            placeholder="Выберите"
                            items={[
                                { title: "минут" },
                                { title: "часов" },
                                { title: "дней" }
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
                        fontSize: "16px;",
                        paddingBottom: "16px",
                        paddingLeft: "2px",
                        paddingTop: "28px",
                    }}
                >
                    1 | 1. Включили запуск триггера по графику. По умолчанию
                    выбирается простой еженедельный режим, можно переключиться
                    на простой ежедневный, ежемесячный, ежегодный, а также
                    опционально — выбрать вариант «Настроить особый режим»
                </div>
                <SectionWrapper title="Когда" isEdit={true}>
                    <Row isEdit={true} isControl={true} title="Период активности">
                        <RadioButton name="whenBlock7-group1" checked={true}>
                            Триггер активен на протяжении всей кампании
                        </RadioButton>
                        <RadioButton name="whenBlock7-group1">
                            Запланировать период активности
                        </RadioButton>
                    </Row>
                    <Row isEdit={true} isControl={true} title="Режим запуска">
                        <RadioButton name="whenBlock7-group2">
                            По событию
                        </RadioButton>
                        <RadioButton name="whenBlock7-group2" checked={true}>
                            По графику
                        </RadioButton>
                    </Row>
                    <Row isEdit={true} isSelectChecked={true} title="Запускать">
                        <Select
                            placeholder="Выберите"
                            items={[
                                { title: "по дням" },
                                { title: "по месяцам" }
                            ]}
                        />
                        <Checkbox text="Настроить фильтр по этому событию" />
                    </Row>
                    <Row isEdit={true} title="Дни недели">
                        <Period
                            theme="small"
                            items={[
                                { title: "Пн", isChecked: true },
                                { title: "Вт" },
                                { title: "Ср" },
                                { title: "Чт" },
                                { title: "Пт" },
                                { title: "Сб" },
                                { title: "Вс" }
                            ]}
                        />
                    </Row>
                    <Row isEdit={true} title="Время">
                        <TimeField hours={12} minutes={23}  />
                    </Row>
                    <Row
                        help="Текст подсказки"
                        isEdit={true}
                        isControl={true}
                        title="Срок актуальности"
                    >
                        Допускается запоздание срабатывания триггера не более,
                        чем на
                        <div className="kit-row__input">
                            <Input value="10" maxLength={2} />
                        </div>
                        <Select
                            placeholder="Выберите"
                            items={[
                                { title: "минут" },
                                { title: "часов" },
                                { title: "дней" }
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
                        fontSize: "16px;",
                        paddingBottom: "16px",
                        paddingLeft: "2px",
                        paddingTop: "28px",
                    }}
                >
                    1 | 2. Выбрали вариант «Настроить особый режим», появились
                    дополнительные опции для подробной настройки запуска
                    триггера. В случае особого режима, варианты в списке «Режим
                    запуска» меняются с «Каждый день» на «По дням», с «Каждую
                    неделю» на «По неделям», с «Каждый месяц» на «По месяцам» и
                    с «Каждый гол» на «По годам». Пример режима по дням
                    (повторять запуск каждые Х дней).
                </div>
                <SectionWrapper title="Когда" isEdit={true}>
                    <Row isEdit={true} isControl={true} title="Период активности">
                        <RadioButton name="whenBlock8-group1" checked={true}>
                            Триггер активен на протяжении всей кампании
                        </RadioButton>
                        <RadioButton name="whenBlock8-group1">
                            Запланировать период активности
                        </RadioButton>
                    </Row>
                    <Row isEdit={true} isControl={true} title="Режим запуска">
                        <RadioButton name="whenBlock8-group2">
                            По событию
                        </RadioButton>
                        <RadioButton name="whenBlock8-group2" checked={true}>
                            По графику
                        </RadioButton>
                    </Row>
                    <Row isEdit={true} isSelectChecked={true} title="Запускать">
                        <Select
                            placeholder="Выберите"
                            items={[
                                { title: "по дням" },
                                { title: "по месяцам" }
                            ]}
                        />
                        <Checkbox
                            checked={true}
                            text="Настроить фильтр по этому событию"
                        />
                    </Row>
                    <Row isEdit={true} isControl={true} title="Повторять запуск каждую">
                        <div className="kit-row__input">
                            <Input value="1" maxLength={2} />
                        </div>
                        неделю с момента старт
                    </Row>
                    <Row isEdit={true} title="Время">
                        <TimeField hours={12} minutes={23}  />
                    </Row>
                    <Row
                        help="Текст подсказки"
                        isEdit={true}
                        isControl={true}
                        title="Срок актуальности"
                    >
                        Допускается запоздание срабатывания триггера не более,
                        чем на
                        <div className="kit-row__input">
                            <Input value="10" maxLength={2} />
                        </div>
                        <Select
                            placeholder="Выберите"
                            items={[
                                { title: "минут" },
                                { title: "часов" },
                                { title: "дней" }
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
                        fontSize: "16px;",
                        paddingBottom: "16px",
                        paddingLeft: "2px",
                        paddingTop: "28px",
                    }}
                >
                    1 | 3. Пример режима по неделям. Повторять запуск каждые Х
                    недель в определенные дни недели.
                </div>
                <SectionWrapper title="Когда" isEdit={true}>
                    <Row isEdit={true} isControl={true} title="Период активности">
                        <RadioButton name="whenBlock9-group1" checked={true}>
                            Триггер активен на протяжении всей кампании
                        </RadioButton>
                        <RadioButton name="whenBlock9-group1">
                            Запланировать период активности
                        </RadioButton>
                    </Row>
                    <Row isEdit={true} isControl={true} title="Режим запуска">
                        <RadioButton name="whenBlock9-group2">
                            По событию
                        </RadioButton>
                        <RadioButton name="whenBlock9-group2" checked={true}>
                            По графику
                        </RadioButton>
                    </Row>
                    <Row isEdit={true} isSelectChecked={true} title="Запускать">
                        <Select
                            placeholder="Выберите"
                            items={[
                                { title: "по дням" },
                                { title: "по месяцам" }
                            ]}
                        />
                        <Checkbox
                            checked={true}
                            text="Настроить фильтр по этому событию"
                        />
                    </Row>
                    <Row isEdit={true} isControl={true} title="Повторять запуск каждую">
                        <div className="kit-row__input">
                            <Input value="1" maxLength={2} />
                        </div>
                        неделю с момента старт
                    </Row>
                    <Row isEdit={true} title="Дни недели">
                        <Period
                            theme="small"
                            items={[
                                { title: "Пн", isChecked: true },
                                { title: "Вт" },
                                { title: "Ср" },
                                { title: "Чт" },
                                { title: "Пт" },
                                { title: "Сб" },
                                { title: "Вс" }
                            ]}
                        />
                    </Row>
                    <Row isEdit={true} title="Время">
                        <TimeField hours={12} minutes={23}  />
                    </Row>
                    <Row
                        help="Текст подсказки"
                        isEdit={true}
                        isControl={true}
                        title="Срок актуальности"
                    >
                        Допускается запоздание срабатывания триггера не более,
                        чем на
                        <div className="kit-row__input">
                            <Input value="10" maxLength={2} />
                        </div>
                        <Select
                            placeholder="Выберите"
                            items={[
                                { title: "минут" },
                                { title: "часов" },
                                { title: "дней" }
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
                        fontSize: "16px;",
                        paddingBottom: "16px",
                        paddingLeft: "2px",
                        paddingTop: "28px",
                    }}
                >
                    1 | 4. Пример режима по месяцам. Повторять запуск каждые Х
                    месяцев по конкретным датам.
                </div>
                <SectionWrapper title="Когда" isEdit={true}>
                    <Row isEdit={true} isControl={true} title="Период активности">
                        <RadioButton name="whenBlock10-group1" checked={true}>
                            Триггер активен на протяжении всей кампании
                        </RadioButton>
                        <RadioButton name="whenBlock10-group1">
                            Запланировать период активности
                        </RadioButton>
                    </Row>
                    <Row isEdit={true} isControl={true} title="Режим запуска">
                        <RadioButton name="whenBlock10-group2">
                            По событию
                        </RadioButton>
                        <RadioButton name="whenBlock10-group2" checked={true}>
                            По графику
                        </RadioButton>
                    </Row>
                    <Row isEdit={true} isSelectChecked={true} title="Запускать">
                        <Select
                            placeholder="Выберите"
                            items={[
                                { title: "по дням" },
                                { title: "по месяцам" }
                            ]}
                        />
                        <Checkbox
                            checked={true}
                            text="Настроить фильтр по этому событию"
                        />
                    </Row>
                    <Row isEdit={true} isControl={true} title="Повторять запуск каждый">
                        <div className="kit-row__input">
                            <Input value="1" maxLength={2} />
                        </div>
                        неделю с момента старт
                    </Row>
                    <Row isEdit={true} isSelectCalendar={true} title="Дни повтора">
                        <Select
                            placeholder="Выберите дни повтора"
                            items={[
                                { title: "Последний" },
                                { title: "По конкретным датам" },
                                null,
                                { title: "Первый" },
                                { title: "Второй" },
                                { title: "Третий" },
                                { title: "Четвёртый" },
                                { title: "Пятый" },
                                null,
                                { title: "Последний" }
                            ]}
                        />
                        <Period
                            theme="small"
                            items={[
                                { title: "1", isChecked: true },
                                { title: "2" },
                                { title: "3" },
                                { title: "4" },
                                { title: "5" },
                                { title: "6" },
                                { title: "7" },
                                { title: "8" },
                                { title: "9" },
                                { title: "10" },
                                { title: "11" },
                                { title: "12" },
                                { title: "13" },
                                { title: "14" },
                                { title: "15" },
                                { title: "16" },
                                { title: "17" },
                                { title: "18" },
                                { title: "19" },
                                { title: "20" },
                                { title: "21" },
                                { title: "22" },
                                { title: "23" },
                                { title: "24" },
                                { title: "25" },
                                { title: "26" },
                                { title: "27" },
                                { title: "28" },
                                { title: "29" },
                                { title: "30" },
                                { title: "31" }
                            ]}
                        />
                    </Row>
                    <Row isEdit={true} title="Время">
                        <TimeField hours={12} minutes={23}  />
                    </Row>
                    <Row
                        help="Текст подсказки"
                        isEdit={true}
                        isControl={true}
                        title="Срок актуальности"
                    >
                        Допускается запоздание срабатывания триггера не более,
                        чем на
                        <div className="kit-row__input">
                            <Input value="10" maxLength={2} />
                        </div>
                        <Select
                            placeholder="Выберите"
                            items={[
                                { title: "минут" },
                                { title: "часов" },
                                { title: "дней" }
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
                        fontSize: "16px;",
                        paddingBottom: "16px",
                        paddingLeft: "2px",
                        paddingTop: "28px",
                    }}
                >
                    1 | 5. Кроме режима по конкретным датам, пользователь может
                    выбрать из списка других режимов. Во всех режимах, кроме
                    режима по датам, справа появляется дополнительный список для
                    выбора дня недели. Возможна любая комбинация значений этих
                    двух контролов.
                </div>
                <SectionWrapper title="Когда" isEdit={true}>
                    <Row isEdit={true} isControl={true} title="Период активности">
                        <RadioButton name="whenBlock11-group1" checked={true}>
                            Триггер активен на протяжении всей кампании
                        </RadioButton>
                        <RadioButton name="whenBlock11-group1">
                            Запланировать период активности
                        </RadioButton>
                    </Row>
                    <Row isEdit={true} isControl={true} title="Режим запуска">
                        <RadioButton name="whenBlock11-group2">
                            По событию
                        </RadioButton>
                        <RadioButton name="whenBlock11-group2" checked={true}>
                            По графику
                        </RadioButton>
                    </Row>
                    <Row isEdit={true} isSelectChecked={true} title="Запускать">
                        <Select
                            placeholder="Выберите"
                            items={[
                                { title: "по дням" },
                                { title: "по месяцам" }
                            ]}
                        />
                        <Checkbox
                            checked={true}
                            text="Настроить фильтр по этому событию"
                        />
                    </Row>
                    <Row isEdit={true} isControl={true} title="Повторять запуск каждый">
                        <div className="kit-row__input">
                            <Input value="1" maxLength={2} />
                        </div>
                        неделю с момента старт
                    </Row>
                    <Row isEdit={true} isSelectDouble={true} title="Дни повтора">
                        <Select
                            placeholder="Выберите дни повтора"
                            items={[
                                { title: "Последний" },
                                { title: "По конкретным датам" },
                                null,
                                { title: "Первый" },
                                { title: "Второй" },
                                { title: "Третий" },
                                { title: "Четвёртый" },
                                { title: "Пятый" },
                                null,
                                { title: "Последний" }
                            ]}
                        />
                        <Select
                            placeholder="Выберите дни повтора"
                            items={[
                                { title: "Последний" },
                                { title: "понедельник" },
                                null,
                                { title: "вторник" },
                                { title: "среда" },
                                { title: "четверг" },
                                { title: "пятница" },
                                { title: "суббота" },
                                { title: "воскресенье" },
                                null,
                                { title: "день месяца" },
                                { title: "будний день месяца" },
                                { title: "выходной день месяца" }
                            ]}
                        />
                    </Row>
                    <Row isEdit={true} title="Время">
                        <TimeField hours={12} minutes={23}  />
                    </Row>
                    <Row
                        help="Текст подсказки"
                        isEdit={true}
                        isControl={true}
                        title="Срок актуальности"
                    >
                        Допускается запоздание срабатывания триггера не более,
                        чем на
                        <div className="kit-row__input">
                            <Input value="10" maxLength={2} />
                        </div>
                        <Select
                            placeholder="Выберите"
                            items={[
                                { title: "минут" },
                                { title: "часов" },
                                { title: "дней" }
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
                        fontSize: "16px;",
                        paddingBottom: "16px",
                        paddingLeft: "2px",
                        paddingTop: "28px",
                    }}
                >
                    1 | 7. Пример режима по годам. Повторять запуск каждые Х лет
                    по конкретным месяцам. Блок «Дни повтора» содержит все те же
                    опции, что и в варианте по месяцам
                </div>
                <SectionWrapper title="Когда" isEdit={true}>
                    <Row isEdit={true} isControl={true} title="Период активности">
                        <RadioButton name="whenBlock12-group1" checked={true}>
                            Триггер активен на протяжении всей кампании
                        </RadioButton>
                        <RadioButton name="whenBlock12-group1">
                            Запланировать период активности
                        </RadioButton>
                    </Row>
                    <Row isEdit={true} isControl={true} title="Режим запуска">
                        <RadioButton name="whenBlock12-group2">
                            По событию
                        </RadioButton>
                        <RadioButton name="whenBlock12-group2" checked={true}>
                            По графику
                        </RadioButton>
                    </Row>
                    <Row isEdit={true} isSelectChecked={true} title="Запускать">
                        <Select
                            placeholder="Выберите"
                            items={[
                                { title: "по дням" },
                                { title: "по месяцам" }
                            ]}
                        />
                        <Checkbox
                            checked={true}
                            text="Настроить фильтр по этому событию"
                        />
                    </Row>
                    <Row isEdit={true} isControl={true} title="Повторять запуск каждый">
                        <div className="kit-row__input">
                            <Input value="1" maxLength={2} />
                        </div>
                        неделю с момента старт
                    </Row>
                    <Row isEdit={true} isControl={true} title="Месяцы повтора">
                        <Period
                            items={[
                                { title: "Янв", isChecked: true },
                                { title: "Фев" },
                                { title: "Мар" },
                                { title: "Апр" },
                                { title: "Май" },
                                { title: "Июн" },
                                { title: "Июл" },
                                { title: "Авг" },
                                { title: "Сен" },
                                { title: "Окт" },
                                { title: "Ноя" },
                                { title: "Дек" }
                            ]}
                        />
                    </Row>
                    <Row isEdit={true} isSelectCalendar={true} title="Дни повтора">
                        <Select
                            placeholder="Выберите дни повтора"
                            items={[
                                { title: "Последний" },
                                { title: "По конкретным датам" },
                                null,
                                { title: "Первый" },
                                { title: "Второй" },
                                { title: "Третий" },
                                { title: "Четвёртый" },
                                { title: "Пятый" },
                                null,
                                { title: "Последний" }
                            ]}
                        />
                        <Period
                            theme="small"
                            items={[
                                { title: "1", isChecked: true },
                                { title: "2" },
                                { title: "3" },
                                { title: "4" },
                                { title: "5" },
                                { title: "6" },
                                { title: "7" },
                                { title: "8" },
                                { title: "9" },
                                { title: "10" },
                                { title: "11" },
                                { title: "12" },
                                { title: "13" },
                                { title: "14" },
                                { title: "15" },
                                { title: "16" },
                                { title: "17" },
                                { title: "18" },
                                { title: "19" },
                                { title: "20" },
                                { title: "21" },
                                { title: "22" },
                                { title: "23" },
                                { title: "24" },
                                { title: "25" },
                                { title: "26" },
                                { title: "27" },
                                { title: "28" },
                                { title: "29" },
                                { title: "30" },
                                { title: "31" }
                            ]}
                        />
                    </Row>
                    <Row isEdit={true} title="Время">
                        <TimeField hours={12} minutes={23}  />
                    </Row>
                    <Row
                        help="Текст подсказки"
                        isEdit={true}
                        isControl={true}
                        title="Срок актуальности"
                    >
                        Допускается запоздание срабатывания триггера не более,
                        чем на
                        <div className="kit-row__input">
                            <Input value="10" maxLength={2} />
                        </div>
                        <Select
                            placeholder="Выберите"
                            items={[
                                { title: "минут" },
                                { title: "часов" },
                                { title: "дней" }
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
                        fontSize: "16px;",
                        paddingBottom: "16px",
                        paddingLeft: "2px",
                        paddingTop: "28px",
                    }}
                >
                    1 | 9. Пример режима по годам. Повторять запуск каждые Х лет
                    по конкретным месяцам. Блок «Дни повтора» содержит все те же
                    опции, что и в варианте по месяцам
                </div>
                <SectionWrapper title="Когда" isEdit={true}>
                    <Row isEdit={true} isControl={true} title="Период активности">
                        <RadioButton name="whenBlock13-group1" checked={true}>
                            Триггер активен на протяжении всей кампании
                        </RadioButton>
                        <RadioButton name="whenBlock13-group1">
                            Запланировать период активности
                        </RadioButton>
                    </Row>
                    <Row isEdit={true} isControl={true} title="Режим запуска">
                        <RadioButton name="whenBlock13-group2">
                            По событию
                        </RadioButton>
                        <RadioButton name="whenBlock13-group2" checked={true}>
                            По графику
                        </RadioButton>
                    </Row>
                    <Row isEdit={true} isSelectChecked={true} title="Запускать">
                        <Select
                            placeholder="Выберите"
                            items={[
                                { title: "по дням" },
                                { title: "по месяцам" }
                            ]}
                        />
                        <Checkbox
                            checked={true}
                            text="Настроить фильтр по этому событию"
                        />
                    </Row>
                    <Row isEdit={true} isControl={true} title="Повторять запуск каждый">
                        <div className="kit-row__input">
                            <Input value="1" maxLength={2} />
                        </div>
                        неделю с момента старт
                    </Row>
                    <Row isEdit={true} isControl={true} title="Месяцы повтора">
                        <Period
                            items={[
                                { title: "Янв", isChecked: true },
                                { title: "Фев" },
                                { title: "Мар" },
                                { title: "Апр" },
                                { title: "Май" },
                                { title: "Июн" },
                                { title: "Июл" },
                                { title: "Авг" },
                                { title: "Сен" },
                                { title: "Окт" },
                                { title: "Ноя" },
                                { title: "Дек" }
                            ]}
                        />
                    </Row>
                    <Row isEdit={true} isSelectDouble={true} title="Дни повтора">
                        <Select
                            placeholder="Выберите дни повтора"
                            items={[
                                { title: "Последний" },
                                { title: "По конкретным датам" },
                                null,
                                { title: "Первый" },
                                { title: "Второй" },
                                { title: "Третий" },
                                { title: "Четвёртый" },
                                { title: "Пятый" },
                                null,
                                { title: "Последний" }
                            ]}
                        />
                        <Select
                            placeholder="Выберите дни повтора"
                            items={[
                                { title: "Последний" },
                                { title: "понедельник" },
                                null,
                                { title: "вторник" },
                                { title: "среда" },
                                { title: "четверг" },
                                { title: "пятница" },
                                { title: "суббота" },
                                { title: "воскресенье" },
                                null,
                                { title: "день месяца" },
                                { title: "будний день месяца" },
                                { title: "выходной день месяца" }
                            ]}
                        />
                    </Row>
                    <Row isEdit={true} title="Время">
                        <TimeField hours={12} minutes={23}  />
                    </Row>
                    <Row
                        help="Текст подсказки"
                        isEdit={true}
                        isControl={true}
                        title="Срок актуальности"
                    >
                        Допускается запоздание срабатывания триггера не более,
                        чем на
                        <div className="kit-row__input">
                            <Input value="10" maxLength={2} />
                        </div>
                        <Select
                            placeholder="Выберите"
                            items={[
                                { title: "минут" },
                                { title: "часов" },
                                { title: "дней" }
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

ReactDOM.render(<When />, entryElement);
