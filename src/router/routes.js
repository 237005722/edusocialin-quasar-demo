
const routes = [
  {
    path: '/',
    component: () => import('layouts/LandLayout.vue'), // 在这里，使用的布局
    children: [ // 此布局下的路由和页面
      { path: '', component: () => import('pages/Land.vue') }
    ]
  },
  {
    path: '/login',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Login.vue') }
    ]
  },
  {
    path: '/teacher',
    component: () => import('layouts/HomeLayout.vue'),
    children: [
      // 老师首页 路由/teacher
      { path: '', component: () => import('pages/teacher/Home.vue') },

      // 老师课堂
      {
        path: 'classes',
        component: () => import('layouts/ClassesLayout.vue'),
        children: [
          // 课堂列表 路由/teacher/classes
          {
            path: '',
            component: () => import('pages/teacher/class/ClassList.vue')
          },
          // 课堂详细 路由/teacher/classes/classRoom
          {
            path: 'classRoom',
            component: () => import('layouts/ClassRoomLayout.vue'),
            children: [
              {
                path: '',
                component: () => import('pages/teacher/class/ClassRoom.vue')
              },
              // 课堂文件 路由/teacher/classes/classRoom/folder
              {
                path: 'folder',
                component: () => import('pages/teacher/class/ClassFolder.vue')
              },
              // 课堂成员 路由/teacher/classes/classRoom/folder
              {
                path: 'member',
                component: () => import('pages/teacher/class/ClassMember.vue')
              }
            ]
          },

          // 家庭作业列表 路由/teacher/classes/work
          {
            path: 'work',
            component: () => import('pages/teacher/work/HomeWorkList.vue')
          },
          // 作业详细、批改 路由/teacher/classes/homework
          {
            path: 'homeWork',
            component: () => import('pages/teacher/work/HomeWork.vue')
          },

          // 考试测验列表 路由/teacher/classes/exam
          {
            path: 'exam',
            component: () => import('pages/teacher/exam/ExamQuizList.vue')
          },
          // 考试详细 路由/teacher/classes/examQuiz
          {
            path: 'examQuiz',
            component: () => import('pages/teacher/exam/ExamQuiz.vue')
          },

          // 进展分析 路由/teacher/classes/progress
          {
            path: 'progress',
            component: () => import('pages/teacher/progress/Progress.vue')
          }
        ]
      }
    ]
  },
  // 发现商城
  {
    path: '/discover',
    component: () => import('layouts/HomeLayout.vue'),
    children: [
      // 商城首页 路由/discover
      { path: '', component: () => import('pages/discover/Discover.vue') }
    ]
  },
  // 资料库
  {
    path: '/library',
    component: () => import('layouts/HomeLayout.vue'),
    children: [
      // 商城首页 路由/library
      { path: '', component: () => import('pages/library/Library.vue') }
    ]
  },
  // 消息通知
  {
    path: '/messages',
    component: () => import('layouts/HomeLayout.vue'),
    children: [
      // 商城首页 路由/messages
      { path: '', component: () => import('pages/messages/Messages.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
