class User {
    constructor(info) {
        this.user = {
            name: info.displayName,
            email: info.email,
            password: info.password
        }
    }

}
