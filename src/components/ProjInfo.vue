<template>

    <div class="ructmain">
        <div>

            <div class="mainpresc">
                <p>
                    Проект представляет собой сервис,
                    в котором пользователь может
                    вести свой дневник.
                </p>
            </div>
            <div class="">
                <div class="mainpresc">
                    <h5>Форма для записи</h5>
                    <p>
                        На данной странице должна быть
                        текстареа, в которой пользователь
                        будет осуществлять набор записи
                        в дневник за текущий день.
                    </p>
                </div>
                <div class="mainpresc">
                    <h5>Список записей</h5>
                    <p>
                        На данной странице должен быть
                        список дат, за которые есть записи
                        в дневнике. Пользователь может
                        нажать на любую дату и перейти
                        на страницу для чтения этой
                        записи.
                    </p>
                </div>
                <div class="mainpresc ">
                    <h5>Редактирование</h5>
                    <p>
                        Пользователь может редактировать
                        только те записи, которые не
                        старше 3-х дней.
                    </p>
                </div>
            </div>
        </div>


        <footer class="ruct/footer">
            <div class="footer/info">
                техническое задание на проект скачано с сайта <a href="http://projery.by">projery.by</a>
                <br>
                <a href="https://t.me/trepachev_dmitry">Трепачёв Дмитрий</a>
            </div>
        </footer>

        <div class="mainpresc fst-italic">
            <h6>Реализация проекта</h6>
            <p>
                Проект реализован с помощью фреймворков Vue3 (pinia) и Bootstrap 5.3
            </p>
        </div>
    </div>
</template>

<style scoped>
.ructmain {
    background: #f0f0f0;
    /* padding: 4px; */
}

.mainpresc {
    background: white;
    padding: 4px;
    margin: 8px;
}

footer {
    padding: 12px;
}
</style>