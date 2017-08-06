<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <header>
                    <h1>Server Status</h1>
                </header>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <ul class="list-group">
                    <li
                            class="list-group-item"
                            v-for="index in 5">
                        Server #{{ index }}
                    </li>
                </ul>
            </div>
            <div class="col-xs-12 col-sm-6">
                <p>Server Details are currently not updated</p>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12">
                <footer>
                    <p>All Servers are managed here</p>
                </footer>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from "./Header.vue";
    import Footer from "./Footer.vue";
    import Servers from "./Servers.vue";
    import ServerDetails from "./ServerDetails.vue";

    export default {
        components: {
            'app-header': Header,
            'app-servers': Servers,
            'app-server-details': ServerDetails,
            'app-footer': Footer
        }
    }
</script>

<style>

</style>
