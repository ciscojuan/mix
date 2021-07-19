
<!doctype html>
<html class="no-js" lang=""> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>BICICLETAS CODMW</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="apple-touch-icon" href="apple-touch-icon.png">
        <link rel="stylesheet" href="css/bootstrap.min.css">
        <link rel="stylesheet" href="css/bootstrap-theme.min.css">
        <link rel="stylesheet" href="css/main.css">
        <script src="js/vendor/modernizr-2.8.3-respond-1.4.2.min.js"></script>
    </head>
    <body>
      <div class="container">

            <div class="row banner">
              <div class="col-xs-12 col-md-12 col-lg-10">
                  <h1 class="text-center">BICICLETAS CODMW3</h1>
                  <h2 class="text-center">Software de Facturacion</h2>
              </div>             
            </div>

            <div class="row">
                <div class="col-xs-12 col-md-12 col-lg-12 btn-danger">
                    <h4 >Informacion del Comprador</h4>     
                </div>
d
              <form class="form-group" autocomplete="off">

                  <div class="row">  
                    <div class="col-xs-6">
                      <div class="form-group">
                        <label for="factura">Factura No</label>
                        <input type="text" class="form-control " id="factura" value="<?= $_GET['factura']?>" disabled>
                      </div>
                    </div>
                    <div class="col-xs-6">
                      <div class="form-group">
                          <label for="date">Fecha</label>
                          <input type="text" class="form-control col-xs-1" id="date" Value="<?= $_GET['date']?>" disabled>
                      </div>
                    </div>
                  </div>
                
                  <div class="row">
                    <div class="col-xs-4">
                        <div class="form-group">
                            <label for="cliente">Cliente</label>
                            <input type="text" class="form-control " id="cliente" value="<?=$_GET['cliente']?>" disabled>
                          </div>
                    </div>
                    <div class="col-xs-4">
                        <div class="form-group">
                            <label for="nit">NIT</label>
                            <input type="text" class="form-control " id="nit" value="<?=$_GET['nit']?>" disabled>
                        </div>
                    </div>
                    <div class="col-xs-4">
                        <div class="form-group">
                            <label for="telefono">Telefono</label>
                            <input type="text" class="form-control " id="telefono" value="<?=$_GET['telefono']?>" disabled>
                          </div>
                    </div>
                  </div>

                  <div class="form-group">
                        <label for="direccion">Domicilio</label>
                        <input type="text" class="form-control " id="direccion" value="<?=$_GET['direccion']?>" disabled>
                  </div>
                  
                  <div class="row">
                    <div class="col-xs-6"> 
                        <div class="form-group">
                            <label for="ciudadn">Ciudad</label>
                            <input type="text" class="form-control " id="ciudad" value="<?=$_GET['ciudad']?>" disabled>
                        </div>
                    </div>
                    <div class="col-xs-6"> 
                        <div class="form-group">
                            <label for="departamento">Departamento</label>
                            <input type="text" class="form-control " id="departameto" value="<?=$_GET['departamento']?>" disabled>
                        </div>
                    </div>
                  </div>
                  
                  <table class="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>Cantidad</th>
                            <th>Codigo</th>
                            <th>Descripcion Articulo</th>
                            <th>Valor Unidad</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><?=$_GET['cantidad']?></td>
                            <td><?=$_GET['codigo']?></td>
                            <td><?=$_GET['descripcion']?></td>
                            <td><?=$_GET['valorU']?></td>
                        </tr>     
                    </tbody>
                </table>

                  <div class="row">
                    <div class="col-xs-3 pull-right">
                        <div class="form-group ">
                            <label for="departamento">Valor Total</label>
                            <input type="text" class="form-control" id="total" value="<?=$_GET['valorT']?>" disabled>
                        </div>
                    </div>
                    
                    
                  </div>
              
              </form>
            </div>
          

      </div>
      
    </body>

    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
    <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.11.2.min.js"><\/script>')</script>
    <script src="js/vendor/bootstrap.min.js"></script>
    <script src="js/main.js"></script>


</html>
