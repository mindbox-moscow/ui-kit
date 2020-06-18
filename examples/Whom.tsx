import "./styles.scss";

import * as React from "react";
import * as ReactDOM from "react-dom";

import { Button as NewButton } from "@mindbox-moscow/ui-components";

import { SectionWrapper } from "../src/SectionWrapper/SectionWrapper";
import { Page } from "../src/Page/Page";
import { Row } from "../src/Row/Row";
import { Text } from "../src/Text/Text";
import { RadioButton } from "../src/RadioButton/RadioButton";
import { Select } from "../src/Select/Select";
import { COLORS } from "../src/utils/constants";

class Whom extends React.Component<{}> {
    public render() {
        return (
            <Page
                title="Триггер №15"
                description="Добавьте короткое описание триггера"
                hasBadge
                badgeTitle="Триггер в разработке"
                badgeBgColor={COLORS.Blue}
            >
                <div
                    style={{
                        color: "#8b572a",
                        fontSize: "16px",
                        paddingTop: "28px",
                        paddingLeft: "2px",
                        paddingBottom: "16px"
                    }}
                >
                    1. Состояние по умолчанию. Пока не указано событие, сегмент
                    или фильтр, сохранить потребителей нельзя.
                </div>
                <SectionWrapper title="Кому" isEdit>
                    <Row isEdit title="Период активности" isControl>
                        <RadioButton name="rgroup1" checked>
                            Каждый раз при попадании в фильтр триггера
                        </RadioButton>
                        <RadioButton name="rgroup1">Периодически</RadioButton>
                    </Row>
                    <Row isEdit title="Число срабатываний" isControl>
                        <RadioButton name="rgroup2" checked>
                            Неограничено
                        </RadioButton>
                        <RadioButton name="rgroup2">Ограничить</RadioButton>
                    </Row>
                    <Row
                        isEdit
                        isSelect
                        title="Цель триггера"
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
                                { title: "Потребитель был сдедублицирован" },
                                { title: "Потребитель попал в сегмент" },
                                { title: "Потребитель вышел из сегментации" }
                            ]}
                        />
                    </Row>
                    <Row isEdit isFooter>
                        <NewButton
                            disabled
                            size="large"
                            type="primary"
                        >
                            Сохранить
                        </NewButton>
                        <Text mode="danger">
                            Для сохранения изменений необходимо выбрать событие
                            в блоке «Когда»
                        </Text>
                    </Row>
                </SectionWrapper>

