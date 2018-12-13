import * as React from "react";
import { Button } from "../../components/Button/Button";
import { SectionWrapper } from "../../components/SectionWrapper/SectionWrapper";
import { Row } from "../../components/Row/Row";
import { Text } from "../../components/Text/Text";
import { RadioButton } from "../../components/RadioButton/RadioButton";
import { Select } from "../../components/Select/Select";
import { DateField } from "../../components/DateField/DateField";
import { TimeField } from "../../components/TimeField/TimeField";
import { Checkbox } from "../../components/Checkbox/Checkbox";
import { Input } from "../../components/Input/Input";

export class When extends React.Component<{}> {
    public render() {
        return (
            <>
                <div style={{ color: '#8b572a', fontSize: '16px;', paddingTop: '28px', paddingLeft: '2px', paddingBottom: '16px' }}>
                    1. Состояние по умолчанию. Пока не выбрано событие, сохранить правило нельзя.
                </div>
                <SectionWrapper title='Когда' isEdit>
                    <Row isEdit isControl description='25 авг 2018 – 1 янв 2019' title='Период активности'>
                        <RadioButton name='whenBlock1-group1' checked>Триггер активен на протяжении всей кампании</RadioButton>
                        <RadioButton name='whenBlock1-group1'>Запланировать период активности</RadioButton>
                    </Row>
                    <Row isEdit isControl title='Режим запуска'>
                        <RadioButton name='whenBlock1-group2' checked>По событию</RadioButton>
                        <RadioButton name='whenBlock1-group2'>По графику</RadioButton>
                    </Row>
                    <Row isEdit isControl title='Инициатор события'>
                        <RadioButton name='whenBlock1-group3' checked>Любой</RadioButton>
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
                </SectionWrapper>
                <div style={{ color: '#8b572a', fontSize: '16px;', paddingTop: '28px', paddingLeft: '2px', paddingBottom: '16px' }}>
                    2. Переключились в планирование периода активности
                </div>
                <SectionWrapper title='Когда' isEdit>
                    <Row isEdit isControl title='Период активности'>
                        <RadioButton name='whenBlock2-group1'>Триггер активен на протяжении всей кампании</RadioButton>
                        <RadioButton name='whenBlock2-group1' checked>Запланировать период активности</RadioButton>
                    </Row>
                    <Row isEdit isControl title='Дата и время старта'>
                        <DateField defaultDate={new Date('07/21/2019')} />
                        <TimeField hours={12} minutes={23} />
                    </Row>
                    <Row isEdit isControl title='Дата окончания'>
                        <DateField disabled defaultDate={new Date('07/21/2019')} />
                        <TimeField disabled hours={12} minutes={20} />
                        <Checkbox checked text='Триггер активен до конца кампании' />
                    </Row>
                    <Row isEdit isControl title='Режим запуска'>
                        <RadioButton name='whenBlock2-group2' checked>По событию</RadioButton>
                        <RadioButton name='whenBlock2-group2'>По графику</RadioButton>
                    </Row>
                    <Row isEdit isControl title='Инициатор события'>
                        <RadioButton name='whenBlock2-group3' checked>Любой</RadioButton>
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
                </SectionWrapper>
                <div style={{ color: '#8b572a', fontSize: '16px;', paddingTop: '28px', paddingLeft: '2px', paddingBottom: '16px' }}>
                    3. Инициатор события: переключились в настройку фильтра по потребителям
                </div>
                <SectionWrapper title='Когда' isEdit>
                    <Row isEdit isControl description='25 авг 2018 – 1 янв 2019' title='Период активности'>
                        <RadioButton name='whenBlock3-group1' checked>Триггер активен на протяжении всей кампании</RadioButton>
                        <RadioButton name='whenBlock3-group1'>Запланировать период активности</RadioButton>
                    </Row>
                    <Row isEdit isControl title='Режим запуска'>
                        <RadioButton name='whenBlock3-group2' checked>По событию</RadioButton>
                        <RadioButton name='whenBlock3-group2'>По графику</RadioButton>
                    </Row>
                    <Row isEdit isCustom title='Инициатор события'>
                        <div className='row__control'>
                            <RadioButton name='whenBlock3-group3'>Любой</RadioButton>
                        </div>
                        <RadioButton name='whenBlock3-group3' checked>Настроить фильтр по потребителям</RadioButton>
                        <div className='row__small-filter row__small-filter_bottom'>
                            <div className='row__filter-inner'>
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
                            </div>
                        </div>
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
                </SectionWrapper>
                <div style={{ color: '#8b572a', fontSize: '16px;', paddingTop: '28px', paddingLeft: '2px', paddingBottom: '16px' }}>
                    4. Настроили фильтр по инициатору события
                </div>
                <SectionWrapper title='Когда' isEdit>
                    <Row isEdit isControl title='Период активности'>
                        <RadioButton name='whenBlock41-group1' checked>Триггер активен на протяжении всей кампании</RadioButton>
                        <RadioButton name='whenBlock41-group1'>Запланировать период активности</RadioButton>
                    </Row>
                    <Row isEdit isControl title='Режим запуска'>
                        <RadioButton name='whenBlock41-group2' checked>По событию</RadioButton>
                        <RadioButton name='whenBlock41-group2'>По графику</RadioButton>
                    </Row>
                    <Row isEdit isCustom title='Инициатор события'>
                        <div className='row__control'>
                            <RadioButton name='whenBlock41-group3'>Любой</RadioButton>
                        </div>
                        <RadioButton name='whenBlock41-group3' checked>Настроить фильтр по потребителям</RadioButton>
                        <div className='row__filter row__filter_bottom' />
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
                        <Button color="gray" hasUnderline disabled size="large">Сохранить</Button>
                        <Text mode='danger'>Для сохранения изменений необходимо выбрать событие или настроить график</Text>
                    </Row>
                </SectionWrapper>
                <div style={{ color: '#8b572a', fontSize: '16px;', paddingTop: '28px', paddingLeft: '2px', paddingBottom: '16px' }}>
                    5. Выбираем событие для правила запуска
                </div>
                <SectionWrapper title='Когда' isEdit>
                    <Row isEdit isControl title='Период активности'>
                        <RadioButton name='whenBlock4-group1' checked>Триггер активен на протяжении всей кампании</RadioButton>
                        <RadioButton name='whenBlock4-group1'>Запланировать период активности</RadioButton>
                    </Row>
                    <Row isEdit isControl title='Режим запуска'>
                        <RadioButton name='whenBlock4-group2' checked>По событию</RadioButton>
                        <RadioButton name='whenBlock4-group2'>По графику</RadioButton>
                    </Row>
                    <Row isEdit isCustom title='Инициатор события'>
                        <div className='row__control'>
                            <RadioButton name='whenBlock4-group3'>Любой</RadioButton>
                        </div>
                        <RadioButton name='whenBlock4-group3' checked>Настроить фильтр по потребителям</RadioButton>
                        <div className='row__filter row__filter_bottom' />
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
                        <Button color="gray" hasUnderline disabled size="large">Сохранить</Button>
                        <Text mode='danger'>Для сохранения изменений необходимо выбрать событие или настроить график</Text>
                    </Row>
                </SectionWrapper>
                <div style={{ color: '#8b572a', fontSize: '16px;', paddingTop: '28px', paddingLeft: '2px', paddingBottom: '16px' }}>
                    6. Выбрали событие — появились дополнительные блоки и возможность сохранить правило.
                    По умолчанию правило применяется для всех событий выбранного типа, блок настройки фильтра не выводится,
                    пока не отмечен чекбокс «Настроить фильтр по этому событию».
                </div>
                <SectionWrapper title='Когда' isEdit>
                    <Row isEdit isControl title='Период активности'>
                        <RadioButton name='whenBlock5-group1' checked>Триггер активен на протяжении всей кампании</RadioButton>
                        <RadioButton name='whenBlock5-group1'>Запланировать период активности</RadioButton>
                    </Row>
                    <Row isEdit isControl title='Режим запуска'>
                        <RadioButton name='whenBlock5-group2' checked>По событию</RadioButton>
                        <RadioButton name='whenBlock5-group2'>По графику</RadioButton>
                    </Row>
                    <Row isEdit isCustom isFilter title='Инициатор события'>
                        <div className='row__control'>
                            <RadioButton name='whenBlock5-group3'>Любой</RadioButton>
                        </div>
                        <RadioButton name='whenBlock5-group3' checked>Настроить фильтр по потребителям</RadioButton>
                        <div className='row__filter row__filter_bottom' />
                    </Row>
                    <Row isEdit isSelectChecked title='Событие'>
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
                        <Checkbox text='Настроить фильтр по этому событию' />
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
                </SectionWrapper>
                <div style={{ color: '#8b572a', fontSize: '16px;', paddingTop: '28px', paddingLeft: '2px', paddingBottom: '16px' }}>
                    7. Отметили чекбокс «Настроить фильтр по этому событию»,
                    появился блок настройки фильтра для выбраного события.
                </div>
                <SectionWrapper title='Когда' isEdit>
                    <Row isEdit isControl title='Период активности'>
                        <RadioButton name='whenBlock6-group1' checked>Триггер активен на протяжении всей кампании</RadioButton>
                        <RadioButton name='whenBlock6-group1'>Запланировать период активности</RadioButton>
                    </Row>
                    <Row isEdit isControl title='Режим запуска'>
                        <RadioButton name='whenBlock6-group2' checked>По событию</RadioButton>
                        <RadioButton name='whenBlock6-group2'>По графику</RadioButton>
                    </Row>
                    <Row isEdit isCustom title='Инициатор события'>
                        <div className='row__control'>
                            <RadioButton name='whenBlock6-group3'>Любой</RadioButton>
                        </div>
                        <RadioButton name='whenBlock6-group3' checked>Настроить фильтр по потребителям</RadioButton>
                        <div className='row__filter row__filter_bottom' />
                    </Row>
                    <Row isEdit isSelectChecked title='Событие'>
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
                        <Checkbox checked text='Настроить фильтр по этому событию' />
                    </Row>
                    <Row isEdit isFilter title='Триггер сработает при попадании под фильтр по активации кодов'>
                        &nbsp;
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
                            <div className='row__input'> 
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
                </SectionWrapper>
            </>
        );
    }
}