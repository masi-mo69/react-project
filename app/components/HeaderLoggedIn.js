import React, { useContext } from "react";
import { Link } from "react-router-dom";
import DispatchContext from "../DispatchContext";
import StateContext from "../StateContext";
import { Tooltip } from "react-tooltip";

function HeaderLoggedIn(props) {
  const appDispatch = useContext(DispatchContext);
  const appState = useContext(StateContext);

  function handleLogout() {
    appDispatch({ type: "logout" });
  }

  function handleSearchIcon(e) {
    e.preventDefault();
    appDispatch({ type: "openSearch" });
  }

  return (
    <div className="flex-row my-3 my-md-0">
      {/* Search Icon */}
      <button
        data-tooltip-id="search"
        data-tooltip-content="Search"
        onClick={handleSearchIcon}
        className="text-white mr-2 header-search-icon"
        aria-label="Search"
      >
        <i className="fas fa-search"></i>
      </button>
      <Tooltip id="search" className="custom-tooltip" />{" "}

      {/* Chat Icon */}
      <span
        data-tooltip-id="chat"
        data-tooltip-content="Chat"
        className="mr-2 header-chat-icon text-white"
        aria-label="Chat"
      >
        <i className="fas fa-comment"></i>
        <span className="chat-count-badge text-white"> </span>
      </span>
      <Tooltip id="chat" className="custom-tooltip" />{" "}

      {/* Profile Icon */}
      <Link
        data-tooltip-id="profile"
        data-tooltip-content="My Profile"
        to={`/profile/${appState.user.username}`}
        className="mr-2"
      >
        <img
          className="small-header-avatar"
          src={appState.user.avatar}
          alt={`${appState.user.username}'s avatar`}
        />
      </Link>
      <Tooltip id="profile" className="custom-tooltip" />{" "}

      {/* Create Post Button */}
      <Link className="btn btn-sm btn-success mr-2" to="/create-post">
        Create Post
      </Link>

      {/* Logout Button */}
      <button onClick={handleLogout} className="btn btn-sm btn-secondary">
        Sign Out
      </button>
    </div>
  );
}

export default HeaderLoggedIn;
