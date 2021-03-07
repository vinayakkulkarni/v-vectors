<template>
  <svg
    v-if="Object.keys(marker).length > 0"
    xmlns="http://www.w3.org/2000/svg"
    :viewBox="marker.viewBox"
  >
    <defs />
    <!-- https://developer.mozilla.org/en-US/docs/Web/SVG/Element/path#attributes -->
    <template v-if="paths">
      <path
        v-for="(path, index) in marker.paths"
        :key="index"
        :d="path.d"
        :fill="path.fillColor"
        :fill-opacity="path.fillOpacity"
        :stroke="path.strokeColor"
        :stroke-opacity="path.strokeOpacity"
        :tab-index="index"
      />
    </template>
    <!-- https://developer.mozilla.org/en-US/docs/Web/SVG/Element/circle#attributes -->
    <template v-if="circles">
      <circle
        v-for="(circle, index) in marker.circles"
        :key="`circle-${index}`"
        :cx="circle.cx"
        :cy="circle.cy"
        :r="circle.r"
        :fill="circle.fillColor"
        :fill-opacity="circle.fillOpacity || 1"
      />
    </template>
  </svg>
</template>

<script lang="ts">
  import { computed, defineComponent, PropType } from 'vue';
  import { Marker } from '../types';

  export default defineComponent({
    name: 'VSvg',
    props: {
      marker: {
        type: Object as PropType<Marker>,
        required: true,
        default: () => {},
      },
    },
    setup(props: { marker: Marker }) {
      const paths = computed(() => {
        if (
          props.marker &&
          props.marker.paths &&
          props.marker.paths.length > 0
        ) {
          return true;
        }
        return false;
      });
      const circles = computed(() => {
        if (
          props.marker &&
          props.marker.circles &&
          props.marker.circles.length > 0
        ) {
          return true;
        }
        return false;
      });
      return {
        paths,
        circles,
      };
    },
  });
</script>
