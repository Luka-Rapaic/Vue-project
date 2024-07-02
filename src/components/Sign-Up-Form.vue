<template>
    <div class="signUpForm">
        <form onsubmit="return false;">
            <div class="flex-container">
                <label>Korisničko ime:</label>
                <input v-model="username" required>
            </div>
            <div class="flex-container">
                <label>Lozinka:</label>
                <input v-model="password" required>
            </div>
            <span class="errorMessage">{{ errorMessage }}</span>
            <span class="successMessage">{{ successMessage }}</span>
            <button @click="signup()">Sign up</button>
        </form>
    </div>
</template>

<style scoped>
    .signUpForm {
        position: relative;
        width: 540px;
        border-radius: 30px;
        border: 1px solid black;
        box-sizing: border-box;
        padding: 10px 20px;
    }

    .flex-container {
        margin: 10px auto;
        position: relative;
        width: 100%;
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-evenly;
    }
    
    .flex-container>label {
        font-size: 1.5em;
        margin: 10px auto;
    }

    .flex-container>input {
        border-radius: 10px;
        line-height: 1.75em;
        font-size: 1.25em;
    }

    button {
        position: relative;
        width: 100%;
        font-size: 1.5em;
        line-height: 1.5em;
        background-color: #50C878;
        color: white;
        border-radius: 10px;
        margin: 10px auto;
    }

    button:hover {
        background-color: #009E60;
        cursor: pointer;
    }

    span {
        font-size: 1.25em;
        line-height: 1.75em;
    }

    span.errorMessage {
        color: #FF7F50;
    }

    span.successMessage {
        color: #50C878;
    }
</style>

<script>
export default {
    name: "Sign-Up-Form",
    data() {
        return {
            username: '',
            password: '',
            errorMessage: '',
            successMessage: ''
        }
    },
    methods: {
        signup() {
            let accountName = "user-"+this.username;
            let account = localStorage.getItem(accountName);
            if (account != null) {
                this.errorMessage = "Greška: Korisničko ime je zauzeto!";
                this.successMessage = "";
                return;
            }
            account = {"username": this.username, "password": this.password, "orderCount": 0};
            localStorage.setItem(accountName, JSON.stringify(account));
            this.errorMessage = "";
            this.successMessage = "Uspešno ste kreirali nalog!";
        }
    }
}
</script>
