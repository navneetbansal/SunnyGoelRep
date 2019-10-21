<template>
    <div class="editor-page">
        <div class="container page">
            <div class="row">

            <div class="col-md-10 offset-md-1 col-xs-12">
                <form>
                <fieldset>
                    <fieldset class="form-group">
                        <input v-model="title" type="text" class="form-control form-control-lg" placeholder="Article Title">
                    </fieldset>
                    <fieldset class="form-group">
                        <input v-model="description" type="text" class="form-control" placeholder="What's this article about?">
                    </fieldset>
                    <fieldset class="form-group">
                        <textarea v-model="body" class="form-control" rows="8" placeholder="Write your article (in markdown)"></textarea>
                    </fieldset>
                    <input type="button" @click="createArticle" class="btn btn-lg btn-primary" value=" Publish Article">                   
                </fieldset>
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
            title: "",
            description: "",
            body: ""
        };
    },
    methods: {
        createArticle(){
            this.$store.dispatch("articles/createNewArticle",{
                title: this.title,
                description: this.description,
                body: this.body
            });
        }
    }
}
</script>