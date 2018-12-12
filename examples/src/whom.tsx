import * as React from "react";
import * as ReactDOM from "react-dom";
import { Button } from "@mindbox/ui-kit/components/Button/Button";
import { SectionWrapper } from "@mindbox/ui-kit/components/SectionWrapper/SectionWrapper";
import { Row } from "@mindbox/ui-kit/components/Row/Row";
import { Page } from "@mindbox/ui-kit/components/Page/Page";
import { Text } from "@mindbox/ui-kit/components/Text/Text";
import { RadioButton } from "@mindbox/ui-kit/components/RadioButton/RadioButton";
import { Select } from "@mindbox/ui-kit/components/Select/Select";


const entryElement = document.createElement("div");
document.body.appendChild(entryElement);

class Whom extends React.Component<{}> {
    public render() {
        return (
            <Page
                title='Триггер №15'
                description='Добавьте короткое описание триггера'
                hasTag
                isDevelop
                cantPlaying
                isPlaying
            >
                <div style={{color: '#8b572a', fontSize: '16px;', paddingTop: '28px', paddingLeft: '2px', paddingBottom: '16px'}}>1. Состояние по умолчанию. Пока не указано событие, сегмент или фильтр, сохранить потребителей нельзя.</div>
                <SectionWrapper title='Кому' isEdit>
                    <Row isEdit title='Период активности'>
                        <div className='row__segment'>
                            <RadioButton name='rgroup1' checked>Каждый раз при попадании в фильтр триггера</RadioButton>
                        </div>
                        <RadioButton name='rgroup1'>Периодически</RadioButton>
                    </Row>
                    <Row isEdit title='Число срабатываний'>
                        <div className='row__segment'>
                            <RadioButton name='rgroup2' checked>Неограничено</RadioButton>
                        </div>
                        <RadioButton name='rgroup2'>Ограничить</RadioButton>
                    </Row>
                    <Row isEdit title='Цель триггера'>
                        <div className='row__select_long'>
                            <Select
                                placeholder='Выберите цель триггера'
                                defaultValue='Потребитель из события в блоке «Когда»'
                                items={[
                                    { title: 'Потребитель из события в блоке «Когда»' },
                                    { title: 'Потребитель был сдедублицирован' },
                                    { title: 'Потребитель попал в сегмент' },
                                    { title: 'Потребитель вышел из сегментации' },
                                ]}
                            />
                        </div>
                        <div className='row__desc'>
                            Триггер применится к конкретному потребителю
                        </div>
                    </Row>
                    <div className='row__footer'>
                        <div className='row__submit'>
                            <Button color="gray" hasUnderline disabled size="large" >Сохранить</Button>
                        </div>
                        <Text mode='danger'>Для сохранения изменений необходимо выбрать событие в блоке «Когда»</Text>
                    </div>
                </SectionWrapper>

                <div style={{color: '#8b572a', fontSize: '16px;', paddingTop: '28px', paddingLeft: '2px', paddingBottom: '16px'}}>
                    2. Если в блоке «Когда» уже настроено событие, в режиме «Потребители из события» выводится его название, появляется возможность сохранить блок.
                </div>
                <SectionWrapper title='Кому' isEdit>
                    <Row isEdit title='Период активности'>
                        <div className='row__segment'>
                            <RadioButton name='rgroup11' checked>Каждый раз при попадании в фильтр триггера</RadioButton>
                        </div>
                        <RadioButton name='rgroup11'>Периодически</RadioButton>
                    </Row>
                    <Row isEdit title='Число срабатываний'>
                        <div className='row__segment'>
                            <RadioButton name='rgroup21' checked>Неограничено</RadioButton>
                        </div>
                        <RadioButton name='rgroup21'>Ограничить</RadioButton>
                    </Row>
                    <Row isEdit title='Цель триггера'>
                        <div className='row__select_long'>
                            <Select
                                placeholder='Выберите цель триггера'
                                defaultValue='Потребитель из события в блоке «Когда»'
                                items={[
                                    { title: 'Потребитель из события в блоке «Когда»' },
                                    { title: 'Потребитель был сдедублицирован' },
                                    { title: 'Потребитель попал в сегмент' },
                                    { title: 'Потребитель вышел из сегментации' },
                                ]}
                            />
                        </div>
                        <div className='row__desc'>
                            Триггер применится к конкретному потребителю
                        </div>
                    </Row>
                    <Row
                        isEdit title='Событие'
                        text='Активация секретного кода потребителем'
                    />
                    <div className='row__footer'>
                        <div className='row__submit'>
                            <Button color="gray" hasUnderline size="large" >Сохранить</Button>
                        </div>
                    </div>
                </SectionWrapper>

                <div style={{color: '#8b572a', fontSize: '16px;', paddingTop: '28px', paddingLeft: '2px', paddingBottom: '16px'}}>
                    3. Переключились на задание группы потребителей по сегменту базы.
                </div>
                <SectionWrapper title='Кому' isEdit>
                    <Row isEdit title='Период активности'>
                        <div className='row__segment'>
                            <RadioButton name='rgroup12' checked>Каждый раз при попадании в фильтр триггера</RadioButton>
                        </div>
                        <RadioButton name='rgroup12'>Периодически</RadioButton>
                    </Row>
                    <Row isEdit title='Число срабатываний'>
                        <div className='row__segment'>
                            <RadioButton name='rgroup22' checked>Неограничено</RadioButton>
                        </div>
                        <RadioButton name='rgroup22'>Ограничить</RadioButton>
                    </Row>
                    <Row isEdit title='Цель триггера'>
                        <div className='row__select_long'>
                            <Select
                                placeholder='Выберите цель триггера'
                                defaultValue='Потребители из фильтра (массовая отправка)'
                                items={[
                                    { title: 'Потребитель из события в блоке «Когда»' },
                                    { title: 'Потребитель был сдедублицирован' },
                                    { title: 'Потребитель попал в сегмент' },
                                    { title: 'Потребитель вышел из сегментации' },
                                ]}
                            />
                        </div>
                        <div className='row__desc row__desc_danger'>
                            Триггер применится к группе потребителей, которая попадет под выбранный сегмент
                        </div>
                    </Row>
                    <Row isEdit title='Сегмент'>
                        <div className='row__select_long'>
                            <Select
                                placeholder='Выберите сегмент'
                                items={[
                                    { title: 'Обеспеченная молодежь' },
                                    { title: 'Бедная молодежь' },
                                ]}
                            />
                        </div>
                    </Row>
                    <div className='row__footer'>
                        <div className='row__submit'>
                            <Button color="gray" hasUnderline disabled size="large" >Сохранить</Button>
                        </div>
                        <Text mode='danger'>Для сохранения изменений необходимо выбрать сегмент</Text>
                    </div>
                </SectionWrapper>

                <div style={{color: '#8b572a', fontSize: '16px;', paddingTop: '28px', paddingLeft: '2px', paddingBottom: '16px'}}>
                    4. Выбрали сегмент, появилась возможность сохранить блок.
                </div>
                <SectionWrapper title='Кому' isEdit>
                    <Row isEdit title='Период активности'>
                        <div className='row__segment'>
                            <RadioButton name='rgroup13' checked>Каждый раз при попадании в фильтр триггера</RadioButton>
                        </div>
                        <RadioButton name='rgroup13'>Периодически</RadioButton>
                    </Row>
                    <Row isEdit title='Число срабатываний'>
                        <div className='row__segment'>
                            <RadioButton name='rgroup23' checked>Неограничено</RadioButton>
                        </div>
                        <RadioButton name='rgroup23'>Ограничить</RadioButton>
                    </Row>
                    <Row isEdit title='Цель триггера'>
                        <div className='row__select_long'>
                            <Select
                                placeholder='Выберите цель триггера'
                                defaultValue='Потребители из фильтра (массовая отправка)'
                                items={[
                                    { title: 'Потребитель из события в блоке «Когда»' },
                                    { title: 'Потребитель был сдедублицирован' },
                                    { title: 'Потребитель попал в сегмент' },
                                    { title: 'Потребитель вышел из сегментации' },
                                ]}
                            />
                        </div>
                        <div className='row__desc row__desc_danger'>
                            Триггер применится к группе потребителей, которая попадет под выбранный сегмент
                        </div>
                    </Row>
                    <Row isEdit title='Сегмент'>
                        <div className='row__select_long'>
                            <Select
                                placeholder='Выберите сегмент'
                                defaultValue='Обеспеченная молодежь'
                                items={[
                                    { title: 'Обеспеченная молодежь' },
                                    { title: 'Бедная молодежь' },
                                ]}
                            />
                        </div>
                    </Row>
                    <div className='row__footer'>
                        <div className='row__submit'>
                            <Button color="gray" hasUnderline size="large" >Сохранить</Button>
                        </div>
                    </div>
                </SectionWrapper>

                <div style={{color: '#8b572a', fontSize: '16px;', paddingTop: '28px', paddingLeft: '2px', paddingBottom: '16px'}}>
                    5. Переключились на задание группы потребителей по фильтру.
                </div>
                <SectionWrapper title='Кому' isEdit>
                    <Row isEdit title='Период активности'>
                        <div className='row__segment'>
                            <RadioButton name='rgroup14' checked>Каждый раз при попадании в фильтр триггера</RadioButton>
                        </div>
                        <RadioButton name='rgroup14'>Периодически</RadioButton>
                    </Row>
                    <Row isEdit title='Число срабатываний'>
                        <div className='row__segment'>
                            <RadioButton name='rgroup24' checked>Неограничено</RadioButton>
                        </div>
                        <RadioButton name='rgroup24'>Ограничить</RadioButton>
                    </Row>
                    <Row isEdit title='Цель триггера'>
                        <div className='row__select_long'>
                            <Select
                                placeholder='Выберите цель триггера'
                                defaultValue='Потребители из фильтра (массовая отправка)'
                                items={[
                                    { title: 'Потребитель из события в блоке «Когда»' },
                                    { title: 'Потребитель был сдедублицирован' },
                                    { title: 'Потребитель попал в сегмент' },
                                    { title: 'Потребитель вышел из сегментации' },
                                ]}
                            />
                        </div>
                        <div className='row__desc row__desc_danger'>
                            Триггер применится к группе потребителей, которая попадет под выбранный сегмент
                        </div>
                    </Row>
                    <Row isEdit title='Сегмент'>
                        <div className='row__extended-ecent'>
                            <div className='row__extended-inner'>
                                <Select
                                    placeholder='Выберите условие фильтрации'
                                    size='small'
                                    items={[
                                        { title: 'Потребитель попал в БД' },
                                        { title: 'Изменение статуса FMCG заказа' },
                                        { title: 'Создание FMCG заказа' }
                                    ]}
                                />
                            </div>
                        </div>
                    </Row>
                    <div className='row__footer'>
                        <div className='row__submit'>
                            <Button color="gray" hasUnderline disabled size="large" >Сохранить</Button>
                        </div>
                        <Text mode='danger'>Для сохранения изменений необходимо настроить фильтр</Text>
                    </div>
                </SectionWrapper>

                <div style={{color: '#8b572a', fontSize: '16px;', paddingTop: '28px', paddingLeft: '2px', paddingBottom: '16px'}}>
                    6. Настроили фильтр, появилась возможность сохранить блок.
                </div>
                <SectionWrapper title='Кому' isEdit>
                    <Row isEdit title='Период активности'>
                        <div className='row__segment'>
                            <RadioButton name='rgroup15' checked>Каждый раз при попадании в фильтр триггера</RadioButton>
                        </div>
                        <RadioButton name='rgroup15'>Периодически</RadioButton>
                    </Row>
                    <Row isEdit title='Число срабатываний'>
                        <div className='row__segment'>
                            <RadioButton name='rgroup25' checked>Неограничено</RadioButton>
                        </div>
                        <RadioButton name='rgroup25'>Ограничить</RadioButton>
                    </Row>
                    <Row isEdit title='Цель триггера'>
                        <div className='row__select_long'>
                            <Select
                                placeholder='Выберите цель триггера'
                                defaultValue='Потребители из фильтра (массовая отправка)'
                                items={[
                                    { title: 'Потребитель из события в блоке «Когда»' },
                                    { title: 'Потребитель был сдедублицирован' },
                                    { title: 'Потребитель попал в сегмент' },
                                    { title: 'Потребитель вышел из сегментации' },
                                ]}
                            />
                        </div>
                        <div className='row__desc row__desc_danger'>
                            Триггер применится к группе потребителей, которая попадет под выбранный сегмент
                        </div>
                    </Row>
                    <Row isEdit title='Сегмент'>
                        <div className='row__filter' />
                    </Row>
                    <div className='row__footer'>
                        <div className='row__submit'>
                            <Button color="gray" hasUnderline size="large" >Сохранить</Button>
                        </div>
                    </div>
                </SectionWrapper>
            </Page>
        );
    }
}

ReactDOM.render(
    <Whom />,
    entryElement
)
