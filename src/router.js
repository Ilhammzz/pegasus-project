import { createRouter, createWebHistory } from 'vue-router'
import TheLayout from './components/layout/TheLayout.vue'
import SchedulePage from './components/schedule/SchedulePage.vue'
import ScheduleForm from './components/schedule/ScheduleForm.vue'
import ScheduleDelete from './components/schedule/ScheduleDelete.vue'
import PassengerOnBoardPage from './components/schedule/PassengerOnBoardPage.vue'
import PassengerOnBoardDelete from './components/schedule/PassengerOnBoardDelete.vue'
import PassengerPage from './components/passenger/PassengerPage.vue'
import PassengerForm from './components/passenger/PassengerForm.vue'
import PassengerDelete from './components/passenger/PassengerDelete.vue'
import TrainPage from './components/train/TrainPage.vue'
import TrainForm from './components/train/TrainForm.vue'
import TrainDelete from './components/train/TrainDelete.vue'
import BoardingPage from './components/passenger/BoardingPage.vue'
import BoardingAssign from './components/passenger/BoardingAssign.vue'
import NotFoundPage from './components/error/NotFoundPage.vue'
import ServerError from './components/error/ServerError.vue'

const router = createRouter({
    history: createWebHistory(),
    routes :[
        {
            component: TheLayout,
            path: '/',
            children: [
                {
                    component:SchedulePage,
                    path: '/schedule',
                    alias: '/',
                    // meta: {
                    //     title: 'Schedules'
                    // },
                    children : [
                        {
                            component: ScheduleForm,
                            path: 'form/:id?',
                            props: true
                        },
                        {
                            component: ScheduleDelete,
                            path: 'delete/:id',
                            props: true
                        },
                    ]
                },
                {
                    component: PassengerOnBoardPage,
                    path: '/passengersOnBoard/:id/',
                    props: true,
                    // meta: {
                    //     title : 'Passenger of'
                    // },
                    children : [
                        {
                            component: PassengerOnBoardDelete,
                            path: 'delete/:username',
                            props: true
                        }
                    ]
                },
                {
                    component: PassengerPage,
                    path: '/passenger',
                    children: [
                        {
                            component: PassengerForm,
                            path: 'form/:username?',
                            props: true
                        },
                        {
                            component: PassengerDelete,
                            path: 'delete/:username',
                            props: true
                        }
                    ]
                },
                {
                    component: TrainPage,
                    path: '/train',
                    children: [
                        {
                            component: TrainForm,
                            path: 'form/:code?',
                            props: true
                        },
                        {
                            component: TrainDelete,
                            path: 'delete/:code',
                            props: true
                        }
                    ]
                },
                {
                    component: BoardingPage,
                    path: '/boarding/:username/',
                    props: true,
                    children: [
                        {
                            component: BoardingAssign,
                            path: 'assign/:id',
                            props: true
                        }
                    ]
                }
            ]
        },
        {
            component: NotFoundPage,
            path: '/:notFound(.*)'
        },
        {
            component: ServerError,
            name: 'ServerError',
            path: '/server-error'
        },
    ]
})

export default router;