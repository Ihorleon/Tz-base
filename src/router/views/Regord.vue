<template>
  <div>
    <div class="page-title">
      <h3>Новый работник</h3>
    </div>

    <form class="form">
      <div class="input-field" >
        <select>
          <option
          >name cat</option>
        </select>
      </div>

      <p>
        <label>
          <input
              class="with-gap"
              name="type"
              type="radio"
              value="income"
          />
          <span>Бухгалтерия</span>
        </label>
      </p>

      <p>
        <label>
          <input
              class="with-gap"
              name="type"
              type="radio"
              value="outcome"
          />
          <span>Офис</span>
        </label>
      </p>

      <div class="input-field">
        <input
            id="name"
            type="text"
        >
        <label for="name">ФИО</label>
        <span class="helper-text invalid">Введите ФИО работника</span>
      </div>
      
      <div class="input-field">
        <input
            id="position"
            type="text"
        >
        <label for="position">Должность</label>
        <span class="helper-text invalid">Введите должность работника</span>
      </div>

      <div class="input-field">
        <input
            id="description"
            type="number"
        >
        <label for="description">Оклад</label>
        <span
              class="helper-text invalid">Введите сумму оклада</span>
      </div>

      <button class="btn waves-effect waves-light" type="submit">
        Создать
        <i class="material-icons right">send</i>
      </button>
    </form>
  </div>
</template>
