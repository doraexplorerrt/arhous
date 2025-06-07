'use strict'

document.addEventListener('DOMContentLoaded', () => {
  // Задание 3.1
  //   console.log('Скрипт отработал корректно')

  // Задание 3.2 и 3.3
  /*
   *   Алгоритм отображения диалогового окна покупки билетов
   *
   *   1. Начало.
   *   2. Находим необходимые элементы в DOM (кнопка открытия, кнопка закрытия, диалоговое окно).
   *       2.1. Проверяем существование элементов в DOM.
   *   3. Реализуем функционал открытия диалога:
   *       3.1. Добавляем обработчик события на клик по кнопке "Купить билет".
   *       3.2. При клике добавляем класс 'active' к диалоговому окну для его отображения.
   *   4. Реализуем функционал закрытия диалога:
   *       4.1. Добавляем обработчик события на клик по кнопке закрытия.
   *       4.2. При клике удаляем класс 'active' у диалогового окна для его скрытия.
   *       4.3. Добавляем возможность закрытия диалога при клике на затемненный фон.
   *   5. Конец.
   *
   *   Блок-схема ===> images/block-shema.png (там нет логики формы оформления заказа, добавили её позже)
   */

  // Находим необходимые элементы в DOM
  const openTicketDialogButton = document.getElementById('open-ticket-dialog') // Кнопка открытия диалога
  const closeTicketDialogButton = document.querySelector('.dialog__close') // Кнопка закрытия диалога
  const ticketForm = document.querySelector('.ticket-form') // Форма оформления заказа
  const ticketDialog = document.getElementById('ticket-dialog') // Диалоговое окно

  if (openTicketDialogButton && closeTicketDialogButton && ticketDialog && ticketForm) {
    // Проверяем существование элементов в DOM
    // console.log('Элементы диалога найдены')

    // Реализуем функционал открытия диалога
    openTicketDialogButton.addEventListener('click', () => {
      //   console.log('Кнопка "Купить билет" нажата')
      ticketDialog.classList.add('active') // Показываем диалоговое окно
    })

    // Реализуем функционал закрытия диалога
    closeTicketDialogButton.addEventListener('click', () => {
      //   console.log('Кнопка закрытия нажата')
      ticketDialog.classList.remove('active') // Скрываем диалоговое окно
    })

    // Реализуем функционал закрытия диалога
    closeTicketDialogButton.addEventListener('click', () => {
      //   console.log('Кнопка закрытия нажата')
      ticketDialog.classList.remove('active') // Скрываем диалоговое окно
    })

    // Закрытие диалога при клике на затемненный фон
    ticketDialog.addEventListener('click', (event) => {
      if (
        event.target === ticketDialog ||
        event.target.classList.contains('dialog__overlay')
      ) {
        // console.log('Клик на затемненный фон')
        ticketDialog.classList.remove('active') // Скрываем диалоговое окно
      }
    })

    ticketForm.addEventListener('submit', (event) => {
      event.preventDefault(); // Предотвращаем стандартное поведение формы

      // Получаем значения полей формы
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const quantity = document.getElementById('quantity').value;

      // Логируем данные (для проверки)
      console.log(`Имя: ${name}, Email: ${email}, Количество билетов: ${quantity}`);

      // Перенаправляем пользователя на нужную ссылку
      const redirectUrl = 'https://securepayments.tinkoff.ru/KOVio03X';  // тестовая ссылка
      window.location.href = redirectUrl; // Перенаправление
    });
  } else {
    console.error('Один или несколько элементов диалога не найдены')
  }

  //   Задание 3.4.(1) Динамический вывод названий ссылок в меню
  const menuContainer = document.querySelector('.header__menu')

  if (menuContainer) {
    // Массив с новыми названиями для ссылок
    const menuTitles = [
      'Главная',
      'О музее',
      'Посетителям',
      'Выставки',
      'Другие музейные площадки',
      'Контакты',
    ]

    // Находим все ссылки в меню
    const menuLinks = menuContainer.querySelectorAll('.menu__link')

    // Обновляем текстовое содержимое каждой ссылки
    menuLinks.forEach((link, index) => {
      link.textContent = menuTitles[index]
    })
  }

  // Задание 3.4.(2) Реализация логики кнопки скролла вверх страницы
  const scrollTopButton = document.querySelector('.scroll-top')

  if (scrollTopButton) {
    const windowHeight = document.documentElement.clientHeight // Определяем высоту видимой части окна браузера

    // Показать кнопку при прокрутке вниз на высоту экрана
    document.addEventListener('scroll', () => {
      let scrollPageY = this.scrollY

      if (scrollPageY >= windowHeight) {
        scrollTopButton.classList.add('scroll-top--show')
      } else {
        scrollTopButton.classList.remove('scroll-top--show')
      }
    })

    // Плавная прокрутка наверх при нажатии на кнопку
    scrollTopButton.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    })
  }

  // Задание 3.5. Динамический вывод навигационного меню
  //   const headerMenu = document.querySelector('.header__menu')

  //   if (headerMenu) {
  //     // Находим список меню внутри контейнера
  //     const menuList = headerMenu.querySelector('.menu')

  //     // Создаем объект с данными для меню
  //     const menuData = {
  //       link1: {
  //         link: 'index.html',
  //         title: 'Главная',
  //       },
  //       link2: {
  //         link: 'about_museum.html',
  //         title: 'О музее',
  //       },
  //       link3: {
  //         link: 'for_visitors.html',
  //         title: 'Посетителям',
  //       },
  //       link4: {
  //         link: 'exhibitions.html',
  //         title: 'Выставки',
  //       },
  //       link5: {
  //         link: 'other_museums.html',
  //         title: 'Другие музейные площадки',
  //       },
  //       link6: {
  //         link: 'contacts.html',
  //         title: 'Контакты',
  //       },
  //     }

  //     // Функция для создания HTML-кода ссылки
  //     const createLink = (url, title) => {
  //       return `
  //                 <li class="menu__item">
  //                     <a href="${url}" class="menu__link">${title}</a>
  //                 </li>
  //             `
  //     }

  //     // Проходим по всем элементам объекта menuData
  //     for (const linkItem in menuData) {
  //       if (menuData.hasOwnProperty(linkItem)) {
  //         const link = menuData[linkItem] // Получаем данные для ссылки
  //         const linkHTML = createLink(link.link, link.title) // Создаем HTML-код ссылки
  //         menuList.insertAdjacentHTML('beforeend', linkHTML) // Добавляем ссылку в конец списка
  //       }
  //     }
  //   } else {
  //     console.error('Контейнер меню не найден')
  //   }

  // Задание 3.6.(1)
  const exhibitionsContainer = document.querySelector('.exhibitions')
  if (exhibitionsContainer) {
    const exhibitionsList =
      exhibitionsContainer.querySelector('.exhibitions__list')

    // URL для получения данных с сервера
    const apiUrl = 'data.json'

    // Функция для создания карточки
    const createCard = (
      title,
      description,
      startDate,
      endDate,
      imageUrl,
    ) => {
      // Шаблонные строки и подстановки
      const card = `
                <div class="exhibitions__card">
                    <img
                        class="exhibitions__image"
                        src="${imageUrl}"
                        alt="${title}"
                        width="400"
                        height="400"
                    />
                    <h3 class="exhibitions__card-title">${title}</h3>
                    <p class="exhibitions__card-date">${startDate} - ${endDate}</p>
                    <p class="exhibitions__card-description">${description}</p>
                    <a href="exhibitions.html" class="exhibitions__card-link">
                      Подробнее
                    </a>
                </div>
            `

      return card
    }

    // Загрузка данных с сервера
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data) // Данные
        console.log(typeof data) // Тип полученных данных

        data.forEach((item) => {
          const cardElement = createCard(
            item.title,
            item.description,
            item.startDate,
            item.endDate,
            item.imageUrl,
          )
          exhibitionsList.insertAdjacentHTML('beforeend', cardElement)
        })
      })
      .catch((error) => {
        console.error('Ошибка при загрузке данных:', error)
      })
  }

  // Задание 3.6.(2). Прелоадер страницы
  const preloader = document.querySelector('.preloader');
  const content = document.querySelector('.content');

  if (preloader && content) {
    setTimeout(() => {
      // Скрываем прелоадер
      preloader.style.opacity = '0';
      preloader.style.visibility = 'hidden';

      // Показываем контент
      content.style.display = 'block';

      // Удаляем элемент из DOM
      preloader.remove();
    }, 3000); // Задержка 3 секунды
  }

  // Задание 3.7. Карусель (слайдер)
  const slider = document.querySelector('.swiper');

  if (slider) {
    const swiper = new Swiper(slider, {
      // Дополнительные параметры
      slidesPerView: 4, // Количество слайдов на экране
      spaceBetween: 30, // Расстояние между слайдами
      loop: true,  // Зацикливание слайдов

      // Пагинация
      pagination: {
        el: '.swiper-pagination',
      },

      // Навигационные стрелки
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
})
