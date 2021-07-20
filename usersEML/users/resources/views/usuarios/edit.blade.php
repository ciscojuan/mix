@extends('layouts.template')
@section('content')
<div class="container my-5 text-center">
            <p class="display-5 text-center ">Edicion de Usuarios</p>

            <form action="{{ url('/usuarios/'.$usuario->id) }}" method="POST" enctype="multipart/form-data" class="form-horizontal">
            {{csrf_field()}}
            {{method_field('PATCH')}}
            @include('usuarios.form', ['Modo' => 'edit'])
            </form>
        </div>
@endsection