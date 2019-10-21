<template>
    <div class="auth-page">
        <div class="container page">
            <div class="row">

            <div class="col-md-6 offset-md-3 col-xs-12">
                <h1 class="text-xs-center">Sign up</h1>
                <p class="text-xs-center">
                <a href="">Have an account?</a>
                </p>

                <ul class="error-messages">
                    <li v-for="error in errors" :key="error">{{error.message}}</li>
                </ul>

                <form>
                <fieldset class="form-group">
                    <input v-model="username" class="form-control form-control-lg" type="text" placeholder="Your Name">
                </fieldset>
                <fieldset class="form-group">
                    <input v-model="email" class="form-control form-control-lg" type="text" placeholder="Email">
                </fieldset>
                <fieldset class="form-group">
                    <input  v-model="password" class="form-control form-control-lg" type="password" placeholder="Password">
                </fieldset>
                <input type="button" @click="register" class="btn btn-lg btn-primary" value="Sign up">                
                </form>
            </div>

            </div>
        </div>
    </div>
</template>
<script>
export default {
    data: function () {
        return{
            password: "",
            email: "",
            username : "",
            errors: []
        };
    },
    methods: {
        register(){
            this.errors= [];
            this.$store.dispatch("users/registerUser", {
                username : this.username,
                email : this.email,
                password : this.password
            }).then(()=> this.errors = [])
            .catch(err => this.errors.push(err))
        }
    }
}
</script>