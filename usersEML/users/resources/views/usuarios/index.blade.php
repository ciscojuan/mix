@extends('layouts.template')
@section('content')


<div class="container">
    
    <h1 class="display-5 text-center">Lista de Usuarios</h1>
    <table class="table table-light table-hover  text-center">
        <thead class="thead-info">
            <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre Completo</th>
                <th scope="col">Email</th>
                <th scope="col">Telefono</th>
                <th scope="col">Fecha Registro</th>
                <th scope="col">Fecha Modificacion</th>
                <th scope="col">Imagen</th>
                <th scope="col">Edicion</th>
            </tr>
        </thead>
        <tbody>
            @foreach($usuarios as $usuario)
            <tr>
                <th scope="row">{{ $usuario->id}}</th>
                <th>{{$usuario->nombre1.' '.$usuario->nombre2.' '.$usuario->apellido1.' '.$usuario->apellido2}}</th>
                <td>{{ $usuario->email}}</td>
                <td>{{ $usuario->telefono}}</td>
                <td>{{ $usuario->created_at}}</td>
                <td>{{ $usuario->updated_at}}</td>
                <td><img src="{{ asset('storage').'/'.$usuario->imagen }}" class="img-thumbnail img-fluid" alt="{{$usuario->nombre.$usuario->apellido}}" width="100" height="100"></td>
                <td>
                    <a href="{{ url('/usuarios/'.$usuario->id.'/edit') }}" class="btn  btn-warning">Editar</a>
                    <form method="post" action="{{ url('/usuarios/'.$usuario->id) }}" style="display: inline;">
                        {{csrf_field()}}
                        {{method_field('DELETE')}}
                        <button type="submit" class="btn btn-danger" onclick="return confirm('¿Desea Borrar el usuario?');">Borrar</button>
                    </form>
                </td>
            </tr>
            @endforeach
        </tbody>
    </table>
    <a class="btn btn-lg btn-outline-success mb-4" href="{{ url('usuarios/create') }}">Agregar Usuario</a>
</div>
@endsection