<?php

namespace App\Http\Controllers;

use App\Models\Usuarios;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class UsuariosController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $datos['usuarios']=Usuarios::paginate(4);   //muestre los usuarios de a 4 y pintelos
        return view('usuarios.index', $datos);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('usuarios.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //Validar Formularios

        $reglas = [
            'nombre1'=> 'required|string|max:150',
            'nombre2'=> 'required|string|max:150',
            'apellido1'=> 'required|string|max:150',
            'apellido2'=> 'required|string|max:150',
            'email'=> 'requiredunique:usuarios|email:rfc,dns|max:150',
            'telefono'=> 'required|numeric|min:5',
            'contrasena'=> 'required|string|max:150',
            'imagen' => 'required|mimes: jpeg,jpg,png,gif|max:150',
        ];

        $mensaje =  ["required" => 'El :attribute es requerido'];   //mensaje para los campos

        $this->validate($request, $reglas, $mensaje);
              
        
        //De los datos a enviar, saque a la variable token(dada por @csrf)
        $datosUsuario = request()->except('_token','reContrasena');

        //Almacenar Foto en carpeta uploads
        if($request->hasFile('imagen'))
        {
            $datosUsuario['imagen'] =$request->file('imagen')->store('uploads', 'public');
        }
        $usuario = Usuarios::insert($datosUsuario);    //Inserte en la DB los datos que hay en $datosUsuario

        //return view('usuarios')->with('userCreated', $userCreated);
        return redirect('usuarios')->with('mensaje', 'Usuario Creado Exitosamente!!!');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Usuarios  $usuarios
     * @return \Illuminate\Http\Response
     */
    public function show(Usuarios $usuarios)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Usuarios  $usuarios
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
        $usuario = Usuarios::findOrFail($id);      //Lea de la DB los registros y muestrelos
        
        return view('usuarios.edit', compact('usuario'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Usuarios  $usuarios
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        $datosUsuario = request()->except(['_token', '_method']);

        if($request->hasFile('imagen')){ //Si Recoje una foto nueva, borre la anterior y mueva a la carpeta la nueva imagen

            $usuario = Usuarios::findOrFail($id);   
                                                    //Busca informacion en la base de datos correspondiente a un id determinado
            Storage::delete('public/'.$usuario->imagen); //

            $datosUsuario['imagen'] =$request->file('imagen')->store('uploads', 'public');  
        }

        Usuarios::where('id','=', $id)->update($datosUsuario);      //Lea de la DB el registro cuyo id sea el que le pasamos en $id

        //$usuario = Usuarios::findOrFail($id);                       //consulta la bdpara obtener la informacion actual
        return redirect('usuarios')->with('mensaje', 'Usuario Modificado Exitosamente!!!');

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Usuarios  $usuarios
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)        //Pasamos el usuario(id)
    {
        //
        $usuario = Usuarios::findOrFail($id);   
                                                    
        if(Storage::delete('public/'.$usuario->imagen)){

            Usuarios::destroy($id);         //Destruimos el id (usuario)

        } 

        return redirect('usuarios')->with('mensaje', 'Usuario Eliminado!!!');;    //Redireccionamos a la vista
    }                                   
}
