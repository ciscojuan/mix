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

              <form class="form-group" autocomplete="off" >

                  <div class="row">  
                    <div class="col-xs-6">
                      <div class="form-group">
                        <label for="factura">Factura No</label>
                        <input type="text" class="form-control" name="factura" id="factura" placeholder="Numero de Fatura" pattern="[0-9]{4}">
                      </div>
                    </div>
                    <div class="col-xs-6">
                      <div class="form-group">
                          <label for="date">Fecha</label>
                          <input type="date" class="form-control col-xs-1" name="date" id="date" placeholder="Fecha" >
                      </div>
                    </div>
                  </div>
                
                  <div class="row">
                    <div class="col-xs-4">
                        <div class="form-group">
                            <label for="cliente">Cliente</label>
                            <input type="text" class="form-control " name="cliente" id="cliente" placeholder="Nombre Cliente" >
                          </div>
                    </div>
                    <div class="col-xs-4">
                        <div class="form-group">
                            <label for="nit">NIT</label>
                            <input type="text" class="form-control " name="nit" id="nit" placeholder="Numero de Fatura" pattern="[0-9]{10}">
                        </div>
                    </div>
                    <div class="col-xs-4">
                        <div class="form-group">
                            <label for="telefono">Telefono</label>
                            <input type="text" class="form-control " name="telefono" id="telefono" placeholder="Numero de Fatura" pattern="[0-9]{10}">
                          </div>
                    </div>
                  </div>

                  <div class="form-group">
                        <label for="direccion">Domicilio</label>
                        <input type="text" class="form-control " name="direccion" id="direccion" placeholder="Direccion" pattern="[A-Za-z0-9]{20}">
                  </div>
                  
                  <div class="row">
                    <div class="col-xs-6"> 
                        <div class="form-group">
                            <label for="ciudadn">Ciudad</label>
                            <input type="text" class="form-control " name="ciudad" id="ciudad" placeholder="ciudad" pattern="[A-Za-z]{20}">
                        </div>
                    </div>
                    <div class="col-xs-6"> 
                        <div class="form-group">
                            <label for="departamento">Departamento</label>
                            <input type="text" class="form-control " name="departamento" id="departameto" placeholder="Departamento" pattern="[A-Za-z]{20}">
                        </div>
                    </div>
                  </div>
                  
                  <div class="row">
                    <div class="col-xs-4">
                        <div class="form-group">
                            <label for="departamento">Cantidad</label>
                            <input type="text" class="form-control " name="cantidad" id="cantidad" placeholder="000" pattern="[0-9]{4}">
                        </div>
                    </div>
                    <div class="col-xs-4">
                        <div class="form-group">
                            <label for="codigo">Codigo</label>
                            <input type="text" class="form-control " name="codigo" id="codigo" placeholder="000" pattern="[0-9]{4}">
                        </div>
                    </div>
                    <div class="col-xs-4">
                        <div class="form-group">
                            <label for="departamento">Valor UNIT</label>
                            <input type="text" class="form-control " name="valorU" id="valorU" placeholder="$000" pattern="[0-9]{9}">
                        </div>
                    </div>
                  </div>
                
                  
                  <div class="row">
                    <div class="col-xs-12 ">
                        <div class="form-group">
                            <label for="descripcion">Descripcion</label>
                            <textarea class="form-control" rows="3" name="descripcion" id="descripcion"></textarea>
                        </div>
                    </div>
                  </div>
                  
                  
                  <div class="row">
                    <div class="col-xs-3">
                        <div class="form-group">
                            <label for="departamento">Valor Total</label>
                            <input type="text" class="form-control " name="valorT" id="valorT" placeholder="$000" pattern="[0-9]{9}">
                        </div>
                    </div>
                    <div class="col-xs-9">
                      <div class="form-group">
                          <button class="btn btn-success">Agregar Articulo</button>
                          <button class="btn btn-danger">Eliminar Articulo</button>
                          <a href="modeloFactura.php"><button class="btn btn-primary">Generar Factura</button></a>
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
