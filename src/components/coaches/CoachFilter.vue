<template>
  <div class="filter__wrapper">
    <form action="" method="post">
      <h3>Filter Coaches</h3>

      <div class="all">
        <input
          type="checkbox"
          name="all"
          value="all"
          id="all"
          @change="onChange"
          checked
        />
        <label for="all">All</label>
      </div>
      <div class="all">
        <input
          type="checkbox"
          name="filter"
          value="python"
          id="python"
          @change="onChange"
          checked
        />
        <label for="python">python</label>
      </div>
      <div class="all">
        <input
          type="checkbox"
          name="filter"
          value="photoshop"
          id="photoshop"
          @change="onChange"
          checked
        />
        <label for="photoshop">photoshop</label>
      </div>
      <div class="all">
        <input
          type="checkbox"
          name="filter"
          value="javascript"
          id="javascript"
          @change="onChange"
          checked
        />
        <label for="javascript">javascript</label>
      </div>
      <div class="all">
        <input
          type="checkbox"
          name="filter"
          value="ruby"
          id="ruby"
          @change="onChange"
          checked
        />
        <label for="ruby">ruby</label>
      </div>
      <div class="all">
        <input
          type="checkbox"
          name="filter"
          value="php"
          id="php"
          @change="onChange"
          checked
        />
        <label for="php">php</label>
      </div>
      <div class="all">
        <input
          type="checkbox"
          name="filter"
          value="SQL"
          id="SQL"
          @change="onChange"
          checked
        />
        <label for="SQL">SQL</label>
      </div>
      <div class="all">
        <input
          type="checkbox"
          name="filter"
          value="vue"
          id="vue"
          @change="onChange"
          checked
        />
        <label for="vue">vuejs</label>
      </div>
      <div class="all">
        <input
          type="checkbox"
          name="filter"
          value="react"
          id="react"
          @change="onChange"
          checked
        />
        <label for="react">reactjs</label>
      </div>
      <div class="all">
        <input
          type="checkbox"
          name="filter"
          value="accounting"
          id="accounting"
          @change="onChange"
          checked
        />
        <label for="accounting">accounting</label>
      </div>
      <div class="all">
        <input
          type="checkbox"
          name="filter"
          value="gaming"
          id="gaming"
          @change="onChange"
          checked
        />
        <label for="gaming">Gaming</label>
      </div>
      <div class="all">
        <input
          type="checkbox"
          name="filter"
          value="sales"
          id="sales"
          @change="onChange"
          checked
        />
        <label for="sales">sales</label>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  emits: ['change-filter'],
  data() {
    return {
      filters: {
        python: true,
        photoshop: true,
        javascript: true,
        ruby: true,
        php: true,
        SQL: true,
        vue: true,
        react: true,
        accounting: true,
        sales: true,
        any: true,
        gaming: true
      }
    };
  },
  methods: {
    onChange(e) {
      const checkId = e.target.id;
      const checkValue = e.target.checked;
      const updatedFilter = {
        ...this.filters,
        [checkId]: checkValue
      };
      this.filters = updatedFilter;
      this.$emit('change-filter', updatedFilter);
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
h3 {
  margin-bottom: 1rem;
}
</style>
