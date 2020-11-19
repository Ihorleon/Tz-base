<template>
   
    <ul class="sidenav app-sidenav open" :class="{open: value}">
       <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <li>
        <a href="#" class="waves-effect waves-green pointer">
          <i class="tiny material-icons">dehaze</i>
          Відправлення</a>
      </li>
       <li><a class="subheader">Налаштування</a></li>
       <li><div class="divider"></div></li>
      <li>
        <a href="#" class="waves-effect waves-green pointer">
          <i class="tiny material-icons">call_split</i>
          Рейси</a>
      </li>
      <li>
        <a href="#" class="waves-effect waves-green pointer">
          <i class="tiny material-icons">map</i>
          Маршути</a>
      </li>
      <li>
        <a href="#" class="waves-effect waves-green pointer">
          <i class="tiny material-icons">contacts</i>
          Перевізники</a>
      </li>
      <li>
        <a href="#" class="waves-effect waves-green pointer">
          <i class="tiny material-icons">directions_bus</i>
          Автобуси</a>
      </li>
      <li   v-for="link in links"
      :key="link.url"
      tag="li"
      active-class="active"
      :to="link.url">
        <a href="#" class="waves-effect waves-green pointer">
          <i class="tiny material-icons">person</i>
          {{link.title}}</a>
      </li>
    </ul>

</template>

<script>
export default {
  props: ['value'],
  data: () => ({
    links:[  
        {title: 'Водії', url: '/rider',},
    ]
  })
}
  
</script>
