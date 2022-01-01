<template>
  <div
    class="px-4 prose max-w-none md:px-16"
    :class="{ 'md:columns-2 md:gap-12': split }"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Prose',

  props: {
    split: Boolean
  }
}
</script>
