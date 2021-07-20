<!-- Nombres -->
<div class="row mb-4">
    <div class="col-sm-12 col-md-6">
        <div class="form-group">
            <input type="text" class="form-control form-control-lg {{$errors->has('nombre1') ? 'is-invalid' : ''}}" name="nombre1" value="{{ isset($usuario->nombre1) ? $usuario->nombre1 : old('nombre1') }}" placeholder="{{ isset($usuario->nombre1) ? $usuario->nombre1 : 'Nombre1' }}"  />
            <label class="form-label text-center">Primer Nombre</label>
            {!! $errors->first('nombre1', '<div class="invalid-feedback">:message</div>')!!}
        </div>
    </div>
    <div class="col-sm-12 col-md-6">
        <div class="form-group">
            <input type="text" class="form-control form-control-lg {{$errors->has('nombre2') ? 'is-invalid' : ''}}" name="nombre2" value="{{ isset($usuario->nombre2) ? $usuario->nombre2 : old('nombre2') }}" placeholder="{{ isset($usuario->nombre2) ? $usuario->nombre2 : 'Nombre2' }}" />
            <label class="form-label">Segundo Nombre</label>
            {!! $errors->first('nombre2', '<div class="invalid-feedback">:message</div>') !!}
        </div>
    </div>
</div>

<!-- Apellidos -->
<div class="row mb-4">
    <div class="col-sm-12 col-md-6">
        <div class="form-group">
            <input type="text" class="form-control form-control-lg {{$errors->has('apellido1') ? 'is-invalid' : ''}}" name="apellido1" value="{{ isset($usuario->apellido1) ? $usuario->apellido1 : old('apellido1') }}" placeholder="{{ isset($usuario->apellido1) ? $usuario->apellido1 : 'Apellido1' }}"  />
            <label class="form-label">Primer Apellido</label>
            {!! $errors->first('apellido1', '<div class="invalid-feedback">:message</div>') !!}
        </div>
    </div>
    <div class="col-sm-12 col-md-6">
        <div class="form-group">
            <input type="text" class="form-control form-control-lg {{$errors->has('apellido2') ? 'is-invalid' : ''}}" name="apellido2" value="{{ isset($usuario->apellido2) ? $usuario->apellido2 : old('apellido2')}}" placeholder="{{ isset($usuario->apellido2) ? $usuario->apellido2 : 'Apellido2' }}" />
            <label class="form-label">Segundo Apellido</label>
            {!! $errors->first('apellido2', '<div class="invalid-feedback">:message</div>') !!}
        </div>
    </div>
</div>
<!-- Email input and phone number -->
<div class="row mb-4">
    <div class="col-sm-12 col-md-6">
        <input type="email" class="form-control form-control-lg {{$errors->has('email') ? 'is-invalid' : ''}}" name="email" value="{{ isset($usuario->email) ? $usuario->email : old('email') }}" placeholder="{{ isset($usuario->email) ? $usuario->email : ' Email' }}"  />
        <label class="form-label">Email</label>
        {!! $errors->first('email', '<div class="invalid-feedback">:message</div>') !!}
    </div>

    <div class="col-sm-12 col-md-6">
        <input type="text" class="form-control form-control-lg {{$errors->has('telefono') ? 'is-invalid' : ''}}" name="telefono" value="{{ isset($usuario->telefono) ? $usuario->telefono : old('telefono') }}" placeholder="{{ isset($usuario->telefono) ? $usuario->telefono : 'Telefono' }}"  />
        <label class="form-label text-center">Telefono</label>
        {!! $errors->first('telefono', '<div class="invalid-feedback">:message</div>') !!}
    </div>
</div>
<!-- Passwords -->
<div class="row mb-4">
    <div class="col-12">
        <div class="form-group">
            <input type="password" class="form-control form-control-lg {{$errors->has('contrasena') ? 'is-invalid' : ''}}" name="contrasena" value="{{ isset($usuario->contrasena) ? $usuario->contrasena : old('contrasena')}}" placeholder="{{ isset($usuario->contrasena) ? $usuario->contrasena : 'Contraseña'}}"  />
            <label class="form-label">Contraseña</label>
            {!! $errors->first('contrasena', '<div class="invalid-feedback">:message</div>') !!}
        </div>
    </div>

</div>
<!-- Imagen -->
<div class="col form-group mb-5">
    <h4>Foto</h4>
    @if(isset($usuario->imagen))
        <img src="{{ asset('storage').'/'.$usuario->imagen }}" class="img-thumbnail" alt="{{$usuario->nombre1.$usuario->nombre2}}" width="140" height="220"><br>
    @endif
    <br>

    <input type="file" name="imagen" class="form-control form-control-lg {{$errors->has('imagen') ? 'is-invalid' : ''}}" />
    {!! $errors->first('imagen', '<div class="invalid-feedback">:message</div>') !!}
    
</div>

<!-- Submit button -->
<button type="submit" class="btn btn-outline-info mx-3">{{$Modo == 'create' ?'Create User' : 'Update User'}}</button>
<a class="btn btn-outline-info" href="{{ url('usuarios') }}">Regresar</a>