import cn from "clsx";

import ClickShotLogo from "@/app/images/clickshot-logo.svg";
import HomeIcon from "@/app/images/icons/home-icon.svg";
import SearchIcon from "@/app/images/icons/search-icon.svg";
import AddPostIcon from "@/app/images/icons/add-post-icon.svg";
import NotificationIcon from "@/app/images/icons/notifications-icon.svg";
import SaveIcon from "@/app/images/icons/all-saves-icon.svg";
import ProfileIcon from "@/app/images/icons/prifile-icon.svg";
import ThemeIcon from "@/app/images/icons/theme-icon.svg";
import FavoriteIcon from "@/app/images/icons/favorites-icon.svg";
import SettingsIcon from "@/app/images/icons/settings-icon.svg";
import LogoutIcon from "@/app/images/icons/logout-icon.svg";

import styles from "./FeedLayout.module.scss";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className={styles.root}>
      <nav className={styles.sidebar}>
        <div className={styles.logoContainer}>
          <ClickShotLogo className={styles.logo} />
        </div>
        <div className={styles.menuContainer}>
          <ul className={styles.list}>
            <li>
              <a href="#" className={styles.listItem}>
                <HomeIcon />
                <span>Main</span>
              </a>
            </li>
            <li>
              <a href="#" className={styles.listItem}>
                <SearchIcon />
                <span>Search</span>
              </a>
            </li>
            <li>
              <a href="#" className={styles.listItem}>
                <AddPostIcon />
                <span>Add post</span>
              </a>
            </li>
            <li>
              <a href="#" className={styles.listItem}>
                <NotificationIcon />
                <span>Notifications</span>
              </a>
            </li>
            <li>
              <a href="#" className={styles.listItem}>
                <SaveIcon />
                <span>Saved</span>
              </a>
            </li>
            <li>
              <a href="#" className={styles.listItem}>
                <ProfileIcon />
                <span>Profile</span>
              </a>
            </li>
            <li>
              <a href="#" className={styles.listItem}>
                <ThemeIcon />
                <span>Theme menu</span>
              </a>
            </li>
            <li>
              <a href="#" className={styles.listItem}>
                <FavoriteIcon />
                <span>Favorites</span>
              </a>
            </li>
            <li>
              <a href="#" className={styles.listItem}>
                <SettingsIcon />
                <span>Settings</span>
              </a>
            </li>
            <li>
              <a href="#" className={styles.listItem}>
                <LogoutIcon />
                <span>Log out</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {children}
      <nav className={cn(styles.sidebar, styles.sidebarRight)}>
        <ClickShotLogo className={styles.logo} />
      </nav>
    </div>
  );
};

export default Layout;