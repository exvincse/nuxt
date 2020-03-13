<template>
    <div>
        {{title}}
    </div>
</template>

<script>
    import axios from "axios";
    export default {
        data() {
            return {
                title: '關於我的頁面'
            }
        },
        async validate({ params, query }) {
            // const url = "https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=96dg4kGqji5E3SrmGkeAQfq1OAXOBAMD";
            // let ares = await axios.get(url);
            // return true // 如果参数有效
            return false;
        }
    }
</script>