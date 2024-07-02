<template>
    <div class="moj-nalog">
        <div class="radio-bar" v-if="user==null">
            <button :class="{active: loginOrSignup=='login'?true:false}" @click="loginOrSignupSelect('login')">Log in</button>
            <button :class="{active: loginOrSignup=='signup'?true:false}" @click="loginOrSignupSelect('signup')">Sign up</button>
        </div>
        <log-in-form v-if="loginOrSignup=='login' && user==null" :loginCallback="this.updateState"></log-in-form>
        <sign-up-form v-if="loginOrSignup=='signup' && user==null"></sign-up-form>
        <div class="radio-bar" v-if="user!=null">
            <button :class="{active: basketOrOrders=='basket'?true:false}" @click="basketOrOrdersSelect('basket')">Korpa</button>
            <button :class="{active: basketOrOrders=='orders'?true:false}" @click="basketOrOrdersSelect('orders')">Narudzbine</button>
        </div>
        <Korpa v-if="user!=null && basketOrOrders=='basket'" :user="user" :reloadUserCallback="this.updateState"></Korpa>
        <Narudzbine v-if="user!=null && basketOrOrders=='orders'" :user="user"></Narudzbine>
    </div>
    <button @click="logout()">Log out</button>
</template>

<style scoped>

.radio-bar {
    position: relative;
    display: flex;
    flex-flow: row nowrap;
    align-items: stretch;
    width: 540px;
    border-radius: 20px;
    border: 1px solid black;
}

.radio-bar>button {
    flex-grow: 1;
    flex-basis: 1px;
    display: block;
    font-size: 1.5em;
    line-height: 1.75em;
    border: none;
    background-color: white;
    cursor: pointer;
}

.radio-bar>button:first-child {
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
}

.radio-bar>button:last-child {
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
}

.radio-bar>button:hover {
    color: #50C878;
}

.radio-bar>button.active {
    background-color: #50C878;
    color: white;
}

.moj-nalog {
    position: relative;
    padding: 40px;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-flow: column wrap;
    row-gap: 40px;
    align-items: center;
    min-height: calc(100vh - 185px);
}
</style>

<script>
import LogInForm from "@/components/Log-In-Form.vue";
import SignUpForm from "@/components/Sign-Up-Form.vue";
import Korpa from "@/components/Korpa.vue";
import Narudzbine from "@/components/Narudzbine.vue";

export default {
    name: "Moj-Nalog",
    components: {LogInForm, SignUpForm, Korpa, Narudzbine},
    data() {
        return {
            loginOrSignup: 'login',
            basketOrOrders: 'basket',
            user: {}
        }
    },
    methods: {
        loginOrSignupSelect(choice) {
            this.loginOrSignup = choice;
        },
        basketOrOrdersSelect(choice) {
            this.basketOrOrders = choice;
        },
        updateState() {
            this.user = localStorage.getItem("user");
            if (this.user != null) this.user = JSON.parse(this.user);
        },
        logout() {
            localStorage.removeItem("user");
            this.updateState();
        }
    },
    created() {
        this.updateState();
    }
}
</script>
