<template>
  <div>
    <h2>线图</h2>
    <v-chart class="chart" :option="option"></v-chart>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { use } from 'echarts/core';
import { LineChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import {
  LegendComponent,
  TitleComponent,
  TooltipComponent,
} from 'echarts/components';

use([
  CanvasRenderer,
  LineChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
]);

export default defineComponent({
  setup() {
    const option = ref({
      xAxis: [
        {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
      ],
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'line',
        },
      ],
    });

    return { option };
  },
});
</script>

<style scoped>
.chart {
  height: 600px;
}
</style>
