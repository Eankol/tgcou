const routes = [
    {
        path:'/',
        name:'home',
        redirect:'/home',
        meta:{
            title:'主页'
        },
        children:[
            {
                path:'/home',
                name:"home",
                component:()=>import('../views/HomePage.vue')
            }
        ]
    },{
        path:'/test',
        name:'test_page',
        component:()=>import("../views/TestPage.vue"),
        meta: {
            title: '测试页面'
          }
    }
];
export default routes;