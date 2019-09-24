```jsx
<div>
    <div style={{ width: "350px" }}>
        <Select
            disabled
            size="small"
            placeholder="Выберите событие"
            items={[
                { title: "Потребитель попал в БД" },
                null,
                { title: "Потребитель был сдедублицирован" },
                { title: "Потребитель попал в сегмент" },
                { title: "Потребитель вышел из сегментации" },
                { title: "Изменился статус подписки" },
                { title: "Первое подтверждение мобильного телефона" },
                null,
                { title: "Изменение email" },
                { title: "Первое подтверждение email" },
                { title: "Обновление данных потребителя" },
                { title: "Редактирование анкеты потребителем" },
                { title: "Потребитель вошел на сайт" },
                {
                    title: "Активация секретного кода потребителем",
                    disabled: true
                },
                { title: "Потребитель получил приз" },
                { title: "Изменение статуса FMCG заказа" },
                { title: "Создание FMCG заказа" }
            ]}
        />
        <br />
        <br />
        <Select
            placeholder="Выберите событие"
            items={[
                { title: "Потребитель попал в БД" },
                null,
                { title: "Потребитель был сдедублицирован" },
                { title: "Потребитель попал в сегмент" },
                { title: "Потребитель вышел из сегментации" },
                { title: "Изменился статус подписки" },
                { title: "Первое подтверждение мобильного телефона" },
                null,
                { title: "Изменение email" },
                { title: "Первое подтверждение email" },
                { title: "Обновление данных потребителя" },
                { title: "Редактирование анкеты потребителем" },
                { title: "Потребитель вошел на сайт" },
                {
                    title: "Активация секретного кода потребителем",
                    disabled: true
                },
                { title: "Потребитель получил приз" },
                { title: "Изменение статуса FMCG заказа" },
                { title: "Создание FMCG заказа" }
            ]}
        />
        <br />
        <br />
        <Select
            isFiltered
            placeholder="Выберите событие"
            items={[
                { title: "Потребитель попал в БД" },
                { title: "Потребитель был сдедублицирован" },
                { title: "Потребитель попал в сегмент" },
                { title: "Потребитель вышел из сегментации" },
                { title: "Изменился статус подписки" },
                { title: "Первое подтверждение мобильного телефона" },
                { title: "Изменение email" },
                { title: "Первое подтверждение email" },
                { title: "Обновление данных потребителя" },
                { title: "Редактирование анкеты потребителем" },
                { title: "Потребитель вошел на сайт" },
                { title: "Активация секретного кода потребителем" },
                { title: "Потребитель получил приз" },
                { title: "Изменение статуса FMCG заказа" },
                { title: "Создание FMCG заказа" }
            ]}
        />
        <br />
        <br />
        <Select
            hasDescriptions={true}
            placeholder="Выберите событие"
            items={[
                {
                    title: "Максимальная выгода",
                    description:
                        "Для нас маркетинговая CRM-система — это центральная база данных по всему клиентскому опыту и соприкосновению бренда с клиентами. Мы накапливаем опыт взаимодействия с каждой покупательницей, чтобы лучше понимать ее потребности."
                },
                {
                    title: "Последовательное применение",
                    description:
                        "История работы с Mindbox началась летом 2016 г. Начали с интеграции, затем запустили транзакционные и рекламно-информационные Email и SMS рассылки, зимой добавили модуль программы лояльности, а весной подключили модуль промо-акций."
                }
            ]}
        />
    </div>
</div>
```