import * as React from "react";
import { Button } from "../../components/Button/Button";
import { SectionWrapper } from "../../components/SectionWrapper/SectionWrapper";
import { Row } from "../../components/Row/Row";
import { Page } from "../../components/Page/Page";
import { Text } from "../../components/Text/Text";
import { RadioButton } from "../../components/RadioButton/RadioButton";
import { Select } from "../../components/Select/Select";
import { DateField } from "../../components/DateField/DateField";
import { TimeField } from "../../components/TimeField/TimeField";
import { Checkbox } from "../../components/Checkbox/Checkbox";
import { Input } from "../../components/Input/Input";

export class When extends React.Component<{}> {
    state = {
        whatEdit: false,
        whomEdit: false,
        whenEdit: true,

        selectedActivePeriod: false,
        extendedEeventTrigger: false,
        isSelectedEvent: false,
    }

    toggleWhatState = () => this.setState({ whatEdit: !this.state.whatEdit })
    toggleWhomState = () => this.setState({ whomEdit: !this.state.whomEdit })
    toggleWhenState = () => this.setState({ whenEdit: !this.state.whenEdit })

    public render() {
        const { whatEdit, whomEdit, whenEdit } = this.state;

        return (
            <Page
                title='Триггер №15'
                description='Добавьте короткое описание триггера'
                hasTag
                isDevelop
                cantPlaying
                isPlaying
            >
                <div style={{ color: '#8b572a', fontSize: '16px;', paddingTop: '28px', paddingLeft: '2px', paddingBottom: '16px' }}>
                    1. Состояние по умолчанию. Пока не выбрано событие, сохранить правило нельзя.
                </div>
                <SectionWrapper title='Когда' isEdit={whenEdit} onChangeState={this.toggleWhenState}>
                    {
                        whenEdit ? (
                            <>
                                <Row isEdit isControl description='25 авг 2018 – 1 янв 2019' title='Период активности'>
                                    <RadioButton name='whenBlock1-group1' checked={true}>Триггер активен на протяжении всей кампании</RadioButton>
                                    <RadioButton name='whenBlock1-group1'>Запланировать период активности</RadioButton>
                                </Row>
                                <Row isEdit isControl title='Режим запуска'>
                                    <RadioButton name='whenBlock1-group2' checked={true}>По событию</RadioButton>
                                    <RadioButton name='whenBlock1-group2'>По графику</RadioButton>
                                </Row>
                                <Row isEdit isControl title='Инициатор события'>
                                    <RadioButton name='whenBlock1-group3' checked={true}>Любой</RadioButton>
                                    <RadioButton name='whenBlock1-group3'>Настроить фильтр по потребителям</RadioButton>
                                </Row>
                                <Row isEdit isSelect title='Событие'>
                                    <Select
                                        placeholder='Выберите событие'
                                        items={[
                                            { title: 'Потребитель попал в БД' },
                                            null,
                                            { title: 'Потребитель был сдедублицирован' },
                                            { title: 'Потребитель попал в сегмент' },
                                            { title: 'Потребитель вышел из сегментации' },
                                            { title: 'Изменился статус подписки' },
                                            { title: 'Первое подтверждение мобильного телефона' },
                                            null,
                                            { title: 'Изменение email' },
                                            { title: 'Первое подтверждение email' },
                                            { title: 'Обновление данных потребителя' },
                                            { title: 'Редактирование анкеты потребителем' },
                                            { title: 'Потребитель вошел на сайт' },
                                            { title: 'Активация секретного кода потребителем', disabled: true },
                                            { title: 'Потребитель получил приз' },
                                            { title: 'Изменение статуса FMCG заказа' },
                                            { title: 'Создание FMCG заказа' }
                                        ]}
                                    />
                                </Row>
                                <Row isEdit isFooter>
                                    <Button color="gray" hasUnderline disabled size="large" >Сохранить</Button>
                                    <Text mode='danger'>Для сохранения изменений необходимо выбрать событие или настроить график</Text>
                                </Row>
                            </>
                        )
                            : (
                                <>
                                    <Row title='Период активности'>Триггер активен на протяжении всей кампании: 25 авг 2018 – 1 янв 2019</Row>
                                    <Row title='Инициатор события'>Любой</Row>
                                    <Row title='Запуск'><Text mode='danger'>Настройте режим запуска триггера</Text></Row>
                                </>
                            )
                    }
                </SectionWrapper>
                <div style={{ color: '#8b572a', fontSize: '16px;', paddingTop: '28px', paddingLeft: '2px', paddingBottom: '16px' }}>
                    2. Переключились в планирование периода активности
                </div>
                <SectionWrapper title='Когда' isEdit={whenEdit} onChangeState={this.toggleWhenState}>
                    {
                        whenEdit ? (
                            <>
                                <Row isEdit isControl title='Период активности'>
                                    <RadioButton name='whenBlock2-group1'>Триггер активен на протяжении всей кампании</RadioButton>
                                    <RadioButton name='whenBlock2-group1' checked={true}>Запланировать период активности</RadioButton>
                                </Row>
                                <Row isEdit isControl title='Дата и время старта'>
                                    <DateField value='21.07.2018' />
                                    <TimeField hours={12} minutes={23} />
                                </Row>
                                <Row isEdit isControl title='Дата окончания'>
                                    <DateField disabled value='21.07.2019' />
                                    <TimeField disabled hours={12} minutes={20} />
                                    <Checkbox checked text='Триггер активен до конца кампании' />
                                </Row>
                                <Row isEdit isControl title='Режим запуска'>
                                    <RadioButton name='whenBlock2-group2' checked={true}>По событию</RadioButton>
                                    <RadioButton name='whenBlock2-group2'>По графику</RadioButton>
                                </Row>
                                <Row isEdit isControl title='Инициатор события'>
                                    <RadioButton name='whenBlock2-group3' checked={true}>Любой</RadioButton>
                                    <RadioButton name='whenBlock2-group3'>Настроить фильтр по потребителям</RadioButton>
                                </Row>
                                <Row isEdit isSelect title='Событие'>
                                    <Select
                                        placeholder='Выберите событие'
                                        items={[
                                            { title: 'Потребитель попал в БД' },
                                            null,
                                            { title: 'Потребитель был сдедублицирован' },
                                            { title: 'Потребитель попал в сегмент' },
                                            { title: 'Потребитель вышел из сегментации' },
                                            { title: 'Изменился статус подписки' },
                                            { title: 'Первое подтверждение мобильного телефона' },
                                            null,
                                            { title: 'Изменение email' },
                                            { title: 'Первое подтверждение email' },
                                            { title: 'Обновление данных потребителя' },
                                            { title: 'Редактирование анкеты потребителем' },
                                            { title: 'Потребитель вошел на сайт' },
                                            { title: 'Активация секретного кода потребителем', disabled: true },
                                            { title: 'Потребитель получил приз' },
                                            { title: 'Изменение статуса FMCG заказа' },
                                            { title: 'Создание FMCG заказа' }
                                        ]}
                                    />
                                </Row>
                                <Row isEdit isFooter>
                                    <Button color="gray" hasUnderline disabled size="large" >Сохранить</Button>
                                    <Text mode='danger'>Для сохранения изменений необходимо выбрать событие или настроить график</Text>
                                </Row>
                            </>
                        )
                            : (
                                <>
                                    <Row title='Период активности'>Триггер активен на протяжении всей кампании: 25 авг 2018 – 1 янв 2019</Row>
                                    <Row title='Инициатор события'>Любой</Row>
                                    <Row title='Запуск'><Text mode='danger'>Настройте режим запуска триггера</Text></Row>
                                </>
                            )
                    }
                </SectionWrapper>
                <div style={{ color: '#8b572a', fontSize: '16px;', paddingTop: '28px', paddingLeft: '2px', paddingBottom: '16px' }}>
                    3. Инициатор события: переключились в настройку фильтра по потребителям
                </div>
                <SectionWrapper title='Когда' isEdit={whenEdit} onChangeState={this.toggleWhenState}>
                    {
                        whenEdit ? (
                            <>
                                <Row isEdit isControl description='25 авг 2018 – 1 янв 2019' title='Период активности'>
                                    <RadioButton name='whenBlock3-group1' checked={true}>Триггер активен на протяжении всей кампании</RadioButton>
                                    <RadioButton name='whenBlock3-group1'>Запланировать период активности</RadioButton>
                                </Row>
                                <Row isEdit isControl title='Режим запуска'>
                                    <RadioButton name='whenBlock3-group2' checked={true}>По событию</RadioButton>
                                    <RadioButton name='whenBlock3-group2'>По графику</RadioButton>
                                </Row>
                                <Row isEdit isControlWhithFilter title='Инициатор события'>
                                        <RadioButton name='whenBlock3-group3'>Любой</RadioButton>
                                        <RadioButton name='whenBlock3-group3' checked={true}>Настроить фильтр по потребителям</RadioButton>
                                                <Select
                                                    placeholder='Выберите событие'
                                                    size='small'
                                                    items={[
                                                        { title: 'Потребитель попал в БД' },
                                                        null,
                                                        { title: 'Потребитель был сдедублицирован' },
                                                        { title: 'Потребитель попал в сегмент' },
                                                        { title: 'Потребитель вышел из сегментации' },
                                                        { title: 'Изменился статус подписки' },
                                                        { title: 'Первое подтверждение мобильного телефона' },
                                                        null,
                                                        { title: 'Изменение email' },
                                                        { title: 'Первое подтверждение email' },
                                                        { title: 'Обновление данных потребителя' },
                                                        { title: 'Редактирование анкеты потребителем' },
                                                        { title: 'Потребитель вошел на сайт' },
                                                        { title: 'Активация секретного кода потребителем', disabled: true },
                                                        { title: 'Потребитель получил приз' },
                                                        { title: 'Изменение статуса FMCG заказа' },
                                                        { title: 'Создание FMCG заказа' }
                                                    ]}
                                                />
                                </Row>
                                <Row isEdit isSelect title='Событие'>
                                    <Select
                                        placeholder='Выберите событие'
                                        items={[
                                            { title: 'Потребитель попал в БД' },
                                            null,
                                            { title: 'Потребитель был сдедублицирован' },
                                            { title: 'Потребитель попал в сегмент' },
                                            { title: 'Потребитель вышел из сегментации' },
                                            { title: 'Изменился статус подписки' },
                                            { title: 'Первое подтверждение мобильного телефона' },
                                            null,
                                            { title: 'Изменение email' },
                                            { title: 'Первое подтверждение email' },
                                            { title: 'Обновление данных потребителя' },
                                            { title: 'Редактирование анкеты потребителем' },
                                            { title: 'Потребитель вошел на сайт' },
                                            { title: 'Активация секретного кода потребителем', disabled: true },
                                            { title: 'Потребитель получил приз' },
                                            { title: 'Изменение статуса FMCG заказа' },
                                            { title: 'Создание FMCG заказа' }
                                        ]}
                                    />
                                </Row>
                                <Row isEdit isFooter>
                                    <Button color="gray" hasUnderline disabled size="large" >Сохранить</Button>
                                    <Text mode='danger'>Для сохранения изменений необходимо выбрать событие или настроить график</Text>
                                </Row>
                            </>
                        )
                            : (
                                <>
                                    <Row title='Период активности'>Триггер активен на протяжении всей кампании: 25 авг 2018 – 1 янв 2019</Row>
                                    <Row title='Инициатор события'>Любой</Row>
                                    <Row title='Запуск'><Text mode='danger'>Настройте режим запуска триггера</Text></Row>
                                </>
                            )
                    }
                </SectionWrapper>
                <div style={{ color: '#8b572a', fontSize: '16px;', paddingTop: '28px', paddingLeft: '2px', paddingBottom: '16px' }}>
                    4. Настроили фильтр по инициатору события
                </div>
                <div style={{ color: '#8b572a', fontSize: '16px;', paddingTop: '28px', paddingLeft: '2px', paddingBottom: '16px' }}>
                    5. Выбираем событие для правила запуска
                </div>
                <SectionWrapper title='Когда' isEdit={whenEdit} onChangeState={this.toggleWhenState}>
                    {
                        whenEdit ? (
                            <>
                                <Row isEdit isControl title='Период активности'>
                                    <RadioButton name='whenBlock4-group1' checked={true}>Триггер активен на протяжении всей кампании</RadioButton>
                                    <RadioButton name='whenBlock4-group1'>Запланировать период активности</RadioButton>
                                </Row>
                                <Row isEdit isControl title='Режим запуска'>
                                    <RadioButton name='whenBlock4-group2' checked={true}>По событию</RadioButton>
                                    <RadioButton name='whenBlock4-group2'>По графику</RadioButton>
                                </Row>
                                <Row isEdit isControl isFilter title='Инициатор события'>
                                    <RadioButton name='whenBlock4-group3'>Любой</RadioButton>
                                    <RadioButton name='whenBlock4-group3' checked={true}>Настроить фильтр по потребителям</RadioButton>
                                    <div />
                                </Row>
                                <Row isEdit isSelect title='Событие'>
                                    <Select
                                        placeholder='Выберите событие'
                                        items={[
                                            { title: 'Потребитель попал в БД' },
                                            null,
                                            { title: 'Потребитель был сдедублицирован' },
                                            { title: 'Потребитель попал в сегмент' },
                                            { title: 'Потребитель вышел из сегментации' },
                                            { title: 'Изменился статус подписки' },
                                            { title: 'Первое подтверждение мобильного телефона' },
                                            null,
                                            { title: 'Изменение email' },
                                            { title: 'Первое подтверждение email' },
                                            { title: 'Обновление данных потребителя' },
                                            { title: 'Редактирование анкеты потребителем' },
                                            { title: 'Потребитель вошел на сайт' },
                                            { title: 'Активация секретного кода потребителем', disabled: true },
                                            { title: 'Потребитель получил приз' },
                                            { title: 'Изменение статуса FMCG заказа' },
                                            { title: 'Создание FMCG заказа' }
                                        ]}
                                    />
                                </Row>
                                <Row isEdit isFooter>
                                    <Button color="gray" hasUnderline disabled size="large" >Сохранить</Button>
                                    <Text mode='danger'>Для сохранения изменений необходимо выбрать событие или настроить график</Text>
                                </Row>
                            </>
                        )
                            : (
                                <>
                                    <Row title='Период активности'>Триггер активен на протяжении всей кампании: 25 авг 2018 – 1 янв 2019</Row>
                                    <Row title='Инициатор события'>Любой</Row>
                                    <Row title='Запуск'><Text mode='danger'>Настройте режим запуска триггера</Text></Row>
                                </>
                            )
                    }
                </SectionWrapper>
                <div style={{ color: '#8b572a', fontSize: '16px;', paddingTop: '28px', paddingLeft: '2px', paddingBottom: '16px' }}>
                    6. Выбрали событие — появились дополнительные блоки и возможность сохранить правило.
                    По умолчанию правило применяется для всех событий выбранного типа, блок настройки фильтра не выводится,
                    пока не отмечен чекбокс «Настроить фильтр по этому событию».
                </div>
                <SectionWrapper title='Когда' isEdit={whenEdit} onChangeState={this.toggleWhenState}>
                    {
                        whenEdit ? (
                            <>
                                <Row isEdit isControl title='Период активности'>
                                    <RadioButton name='whenBlock5-group1' checked={true}>Триггер активен на протяжении всей кампании</RadioButton>
                                    <RadioButton name='whenBlock5-group1'>Запланировать период активности</RadioButton>
                                </Row>
                                <Row isEdit isControl title='Режим запуска'>
                                    <RadioButton name='whenBlock5-group2' checked={true}>По событию</RadioButton>
                                    <RadioButton name='whenBlock5-group2'>По графику</RadioButton>
                                </Row>
                                <Row isEdit isControl isFilter title='Инициатор события'>
                                    <RadioButton name='whenBlock5-group3'>Любой</RadioButton>
                                    <RadioButton name='whenBlock5-group3' checked={true}>Настроить фильтр по потребителям</RadioButton>
                                    <div />
                                </Row>
                                <Row isEdit isSelect title='Событие'>
                                        <Select
                                            placeholder='Выберите событие'
                                            items={[
                                                { title: 'Потребитель попал в БД' },
                                                null,
                                                { title: 'Потребитель был сдедублицирован' },
                                                { title: 'Потребитель попал в сегмент' },
                                                { title: 'Потребитель вышел из сегментации' },
                                                { title: 'Изменился статус подписки' },
                                                { title: 'Первое подтверждение мобильного телефона' },
                                                null,
                                                { title: 'Изменение email' },
                                                { title: 'Первое подтверждение email' },
                                                { title: 'Обновление данных потребителя' },
                                                { title: 'Редактирование анкеты потребителем' },
                                                { title: 'Потребитель вошел на сайт' },
                                                { title: 'Активация секретного кода потребителем', disabled: true },
                                                { title: 'Потребитель получил приз' },
                                                { title: 'Изменение статуса FMCG заказа' },
                                                { title: 'Создание FMCG заказа' }
                                            ]}
                                        />
                                    <div className='row__desk'>
                                        <Checkbox text='Настроить фильтр по этому событию' />
                                    </div>
                                </Row>
                                <Row isEdit isControl title='Время от события'>
                                    Активировать триггер
                                    <Select
                                        placeholder='Выберите'
                                        items={[
                                            { title: 'сразу' },
                                            { title: 'через неделю' },
                                            { title: 'через месяц' },
                                        ]}
                                    />
                                    после события
                                </Row>
                                <Row isEdit isControl title='Срок актуальности'>
                                    Допускается запоздание срабатывания триггера не более, чем на
                                    <div style={{ width: '40px' }}> 
                                        <Input defaultValue='10' maxLength={2} />
                                    </div>
                                    <Select
                                        placeholder='Выберите'
                                        items={[
                                            { title: 'минут' },
                                            { title: 'часов' },
                                            { title: 'дней' },
                                        ]}
                                    />
                                </Row>
                                <Row isEdit isFooter>
                                    <Button color="gray" hasUnderline size="large" >Сохранить</Button>
                                </Row>
                            </>
                        )
                            : (
                                <>
                                    <Row title='Период активности'>Триггер активен на протяжении всей кампании: 25 авг 2018 – 1 янв 2019</Row>
                                    <Row title='Инициатор события'>Любой</Row>
                                    <Row title='Запуск'><Text mode='danger'>Настройте режим запуска триггера</Text></Row>
                                </>
                            )
                    }
                </SectionWrapper>
                <div style={{ color: '#8b572a', fontSize: '16px;', paddingTop: '28px', paddingLeft: '2px', paddingBottom: '16px' }}>
                    7. Отметили чекбокс «Настроить фильтр по этому событию»,
                    появился блок настройки фильтра для выбраного события.
                </div>
                <SectionWrapper title='Когда' isEdit={whenEdit} onChangeState={this.toggleWhenState}>
                    {
                        whenEdit ? (
                            <>
                                <Row isEdit isControl title='Период активности'>
                                    <RadioButton name='whenBlock6-group1' checked={true}>Триггер активен на протяжении всей кампании</RadioButton>
                                    <RadioButton name='whenBlock6-group1'>Запланировать период активности</RadioButton>
                                </Row>
                                <Row isEdit isControl title='Режим запуска'>
                                    <RadioButton name='whenBlock6-group2' checked={true}>По событию</RadioButton>
                                    <RadioButton name='whenBlock6-group2'>По графику</RadioButton>
                                </Row>
                                <Row isEdit isControl isFilter title='Инициатор события'>
                                    <RadioButton name='whenBlock6-group3'>Любой</RadioButton>
                                    <RadioButton name='whenBlock6-group3' checked={true}>Настроить фильтр по потребителям</RadioButton>
                                    <div />
                                </Row>
                                <Row isEdit isSelect title='Событие'>
                                    <Select
                                        placeholder='Выберите событие'
                                        items={[
                                            { title: 'Потребитель попал в БД' },
                                            null,
                                            { title: 'Потребитель был сдедублицирован' },
                                            { title: 'Потребитель попал в сегмент' },
                                            { title: 'Потребитель вышел из сегментации' },
                                            { title: 'Изменился статус подписки' },
                                            { title: 'Первое подтверждение мобильного телефона' },
                                            null,
                                            { title: 'Изменение email' },
                                            { title: 'Первое подтверждение email' },
                                            { title: 'Обновление данных потребителя' },
                                            { title: 'Редактирование анкеты потребителем' },
                                            { title: 'Потребитель вошел на сайт' },
                                            { title: 'Активация секретного кода потребителем', disabled: true },
                                            { title: 'Потребитель получил приз' },
                                            { title: 'Изменение статуса FMCG заказа' },
                                            { title: 'Создание FMCG заказа' }
                                        ]}
                                    />
                                    <div className='row__desk'>
                                        <Checkbox checked text='Настроить фильтр по этому событию' />
                                    </div>
                                </Row>
                                <Row isEdit isSelect title='Триггер сработает при попадании под фильтр по активации кодов'>
                                        <Select
                                            placeholder='Выберите событие'
                                            size='small'
                                            items={[
                                                { title: 'Потребитель попал в БД' },
                                                null,
                                                { title: 'Потребитель был сдедублицирован' },
                                                { title: 'Потребитель попал в сегмент' },
                                                { title: 'Потребитель вышел из сегментации' },
                                                { title: 'Изменился статус подписки' },
                                                { title: 'Первое подтверждение мобильного телефона' },
                                                null,
                                                { title: 'Изменение email' },
                                                { title: 'Первое подтверждение email' },
                                                { title: 'Обновление данных потребителя' },
                                                { title: 'Редактирование анкеты потребителем' },
                                                { title: 'Потребитель вошел на сайт' },
                                                { title: 'Активация секретного кода потребителем', disabled: true },
                                                { title: 'Потребитель получил приз' },
                                                { title: 'Изменение статуса FMCG заказа' },
                                                { title: 'Создание FMCG заказа' }
                                            ]}
                                        />
                                </Row>
                                <Row isEdit isControl title='Время от события'>
                                    Активировать триггер
                                    <Select
                                        placeholder='Выберите'
                                        items={[
                                            { title: 'сразу' },
                                            { title: 'через неделю' },
                                            { title: 'через месяц' },
                                        ]}
                                    />
                                    после события
                                </Row>
                                <Row isEdit isControl title='Срок актуальности'>
                                        Допускается запоздание срабатывания триггера не более, чем на
                                        <div style={{ width: '40px' }}> 
                                            <Input defaultValue='10' maxLength={2} />
                                        </div>
                                        <Select
                                            placeholder='Выберите'
                                            items={[
                                                { title: 'минут' },
                                                { title: 'часов' },
                                                { title: 'дней' },
                                            ]}
                                        />
                                </Row>
                                <Row isEdit isFooter>
                                    <Button color="gray" hasUnderline size="large" >Сохранить</Button>
                                </Row>
                            </>
                        )
                            : (
                                <>
                                    <Row title='Период активности'>Триггер активен на протяжении всей кампании: 25 авг 2018 – 1 янв 2019</Row>
                                    <Row title='Инициатор события'>Любой</Row>
                                    <Row title='Запуск'><Text mode='danger'>Настройте режим запуска триггера</Text></Row>
                                </>
                            )
                    }
                </SectionWrapper>
                <SectionWrapper title='Кому' isEdit={whomEdit} onChangeState={this.toggleWhomState}>
                    {whomEdit ? (
                        <>
                                <Row isEdit title='Период активности'>
                                    <div className='row__segment'>
                                        <RadioButton name='group21' checked={true}>Каждый раз при попадании в фильтр триггера</RadioButton>
                                    </div>
                                    <RadioButton name='group21'>Периодически</RadioButton>
                                </Row>
                                <Row isEdit title='Число срабатываний'>
                                    <div className='row__segment'>
                                        <RadioButton name='group22' checked={true}>Неограничено</RadioButton>
                                    </div>
                                    <div>
                                        <RadioButton name='group22'>Ограничить</RadioButton>
                                    </div>
                                </Row>
                                <Row isEdit title='Цель триггера'>
                                    <div className='row__select'>
                                        <Select
                                            placeholder='Выберите цель триггера'
                                            defaultValue='Потребитель из события в блоке «Когда»'
                                            items={[
                                                { title: 'Потребитель из события в блоке «Когда»' },
                                                null,
                                                { title: 'Потребитель был сдедублицирован' },
                                                { title: 'Потребитель попал в сегмент' },
                                                { title: 'Потребитель вышел из сегментации' },
                                                { title: 'Изменился статус подписки' },
                                                { title: 'Первое подтверждение мобильного телефона' },
                                                null,
                                                { title: 'Изменение email' },
                                                { title: 'Первое подтверждение email' },
                                                { title: 'Обновление данных потребителя' },
                                                { title: 'Редактирование анкеты потребителем' },
                                                { title: 'Потребитель вошел на сайт' },
                                                { title: 'Активация секретного кода потребителем', disabled: true },
                                                { title: 'Потребитель получил приз' },
                                                { title: 'Изменение статуса FMCG заказа' },
                                                { title: 'Создание FMCG заказа' }
                                            ]}
                                        />
                                    </div>
                                    <div className='row__desk'>
                                        Триггер применится к конкретному потребителю
                                    </div>
                                </Row>
                                <div className='row__footer'>
                                    <div className='row__submit'>
                                        <Button color="gray" hasUnderline disabled size="large" >Сохранить</Button>
                                    </div>
                                    <Text mode='danger'>Для сохранения изменений необходимо выбрать событие в блоке «Когда»</Text>
                                </div>
                            </>
                    ) : (
                        <>
                            <Row title='Применять к потребителю'>Каждый раз при попадании в фильтр триггера</Row>
                            <Row title='Число срабатываний'>Неограничено</Row>
                            <Row title='Цель триггера'>Настройте потребителей, к которым будут применяться действия триггера</Row>
                        </>
                    )}
                </SectionWrapper>
                <SectionWrapper title='Что' isEdit={whatEdit} onChangeState={this.toggleWhatState}>
                    {whatEdit ? (
                        <>
                            <Row isEdit title='Действие 1'>
                                <div className='row__select'>
                                    <Select
                                        placeholder='Выберите действие'
                                        isFiltered
                                        items={[
                                            { title: 'Потребитель из события в блоке «Когда»' },
                                            { title: 'Потребитель был сдедублицирован' },
                                            { title: 'Потребитель попал в сегмент' },
                                            { title: 'Потребитель вышел из сегментации' },
                                            { title: 'Изменился статус подписки' },
                                            { title: 'Первое подтверждение мобильного телефона' },
                                            { title: 'Изменение email' },
                                            { title: 'Первое подтверждение email' },
                                            { title: 'Обновление данных потребителя' },
                                            { title: 'Редактирование анкеты потребителем' },
                                            { title: 'Потребитель вошел на сайт' },
                                            { title: 'Активация секретного кода потребителем' },
                                            { title: 'Потребитель получил приз' },
                                            { title: 'Изменение статуса FMCG заказа' },
                                            { title: 'Создание FMCG заказа' }
                                        ]}
                                    />
                                </div>
                            </Row>
                            <div className='row__footer'>
                                <div className='row__submit'>
                                    <Button color="gray" hasUnderline disabled size="large" >Сохранить</Button>
                                </div>
                                <Text mode='danger'>Для сохранения изменений необходимо добавить хотя бы одно действие</Text>
                            </div>
                        </>
                    ) : (
                        <Row title='Действие'>Настройте одно или несколько действий триггера</Row>
                    )}
                </SectionWrapper>
            </Page>
        );
    }
}