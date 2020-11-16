  <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/1.0.18/vue.min.js"></script>
  <template>
  <div id="lvTable">
    <table>
      <thead>
        <tr> 
          <th>№</th>
          <th>ФИО</th>
          <th>Должность</th>
          <th class="th60">Отдел</th>
          <th class="th60">Оклад</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(entry, index) in tbData" :key="index">
          <td style="text-align:center"><b>{{index + 1}}</b></td>
          <td><input class="th180" :placeholder="entry['name']" v-model="entry['name']"  title="Введите имя работника"></td> 
          <td><input class="th60" :placeholder="entry['position']" v-model="entry['position']" type="text" min="0" max="999999" maxlength="100" title="Введите должность"></td>
          <td><input class="th60" :placeholder="entry['department']" v-model="entry['department']" type="text" min="0" max="999999" maxlength="100" title="Отдел"></td> 
          <td><input class="th60 thAm" :placeholder="entry['salary']" readonly title="Оклад"></td> 
          <td><button class="b20" v-if="tbData.length > 1" v-on:click="fDeleteRow(index)" title="Удалить строку">-</button></td> 
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td><button class="b20" @click="fAddNewRow" title="Добавить строку в таблицу">+</button></td> 
        </tr>
      </tfoot>
    </table>
  </div>
  </template>

<script>
export default {
  name: "lvTable",
  initdata: {
    initData: [
      { name: "", position: 1, department: 1, salary: 1 }
    ]
  },
  methods: {
    fAddNewRow: function () {
      // Добавить новую строку в таблицу
      this.tbData.push({ name: "", position: 1, department: 1, salary: 1 });
    },
    fDeleteRow: function (index) {
      // Удалить строку с номером index из таблицы
      this.tbData.splice(index, 1);
    }
  }
}  
</script>