                <div
                    style={{
                        color: "#8b572a",
                        fontSize: "16px",
                        paddingTop: "28px",
                        paddingLeft: "2px",
                        paddingBottom: "16px"
                    }}
                >
                    2. Если в блоке «Когда» уже настроено событие, в режиме
                    «Потребители из события» выводится его название, появляется
                    возможность сохранить блок.
                </div>
                <SectionWrapper title="Кому" isEdit>
                    <Row isEdit title="Период активности" isControl>
                        <RadioButton name="rgroup11" checked>
                            Каждый раз при попадании в фильтр триггера
                        </RadioButton>
                        <RadioButton name="rgroup11">Периодически</RadioButton>
                    </Row>
                    <Row isEdit title="Число срабатываний" isControl>
                        <RadioButton name="rgroup21" checked>
                            Неограничено
                        </RadioButton>
                        <RadioButton name="rgroup21">Ограничить</RadioButton>
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
                                { title: "Потребитель был сдедублицирован" },
                                { title: "Потребитель попал в сегмент" },
                                { title: "Потребитель вышел из сегментации" }
                            ]}
                        />
                    </Row>
                    <Row isEdit title="Событие" isText>
                        Активация секретного кода потребителем
                    </Row>
                    <Row isEdit isFooter>
                        <NewButton
                            size="large"
                            type="primary"
                        >
                            Сохранить
                        </NewButton>
                    </Row>
                </SectionWrapper>

                <div
                    style={{
                        color: "#8b572a",
                        fontSize: "16px",
                        paddingTop: "28px",
                        paddingLeft: "2px",
                        paddingBottom: "16px"
                    }}
                >
                    3. Переключились на задание группы потребителей по сегменту
                    базы.
                </div>
                <SectionWrapper title="Кому" isEdit>
                    <Row isEdit title="Период активности" isControl>
                        <RadioButton name="rgroup12" checked>
                            Каждый раз при попадании в фильтр триггера
                        </RadioButton>
                        <RadioButton name="rgroup12">Периодически</RadioButton>
                    </Row>
                    <Row isEdit title="Число срабатываний" isControl>
                        <RadioButton name="rgroup22" checked>
                            Неограничено
                        </RadioButton>
                        <RadioButton name="rgroup22">Ограничить</RadioButton>
                    </Row>
                    <Row
                        title="Цель триггера"
                        description="Триггер применится к группе потребителей, которая попадет под выбранный сегмент"
                        isSelect
                        isEdit
                        isDanger
                    >
                        <Select
                            placeholder="Выберите цель триггера"
                            defaultValue="Потребители из фильтра (массовая отправка)"
                            items={[
                                {
                                    title:
                                        "Потребитель из события в блоке «Когда»"
                                },
                                { title: "Потребитель был сдедублицирован" },
                                { title: "Потребитель попал в сегмент" },
                                { title: "Потребитель вышел из сегментации" }
                            ]}
                        />
                    </Row>
                    <Row isSelect isEdit title="Сегмент">
                        <Select
                            placeholder="Выберите сегмент"
                            items={[
                                { title: "Обеспеченная молодежь" },
                                { title: "Бедная молодежь" }
                            ]}
                        />
                    </Row>
                    <Row isEdit isFooter>
                        <NewButton
                            disabled
                            size="large"
                            type="primary"
                        >
                            Сохранить
                        </NewButton>
                        <Text mode="danger">
                            Для сохранения изменений необходимо выбрать сегмент
                        </Text>
                    </Row>
                </SectionWrapper>

                <div
                    style={{
                        color: "#8b572a",
                        fontSize: "16px",
                        paddingTop: "28px",
                        paddingLeft: "2px",
                        paddingBottom: "16px"
                    }}
                >
                    4. Выбрали сегмент, появилась возможность сохранить блок.
                </div>
                <SectionWrapper title="Кому" isEdit>
                    <Row isEdit title="Период активности" isControl>
                        <RadioButton name="rgroup13" checked>
                            Каждый раз при попадании в фильтр триггера
                        </RadioButton>
                        <RadioButton name="rgroup13">Периодически</RadioButton>
                    </Row>
                    <Row isEdit title="Число срабатываний" isControl>
                        <div className="kit-row__segment">
                            <RadioButton name="rgroup23" checked>
                                Неограничено
                            </RadioButton>
                        </div>
                        <RadioButton name="rgroup23">Ограничить</RadioButton>
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
                                { title: "Потребитель был сдедублицирован" },
                                { title: "Потребитель попал в сегмент" },
                                { title: "Потребитель вышел из сегментации" }
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
                        <NewButton
                            size="large"
                            type="primary"
                        >
                            Сохранить
                        </NewButton>
                    </Row>
                </SectionWrapper>

                <div
                    style={{
                        color: "#8b572a",
                        fontSize: "16px",
                        paddingTop: "28px",
                        paddingLeft: "2px",
                        paddingBottom: "16px"
                    }}
                >
                    5. Переключились на задание группы потребителей по фильтру.
                </div>
                <SectionWrapper title="Кому" isEdit>
                    <Row isEdit title="Период активности" isControl>
                        <RadioButton name="rgroup14" checked>
                            Каждый раз при попадании в фильтр триггера
                        </RadioButton>
                        <RadioButton name="rgroup14">Периодически</RadioButton>
                    </Row>
                    <Row isEdit title="Число срабатываний" isControl>
                        <RadioButton name="rgroup24" checked>
                            Неограничено
                        </RadioButton>
                        <RadioButton name="rgroup24">Ограничить</RadioButton>
                    </Row>
                    <Row
                        title="Цель триггера"
                        description="Триггер применится к группе потребителей, которая попадет под выбранный сегмент"
                        isEdit
                        isSelect
                        isDanger
                    >
                        <Select
                            placeholder="Выберите цель триггера"
                            defaultValue="Потребители из фильтра (массовая отправка)"
                            items={[
                                {
                                    title:
                                        "Потребитель из события в блоке «Когда»"
                                },
                                { title: "Потребитель был сдедублицирован" },
                                { title: "Потребитель попал в сегмент" },
                                { title: "Потребитель вышел из сегментации" }
                            ]}
                        />
                    </Row>
                    <Row title="Сегмент" isEdit isSmallFilter>
                        <Select
                            placeholder="Выберите условие фильтрации"
                            size="small"
                            items={[
                                { title: "Потребитель попал в БД" },
                                { title: "Изменение статуса FMCG заказа" },
                                { title: "Создание FMCG заказа" }
                            ]}
                        />
                    </Row>
                    <Row isEdit isFooter>
                        <NewButton
                            disabled
                            size="large"
                            type="primary"
                        >
                            Сохранить
                        </NewButton>
                        <Text mode="danger">
                            Для сохранения изменений необходимо настроить фильтр
                        </Text>
                    </Row>
                </SectionWrapper>

                <div
                    style={{
                        color: "#8b572a",
                        fontSize: "16px",
                        paddingTop: "28px",
                        paddingLeft: "2px",
                        paddingBottom: "16px"
                    }}
                >
                    6. Настроили фильтр, появилась возможность сохранить блок.
                </div>
                <SectionWrapper title="Кому" isEdit>
                    <Row isEdit title="Период активности" isControl>
                        <RadioButton name="rgroup15" checked>
                            Каждый раз при попадании в фильтр триггера
                        </RadioButton>
                        <RadioButton name="rgroup15">Периодически</RadioButton>
                    </Row>
                    <Row isEdit title="Число срабатываний" isControl>
                        <RadioButton name="rgroup25" checked>
                            Неограничено
                        </RadioButton>
                        <RadioButton name="rgroup25">Ограничить</RadioButton>
                    </Row>
                    <Row
                        title="Цель триггера"
                        description="Триггер применится к группе потребителей, которая попадет под выбранный сегмент"
                        isEdit
                        isSelect
                        isDanger
                    >
                        <Select
                            placeholder="Выберите цель триггера"
                            defaultValue="Потребители из фильтра (массовая отправка)"
                            items={[
                                {
                                    title:
                                        "Потребитель из события в блоке «Когда»"
                                },
                                { title: "Потребитель был сдедублицирован" },
                                { title: "Потребитель попал в сегмент" },
                                { title: "Потребитель вышел из сегментации" }
                            ]}
                        />
                    </Row>
                    <Row isEdit title="Сегмент" isFilter>
                        {" "}
                    </Row>
                    <Row isEdit isFooter>
                        <NewButton
                            size="large"
                            type="primary"
                        >
                            Сохранить
                        </NewButton>
                    </Row>
                </SectionWrapper>
            </Page>
        );
    }
}

const entryElement = document.createElement("div");
document.body.appendChild(entryElement);

ReactDOM.render(<Whom />, entryElement);
