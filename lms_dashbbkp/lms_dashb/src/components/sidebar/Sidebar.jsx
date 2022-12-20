import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import GroupsIcon from '@mui/icons-material/Groups';
import EventRepeatIcon from '@mui/icons-material/EventRepeat';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="top">
        <span className="logo">LMS Admin</span>
        </div>
        <hr />
        <div className="center">
          <ul>
              <p className="title">DASHBOARD</p>
            <li>
                <DashboardIcon className="icon" />
              <span>Instructors</span>
            </li>
            <li>
                <CastForEducationIcon className="icon" />
              <span>Learners</span>
            </li>
            <p className="title">Users</p>
            <li>
                <AccountCircleOutlinedIcon className="icon" />
              <span>Add User</span>
            </li>
            <li>
                <FormatListBulletedOutlinedIcon className="icon" />
              <span>CATEGORIES</span>
            </li>
            <li>
                <MenuBookIcon className="icon" />
              <span>COURSES</span>
            </li>
            <li>
                <GroupsIcon className="icon" />
              <span>GROUPS</span>
            </li>
            <p className="title">SETTINGS</p>
            <li>
                <EventRepeatIcon className="icon" />
              <span>EVENTS ENGINE</span>
            </li>
            <li>
                <ManageAccountsIcon className="icon" />
              <span>USER TYPES</span>
            </li>
            <li>
                <ImportExportIcon className="icon" />
              <span>IMPORT - EXPORT</span>
            </li>
            <li>
                <PersonSearchIcon className="icon" />
              <span>Profile</span>
            </li>
            <li>
                <LogoutIcon className="icon" />
              <span>Logout</span>
            </li>
          </ul>
        </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  )
}

export default Sidebar
