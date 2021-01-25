<template>
    <div>
        <GxTabgrp/>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import GxTabgrp from '../components/GxTabgrp.vue'


@Component({
    components: {
        GxTabgrp
    }
})
export default class Tabs extends Vue {
/* eslint-disable @typescript-eslint/no-explicit-any*/

}
</script>
