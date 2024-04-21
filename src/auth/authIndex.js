

export const isAuthenticated = () => {
    // if (typeof window == 'undefined') {
    //     return false
    // }
    if (localStorage.getItem('loginedUserDetail')) {
        return JSON.parse(localStorage.getItem('loginedUserDetail'))
    }
    else {
        return false
    }
}