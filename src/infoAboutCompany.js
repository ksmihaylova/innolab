import {Images} from '@/images';

export const Main = {
  toolbarTitle: 'Инновационная лаборатория "Новосибирск"',
  subtitle: 'Сибирское ГУ Банка России'
};

export const Menu = {
  menu: [
    {
      title: 'О нас',
      subItems: [
        {
          title: 'Лаборатория'
        },
        {
          title: 'Отдел исследований'
        },
        {
          title: 'Отдел разработки'
        }
      ]
    },
    {
      title: 'Портфолио'
    },
    {
      title: 'Контакты'
    }
  ]
};

export const Project = {
  titleProject: 'Наши проекты',
  projects: [
    {
      'title': 'Микросервисная контейнеризированная АС',
      'text': 'Микросервисная контейнеризированная АС – Разработка микросервисной контейнеризированной АС с использованием NoSQL, Docker, Kubernetes, Microsevices, VueJS, RabbitMQ, Kafka, REST, JSON, NodeJS.',
      'img': Images.project.autosystem
    },
    {
      'title': 'Сервис электронных заявок',
      'text': 'Сервис электронных заявок – Развитие Сервиса электронных заявок в части адаптации для СГУ',
      'img': Images.project.request
    },
    {
      'title': 'Тепловые карты',
      'text': 'Тепловые карты – Тепловые карты (Прототип). Развитие протот',
      'img': Images.project.cards
    },
    {
      'title': 'Ripple',
      'text': 'Ripple – Разработка прототипа системы денежных переводов на платформе ripple',
      'img': Images.project.ripple
    },
    {
      'title': 'МПБР',
      'text': 'МПБР – Разработка прототипа Монетной площадки Банка России',
      'img': Images.project.mpbr
    }
  ]
};

export const Task = {
  titleTask: 'Основные задачи',
  tasks: [
    {
      'text': 'Реализация пилотных проектов с ИТ-составляющей по внедрению инновационных решений и услуг для финансового рынка',
      'icon': 'check'
    },
    {
      'text': 'Участие в разработке архитектуры целевых ИТ-платформ и типовых проектных решений',
      'icon': 'share'
    },
    {
      'text': 'Изучение передового опыта и перспективных направлений применения ИТ',
      'icon': 'business'
    },
    {
      'text': 'Анализ рынка ИТ с целью определения оптимальных технологических решений',
      'icon': 'scanner'
    },
    {
      'text': 'Апробация инновационных ИТ-решений и услуг для финансового рынка',
      'icon': 'filter_list'
    }
  ]
};
export const Contact = {
  address: 'Адрес: г. Новосибирск, ул.Арбузова, 14 ',
  phone: '(383)-999-99-99',
  email: 'innolab@test.ru'
};