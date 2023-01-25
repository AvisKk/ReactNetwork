import {useEffect, useState} from "react";
import s from "./ProfileInfo.module.css"

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status);
    }, [props.status])
    const activateMode = () => {
        setEditMode(true)
    }
    const deactivateMode = () => {
        setEditMode(false);
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
     <>
        {editMode && !props.userId ? <input autoFocus={true} className={s.editStatus}
                                            onBlur={deactivateMode} onChange={onStatusChange} value={status}/>
            : <span onDoubleClick={activateMode}> {status? status: '-----'}</span>}
    </>
    )
}

export default ProfileStatusWithHooks;