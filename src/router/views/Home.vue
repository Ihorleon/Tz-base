<template>
  


<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>

  </head>
    <body class="bg-light overflow-x-hidden">
    <div class="row">
        <div class="col-2">
            <div class="row">
                <div class="col-12 ml-4 mb-3">
                </div>
                <div class="col-12 mt-5 ml-4">
                    <ul class="list-group ">
                        <li class="list-group-item border-0 bg-light" href="#"><i class="fas fa-bars mr-3"></i> Відправлення</li>
                        <li class="list-group-item border-0 bg-light text-uppercase disabled">Налаштування</li>
                        <li class="list-group-item border-0 bg-light"><i class="fas fa-map-signs mr-3"></i> Маршрути</li>
                        <li class="list-group-item border-0 bg-light"><i class="fas fa-address-card mr-3"></i> Перевізники</li>
                        <li class="list-group-item border-0 bg-light"><i class="fas fa-shuttle-van mr-3"></i> Автобуси</li>
                        <li class="list-group-item border-0 bg-light text-success"><i class="fas fa-user-tie mr-3"></i> Водії</li>
                      </ul>
                </div>
            </div>
        </div>
        <div class="col-9 my-4">
            <div class="row">
                <div class="col-2">
                    <i class="fas fa-bars mr-3"></i>
                </div>
                <div class="input-group mb-3 col-5">
                    <input type="text" class="form-control" placeholder="Пошук..." aria-label="Recipient's username" aria-describedby="button-addon2">
                    <div class="input-group-append">
                      <button class="btn btn-outline-success" type="button" id="button-addon2">Знайти</button>
                    </div>
                </div>
                <div class="col-5 pl-5">
                    <div class="row">
                        <div class="dropdown mr-4">
                            <button class="btn btn-secondary border-0 bg-white text-dark  dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                             Олександр
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                              <a class="dropdown-item" href="#">Action</a>
                              <a class="dropdown-item" href="#">Another action</a>
                              <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </div>
                        <div class="dropdown">
                            <button class="btn btn-secondary border-0 text-dark bg-light dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                УКР
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                              <a class="dropdown-item" href="#">РУС</a>
                              <a class="dropdown-item" href="#">АНГ</a>
                              <a class="dropdown-item" href="#">ФРН</a>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div class="row ">
                <div class="col-12 h3 ml-3 my-4"><div class="row">Водії <div class="ml-3 h5">5</div></div></div>
                <button type="button" class="btn btn-success btn-lg" id="addDrive" ><i class="fas fa-plus mx-1"></i> Додати водія</button>
            </div>  
            <div class="row" id="myTables">
                <div class="col-12 my-4">
                    <div class="row">
                        <table class="table table-striped">
                            <thead class="bg-white">
                                <tr>
                                <th scope="col" >№</th>
                                <th scope="col">Водій</th>
                                <th scope="col">ID</th>
                                <th scope="col">Перевізник</th>
                                <th scope="col">Перевізник</th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody class="bg-white" id="tbody">
                                <tr>
                                <td>1.</td>
                                <td><div class="h6 drive" lastName ="yrod" numbRide="228" medtest = "da" name="vasj" asetsData="2020-11-02" medTestData="2020-11-01" FName="volk" categori="A1" phone="+380971159596" idRive="322" Perev="9J">Гуменюк Н.Р</div></td>
                                <td>234 205</td>
                                <td>ФОП Бернадський</td>
                                <td></td>
                                <td> </td>
                                <td> </td>
                                <td><button type="button" class="btn btn-outline-danger border-0">Видалити</button></td>
                                </tr>
                            </tbody>
                            </table>
                    </div>
                </div>
            </div>
            <div class="row d-none" id="inputForm">
                <div class="col-12 my-4">
                    <div class="row bg-white">
                        <div class="mt-2 col-12">
                            <div class="row">
                                <div class="form-group col-3">
                                    <label for="last_name">Прізвище</label>
                                    <input type="text" id="last_name" class="form-control">
                                </div>
                                <div class="form-group col-3">
                                    <label for="numb_ride">Номер водійського посвідчення</label>
                                    <input type="text" id="numb_ride" class="form-control">
                                </div>
                                <div class="form-group col-3">
                                    <label for="medtest">Медогляд до</label>
                                    <input type="date" id="medtest" name="bday" min="1000-01-01" max="3000-12-31" class="form-control">
                                </div>
                            </div>
                            <div class="row">
                                <div class="form-group col-3">
                                    <label for="name">Ім’я</label>
                                    <input type="text" id="name" class="form-control">
                                </div>
                                <div class="form-group col-3">
                                    <label for="asetsData">Срок дії посвідчення</label>
                                    <input type="text" id="asetsData" class="form-control">
                                </div>
                                <div class="form-group col-3">
                                    <label for="medTestData">Медогляд до</label>
                                    <input type="date" id="medTestData" name="bday" min="1000-01-01" max="3000-12-31" class="form-control">
                                </div>
                            </div>

                            <div class="row">
                                <div class="form-group col-3">
                                    <label for="FName">По батькові</label>
                                    <input type="text" id="FName" class="form-control">
                                </div>
                                <div class="form-group col-3">
                                    <label for="categori">Категорії</label>
                                    <input type="email" id="categori" class="form-control" aria-describedby="emailHelp">
                                </div>
                                <div class="form-group col-3">
                                    <label for="phone">Телефон</label>
                                    <input type="text" id="phone" class="form-control">
                                </div>
                            </div>
                            <div class="row">
                                <div class="form-group col-3">
                                    <label for="idRive">ID водія</label>
                                    <input type="text" id="idRive" class="form-control" maxlength="7" placeholder="000 000">
                                </div>
                                <div class="form-group col-3">
                                    <label for="Perev">Перевізник</label>
                                    <input type="text" id="Perev" class="form-control">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row mt-3 ml-1">
                        <button type="button" class="btn mr-4 btn-success" id="DriveSave"><i class="far fa-save mx-2"></i> Зберегти і вийти</button>
                        <button type="button" class="btn btn-secondary"><i class="fas fa-ban mx-2"></i>Відмінити</button>
                    </div>
                </div>

            </div>
        </div>
        
    </div>

  </body>
