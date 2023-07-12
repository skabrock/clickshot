"use client";

import cn from "clsx";

import Link from "next/link";

import { recommendedUsersMock as recommendedUsers } from "@/app/mocks";
import { userMock as user } from "@/app/mocks/";

import { useModal } from "../Modal/useModal";
import NewPost from "../NewPost";
import { ButtonSmall } from "@/app/components/UIKit";

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

import styles from "./MainLayout.module.scss";

interface LayoutProps {
  children: React.ReactNode;
  recommendations?: boolean;
}

const Recommendations = () => (
  <nav className={cn(styles.sidebar, styles.sidebarRight)}>
    <div className={styles.myProfile}>
      <Link className={styles.profileLeftContainer} href="/profile">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className={styles.myProfileImg} src={user.mediaUrl} alt="photo" />
        <div className={styles.myNameAndNickName}>
          <div className={styles.myProfileNickName}>{user.username} </div>
          <div className={styles.myProfileName}>{user.name}</div>
        </div>
      </Link>
      <Link href={"/auth/sign-in"}>
        <ButtonSmall className={styles.switchAccountBtn}>
          Switch account
        </ButtonSmall>
      </Link>
    </div>
    <div className={styles.recommendations}>
      <div className={styles.recommendationHeader}>
        <div className={styles.recommendationsForYou}>
          Recommendations for you
        </div>
        <button className={styles.recommendationBtn}>All</button>
      </div>
      <div className={styles.recommendationBody}>
        {recommendedUsers.map((user) => (
          <div className={styles.recommendedUserContainer} key={user.id}>
            <div className={styles.recommendedUserAvatarNameAndNickName}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className={styles.recommendedUserAvatar}
                src={user.mediaUrl}
                alt={user.nickName}
              />
              <div className={styles.recommendedUserNameAndNickName}>
                <div className={styles.recommendedUserNickName}>
                  {user.nickName}
                </div>
                <div className={styles.recommendedUserName}>{user.name}</div>
              </div>
            </div>
            <ButtonSmall className={styles.subscribeBtn}>Subscribe</ButtonSmall>
          </div>
        ))}
      </div>
    </div>
  </nav>
);

const Layout: React.FC<LayoutProps> = ({
  children,
  recommendations = true,
}) => {
  const [showNewPost, hideNewPost] = useModal(() => (
    <NewPost hide={hideNewPost} />
  ));

  return (
    <div
      className={cn(styles.root, {
        [styles.withRecommendations]: recommendations,
      })}
    >
      <nav className={styles.sidebar}>
        <div className={styles.logoContainer}>
          <Link className={styles.logo} href={"/feed"}>
            <ClickShotLogo />
          </Link>
        </div>
        <div className={styles.menuContainer}>
          <ul className={styles.list}>
            <li>
              <Link className={styles.listItem} href={"/feed"}>
                <HomeIcon />
                <span>Main</span>
              </Link>
            </li>
            <li>
              <a href="#" className={styles.listItem}>
                <SearchIcon />
                <span>Search</span>
              </a>
            </li>
            <li>
              <button className={styles.listItem} onClick={showNewPost}>
                <AddPostIcon />
                <span>Add post</span>
              </button>
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
              <Link className={styles.listItem} href={"/profile"}>
                <ProfileIcon />
                <span>Profile</span>
              </Link>
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
              <Link href="/profile/edit" className={styles.listItem}>
                <SettingsIcon />
                <span>Settings</span>
              </Link>
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
      {recommendations && <Recommendations />}
    </div>
  );
};

export default Layout;
