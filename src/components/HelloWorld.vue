<template>
  H2 echart demo
  <v-chart class="chart" :option="option" />
</template>

<script lang="ts">
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { PieChart,LineChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent
} from "echarts/components";


use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent
]);

import { ref, defineComponent } from 'vue'
import { THEME_KEY } from "vue-echarts";
export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: true
    }
  },
    provide: {
    [THEME_KEY]: "dark"
  },
  setup: () => {
    const count = ref(0);
     const option = ref({
      title: {
        text: "Traffic Sources",
        left: "center"
      },
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
        orient: "vertical",
        left: "left",
        data: ["Direct", "Email", "Ad Networks", "Video Ads", "Search Engines"]
      },
      series: [
        {
          name: "Traffic Sources",
          type: "pie",
          radius: "55%",
          center: ["50%", "60%"],
          data: [
            { value: 335, name: "Direct" },
            { value: 310, name: "Email" },
            { value: 234, name: "Ad Networks" },
            { value: 135, name: "Video Ads" },
            { value: 1548, name: "Search Engines" }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)"
            }
          }
        }
      ]
    });

    return { count,option }
  }
})
</script>

<style scoped>
a {
  color: #42b983;
}

.chart{
  width:800px;
  height:600px;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
