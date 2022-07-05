function createNewUser() {
    const newUser = {
        firstName: prompt("What is your name?"),
        lastName: prompt("what is your lastname?"),
        getLogin: function () {
            return this.firstName[0].toLowerCase() + this.lastName.toLowerCase();
        }
    }
    console.log(newUser.getLogin());
}
createNewUser()