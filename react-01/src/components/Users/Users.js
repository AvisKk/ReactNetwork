import React from "react";
import Paginator from "../common/Paginator";
import User from "./User";
import Preloader from "../common/preloader/Preloader";
let Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, ...props}) => {
    return <div>
        <Paginator currentPage={currentPage} totalUsersCount={totalUsersCount} pageSize={pageSize}
            onPageChanged={onPageChanged}/>
        {props.isFetching ?
            <Preloader/>
            :
            props.users.map(u => <div key={u.id}><User user={u} followingInProgress={props.followingInProgress}
                                                       unfollowingSaga={props.unfollowingSaga}
                                                       followingSaga={props.followingSaga}/></div>)
        }
    </div>
}

export default Users;