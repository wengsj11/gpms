
import NotFound from './404'
import Home from '../Home';
import Profile from '../Profile';
import Proposal from 'containers/PaperManage/Proposal';
import ProposalCreate from 'containers/PaperManage/Proposal/Create';
import MidTermExam from 'containers/PaperManage/MidTermExam';

const routes = [
  // { name: '首页', component: Home, path: '/home'},
  { name: '个人中心', component: Profile, path: '/profile'},
  { name: '开题报告', component: Proposal, path: '/PaperManage/Proposal/Index'},
  { name: '开题报告创建', component: ProposalCreate, path: '/PaperManage/Proposal/Create'},
  { name: '中期检查', component: MidTermExam, path: '/PaperManage/MidTermExam/Index'},
  { name: '管理后台', component: NotFound, path: '/404', isWrong: true,}
]
export default routes;