<template>
  <template v-if="entry">
    <div class="entry-title d-flex justify-content-between p-2">
      <div>
        <span class="text-success fs-3 fw-bold">{{ day }}</span>
        <span class="mx-1 fs-3">{{ month }}</span>
        <span class="mx-2 fs-4 fw-light">{{ yearDay }}</span>
        <span></span>
      </div>

      <div>
        <button v-if="entry.id" class="btn btn-danger mx-2" @click="handleDelete">
          Borrar<i class="fa fa-trash-alt"></i>
        </button>
        <!-- <button class="btn btn-primary">
          Subir foto<i class="fa fa-upload"></i>
        </button> -->
      </div>
    </div>

    <hr />

    <div class="d-flex flex-column px-3 h-75">
      <textarea v-model="entry.title" cols="30" rows="10" placeholder="What's happened today?"></textarea>
    </div>
  </template>

  <Fab icon="fa-save" @saveEntry="saveEntry" />

  <img src="https://cdn.pixabay.com/photo/2023/03/20/03/55/ducks-7863701_1280.jpg" alt="entry-picture"
    class="img-thumbnail" />
</template>

<script>
import { defineAsyncComponent } from "vue";
import { mapGetters, mapActions, mapState } from "vuex";

import getDayYear from "../helpers/getDayMonthYear";

import Swal from 'sweetalert2'

export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  components: {
    Fab: defineAsyncComponent(() => import("../components/Fab.vue")),
  },

  data() {
    return {
      entry: null,
    };
  },

  computed: {
    ...mapGetters("journal", ["getEntryById"]),
    ...mapState("journal", ["entries"]),
    getId() {
      return this.getEntryById(this.id);
    },
    day() {
      const { day } = getDayYear(this.entry.date);

      return day;
    },
    month() {
      const { month } = getDayYear(this.entry.date);

      return month;
    },
    yearDay() {
      const { yearDay } = getDayYear(this.entry.date);

      return yearDay;
    },
  },
  methods: {
    loadEntry() {
      let entry;

      if (this.id === "new") {
        entry = {
          title: "",
          date: new Date().toDateString()
        }
      } else {
        entry = this.getEntryById(this.id)
        if (!entry) {
          return this.$router.push({ name: "no-entry" });
        }
      }


      this.entry = entry;
    },
    async saveEntry() {

      new Swal({
        title: "Espere por favor...",
        allowOutsideClick: false
      })

      Swal.showLoading()

      if (this.entry.id) {

        await this.updateEntry(this.entry)
      } else {
        await this.createEntry(this.entry);

        this.$router.push({ name: "entry", params: { id: this.entries[0].id } })
      }

      Swal.fire("Guardado", "", "success")

    },
    async handleDelete() {

      const { isConfirmed } = await Swal.fire({ title: "¿Estas seguro de eliminar?", icon: "question", showDenyButton: true })

      if (!isConfirmed) return

      await this.deleteEntry(this.entry.id);
      this.$router.push("/daybook")
    },
    ...mapActions("journal", ["updateEntry", "createEntry", "deleteEntry"])
  },
  created() {
    this.loadEntry();
  },

  watch: {
    id() {
      this.loadEntry();
    },
  },
};
</script>

<style lang="scss" scoped>
textarea {
  font-size: 20px;
  border: none;
  height: 100%;
  resize: none;

  &:focus {
    outline: none;
  }
}

img {
  width: 200px;
  position: fixed;
  bottom: 200px;
  right: 10px;
}
</style>
