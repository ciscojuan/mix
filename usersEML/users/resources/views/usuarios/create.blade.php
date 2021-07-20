@extends('layouts.template')
@section('content')
<div class="container my-5 text-center">
    @if(count($errors)>0)
    <div class="alert alert-danger" role="alert">
        <ul>
            @foreach($errors->all() as $error)
            <li>{{$error}}</li>
            @endforeach
        </ul>
    </div>
    @endif
    <p class="display-5 text-center ">Formulario Creacion de Usuarios</p>

    <form action="{{ url('/usuarios') }}" method="POST" enctype="multipart/form-data">
        {{csrf_field()}}
        @include('usuarios.form', ['Modo' => 'create'])

    </form>

</div>
@endsection