</html>

</template>

<script>
  document.addEventListener("handlerFunction", function() {
  for (let i = 0; i < document.getElementsByClassName("drive"); i++) {
  document.getElementsByClassName("drive")[i].addEventListener( "click", (event)=>{
      console.log(event);
      console.log(event.target.attributes.lastname.nodeValue)
      document.getElementById('last_name').value = event.target.attributes.lastname.nodeValue
      document.getElementById('numb_ride').value = event.target.attributes.numbride.nodeValue
      document.getElementById('medtest').value = event.target.attributes.medtest.nodeValue
      document.getElementById('name').value = event.target.attributes.name.nodeValue
      document.getElementById('asetsData').value = event.target.attributes.asetsdata.nodeValue
      document.getElementById('medTestData').value = event.target.attributes.medtestdata.nodeValue
      document.getElementById('FName').value = event.target.attributes.fname.nodeValue
      document.getElementById('categori').value = event.target.attributes.categori.nodeValue
      document.getElementById('phone').value = event.target.attributes.phone.nodeValue
      document.getElementById('idRive').value = event.target.attributes.idrive.nodeValue
      document.getElementById('Perev').value = event.target.attributes.perev.nodeValue

      document.getElementById("myTables").classList.add("d-none")
      document.getElementById("inputForm").classList.remove("d-none")
  }, false);
}

    document.getElementById('DriveSave').addEventListener('click',()=>{
  var bodyTables = document.getElementById('tbody')
  var num = document.getElementsByTagName('TR').length
  var tableElement = "<tr>";
  tableElement +="<td>"+num+"</td>"
  tableElement += '<td><div class="h6 drive" lastName ="'+document.getElementById('last_name').value+'" ' +
      'numbRide="'+document.getElementById('numb_ride').value+'" ' +
      'medtest = "'+document.getElementById('medtest').value+'" ' +
      'name="'+document.getElementById('name').value+'" ' +
      'asetsData="'+document.getElementById('asetsData').value+'" ' +
      'medTestData="'+document.getElementById('medTestData').value+'" ' +
      'FName="'+document.getElementById('FName').value+'" ' +
      'categori="'+document.getElementById('categori').value+'" ' +
      'phone="'+document.getElementById('phone').value+'" ' +
      'idRive="'+document.getElementById('idRive').value+'" ' +
      'Perev="'+document.getElementById('Perev').value+'">'+document.getElementById('name').value+'</div></td>'
  tableElement += '<td>'+document.getElementById('numb_ride').value+'</td>'
  tableElement += '<td>ФОП Бернадський</td>'
  tableElement += '<td></td><td></td><td></td><td><button type="button" class="btn btn-outline-danger border-0">Видалити</button></td>'
  tableElement += "</tr>"
  bodyTables.innerHTML+=tableElement

  document.getElementById("inputForm").classList.add("d-none")
  document.getElementById("myTables").classList.remove("d-none")
})

  document.getElementById('addDrive').addEventListener('click',()=>{
  document.getElementById('last_name').value = ""
  document.getElementById('numb_ride').value = ""
  document.getElementById('medtest').value = ""
  document.getElementById('name').value = ""
  document.getElementById('asetsData').value = ""
  document.getElementById('medTestData').value = ""
  document.getElementById('FName').value = ""
  document.getElementById('categori').value = ""
  document.getElementById('phone').value = ""
  document.getElementById('idRive').value = ""
  document.getElementById('Perev').value = ""

  document.getElementById("myTables").classList.add("d-none")
  document.getElementById("inputForm").classList.remove("d-none")
})
 
 })
</script>
