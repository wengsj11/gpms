
import NotFound from './404'
import Home from '../Home';
import Profile from '../Profile';

const routes = [
  { name: '首页', component: Home, path: '/home'},
  { name: '个人中心', component: Profile, path: '/profile'},
  { name: '管理后台', component: NotFound, path: '/', isWrong: true,}
]
export default routes;