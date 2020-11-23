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
                        <li class="list-group-item border-0 bg-light " aria-disabled="false"><i class="fas fa-bars mr-3"></i> Відправлення</li>
                        <li class="list-group-item border-0 bg-light text-uppercase disabled">Налаштування</li>
                        <li class="list-group-item border-0 bg-light "><i class="fas fa-map-signs mr-3"></i> Маршрути</li>
                        <li class="list-group-item border-0 bg-light "><i class="fas fa-address-card mr-3"></i> Перевізники</li>
                        <li class="list-group-item border-0 bg-light "><i class="fas fa-shuttle-van mr-3"></i> Автобуси</li>
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
                      <button class="btn btn-outline-success " type="button" id="button-addon2">Знайти</button>
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
                              <a class="dropdown-item" href="#">Action</a>
                              <a class="dropdown-item" href="#">Another action</a>
                              <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div class="row ">
                <div class="col-12 h3 ml-3 my-4"><div class="row">Водій</div></div>
                <router-link type="button" class="btn btn-secondary btn-lg" to="/"><i class="fas fa-chevron-left"></i> Назад</router-link>
            </div>  
            <div class="row">
                <div class="col-12 my-4">
                    <div class="row bg-white">
                        <div class="mt-2 col-12">
                            <div class="row">
                                <div class="form-group col-3">
                                    <label for="last_name">Прізвище</label>
                                   <input type="text" class="form-control">
                                </div>
                                <div class="form-group col-3">
                                    <label for="numb_ride">Номер водійського посвідчення</label>
                                    <input type="text" class="form-control">
                                </div>
                                <div class="form-group col-3">
                                    <label for="exampleInputEmail1">Медогляд до</label>
                                    <input type="date" name="bday" min="1000-01-01" max="3000-12-31" class="form-control">
                                </div>
                            </div>
                            <div class="row">
                                <div class="form-group col-3">
                                    <label for="exampleInputEmail1">Ім’я</label>
                                    <input type="text" class="form-control">
                                </div>
                                <div class="form-group col-3">
                                    <label for="exampleInputEmail1">Срок дії посвідчення</label>
                                    <input type="text" class="form-control">
                                </div>
                                <div class="form-group col-3">
                                    <label for="exampleInputEmail1">Медогляд до</label>
                                    <input type="date" name="bday" min="1000-01-01" max="3000-12-31" class="form-control">
                                </div>
                            </div>
                            
                            <div class="row">
                                <div class="form-group col-3">
                                    <label for="exampleInputEmail1">По батькові</label>
                                    <input type="text" class="form-control">
                                </div>
                                <div class="form-group col-3">
                                    <label for="exampleInputEmail1">Категорії</label>
                                    <input type="email" class="form-control" aria-describedby="emailHelp">
                                </div>
                                <div class="form-group col-3">
                                    <label for="exampleInputEmail1">Телефон</label>
                                    <input type="text" class="form-control">
                                </div>
                            </div>
                            <div class="row">
                                <div class="form-group col-3">
                                    <label for="exampleInputEmail1">ID водія</label>
                                    <input type="text" class="form-control" maxlength="7" placeholder="000 000">
                                </div>
                                <div class="form-group col-3">
                                    <label for="exampleInputEmail1">Перевізник</label>
                                    <input type="text" class="form-control">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row mt-3 ml-1">
                        <button type="button" class="btn mr-4 btn-success"><i class="far fa-save mx-2"></i> Зберегти і вийти</button>
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
    document.getElementsByClassName("element").addEventListener("click",()=>{
    document.getElementById("table").classList.remove("d-flex")
    document.getElementById("table").classList.add("d-none")
    document.getElementById("formGroup").classList.remove("d-none")
    document.getElementById("formGroup").classList.add("d-flex")
})
</script>
