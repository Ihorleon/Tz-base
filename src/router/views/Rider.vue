
<template>
    <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s4">
          <input id="last_name" type="text" class="validate">
          <label for="last_name">Прізвище</label>
        </div>
          <div class="input-field col s4">
            <input id="number_ride" type="text" class="validate">
            <label for="number_ride">Номер водійського посвідчення</label>
          </div>
            <div class="input-field col s4">
               <input id="mes_date" type="date" class="validate">
               <label for="mes_date">Медогляд до</label>
             </div>
              <div class="input-field col s4">
                <input id="first_name" type="text" class="validate">
                <label for="first_name">Ім'я</label>
              </div>
                <div class="input-field col s4">
                  <input id="ride_date" type="text" class="validate">
                  <label for="ride_date">Срок дії посвідчення</label>
                </div>
                    <div class="input-field col s4">
                    <input id="mes_date1" type="date" class="validate">
                    <label for="mes_date1">Медогляд до</label>
                    </div>
                      <div class="input-field col s4">
                      <input id="midlle_name" type="text" class="validate">
                      <label for="midlle_name">По-батькові</label>
                    </div>
                    
                      <div class="input-field col s4">
                        <select >
                          <option value="" disabled selected>Виберіть категорію</option>
                          <option value="1">А1</option>
                          <option value="2">А</option>
                          <option value="3">В1</option>
                          <option value="4">В</option>
                          <option value="5">С1</option>
                          <option value="6">С</option>
                          <option value="7">D1</option>
                          <option value="8">D</option>
                          <option value="9">BE</option>
                          <option value="10">C1E</option>
                          <option value="11">CE</option>
                          <option value="12">D1E</option>
                          <option value="13">DE</option>
                          <option value="14">T</option>
                        </select>
                        <label>Виберіть категорію</label>
                      </div>
              <div class="input-field col s4">
                <input id="tel_number" type="text" class="validate">
                <label for="tel_number">Телефон</label>
              </div>
                    <div class="input-field col s4">
                      <input id="ride_id" type="text" class="validate" maxlength="6">
                      <label for="ride_id">ID водія</label>
                    </div>

              <div class="input-field col s4">
                <input id="carrier" type="text" class="validate">
                <label for="carrier">Перевізник</label>
              </div>
      </div>
    </form>
    <div class="row">
                <button class="btn waves-effect waves-light green" type="submit" name="action">Зберегти і вийти
                  <i class="material-icons right">send</i>
                </button>
        </div>            
                    <div class="row">
                <button class="btn waves-effect waves-light grey" type="cancel" name="action">Відмінити
                </button>
                     </div>           
  </div>
</template>


