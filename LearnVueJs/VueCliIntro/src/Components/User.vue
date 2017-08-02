<template>
    <div id="user">
        <h3>The User</h3>
        <p>My user name is {{username}}</p>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                username: 'Max'
            }
        }
    }
</script>

<style>
    p {
        font-style: italic;
    }
</style>
