import {instance} from "./Instance";
export const ProfileAPI = {
    Profile (userId) {
        return instance.get(`profile/` + userId)
    },
    ProfileStatus (userId) {
        return instance.get('profile/status/' + userId)
    },
    UpdateStatus (status) {
        return instance.put('profile/status/', {status: status})
    },
    SavePhoto (photoFile) {
        const formData = new FormData();
        formData.append("image", photoFile);

      return instance.put('profile/photo', formData, {
          headers: {
              'Content-Type': 'multipart/form-data'
          }
      })
    },
    SaveProfile (profile) {
return instance.put('/profile', profile)
    }
}